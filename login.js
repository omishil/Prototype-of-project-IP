const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Get all registered students
    const students = JSON.parse(localStorage.getItem("students")) || [];

    console.log("Students:", students);
    console.log("Entered email:", email);
    console.log("Entered password:", password);

    // Find matching student
    const student = students.find(function(s) {
        return s.email === email && s.password === password;
    });

    if (student) {

        alert("Login successful!");

        window.location.href = "student-dashboard.html";

    } else {

        alert("Invalid email or password!");

    }

});