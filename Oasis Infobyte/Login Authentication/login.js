let login = document.getElementById("login-form");

login.addEventListener("submit", function(event) {
    event.preventDefault();

    // Here, you can perform authentication logic (e.g., send credentials to server, check against database)
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "shubham1602" && password === "pass@1602") {
        // Redirect to dashboard or perform any other action upon successful login
        window.location.href = "logout.html";
        login.addEventListener('click', ()=>{
            username = "";
            password = "";
        });
    } else {
        document.getElementById("error-msg").innerText = "Invalid username or password";
    }
});


