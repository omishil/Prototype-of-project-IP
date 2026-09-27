// ================= PASSWORD HASH FUNCTION =================

async function hashPassword(password) {

    const encoder = new TextEncoder();

    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest(
        "SHA-256",
        data
    );

    const hashArray = Array.from(
        new Uint8Array(hashBuffer)
    );

    const hash = hashArray
        .map(function(byte) {
            return byte.toString(16).padStart(2, "0");
        })
        .join("");

    return hash;
}


// ================= LOGIN FORM =================

const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        // ================= GET INPUT =================

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;


        // ================= GET STUDENTS =================

        const students =
            JSON.parse(
                localStorage.getItem("students")
            ) || [];


        console.log("Students:", students);
        console.log("Entered email:", email);


        // ================= HASH ENTERED PASSWORD =================

        const hashedPassword =
            await hashPassword(password);


        console.log(
            "Entered password hash:",
            hashedPassword
        );


        // ================= FIND STUDENT =================

        const student =
            students.find(function(student) {

                return (
                    student.email === email &&
                    student.password === hashedPassword
                );

            });


        // ================= LOGIN RESULT =================

        if (student) {

            alert("Login successful!");

            // Save logged-in student
            localStorage.setItem(
                "loggedInStudent",
                JSON.stringify(student)
            );

            // Go to dashboard
            window.location.href =
                "student-dashboard.html";

        } else {

            alert(
                "Invalid email or password!"
            );

        }

    }
);
