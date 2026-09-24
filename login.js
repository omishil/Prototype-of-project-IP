const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.querySelector("#email").value;

    const password =
        document.querySelector("#password").value;


    // Get registered student

    const student =
        JSON.parse(localStorage.getItem("student"));


    // Check if student exists

    if (!student) {

        alert("No account found. Please register first.");

        return;
    }


    // Check email and password

    if (
        email === student.email &&
        password === student.password
    ) {

        alert("Login successful!");

        window.location.href =
            "student-dashboard.html";

    } else {

        alert("Invalid email or password!");

    }

});