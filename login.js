const students = [
    {
        username: "omi",
        password: "1234",
        name: "Omi",
        course: "Web Development",

        progress: {
            html: false,
            css: false,
            javascript: false,
            react: false
        }
    },

    {
        username: "rahim",
        password: "5678",
        name: "Rahim",
        course: "Java Programming",

        progress: {
            java: false,
            oop: false,
            collections: false,
            gui: false,
            projects: false
        }
    }
];
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    const student = students.find(function(student) {
        return student.username === username &&
               student.password === password;
    });

 if (student) {
    alert("Login successful!");
    window.location.href = "student-dashboard.html";
} else {
    alert("Invalid username or password!");
}
});