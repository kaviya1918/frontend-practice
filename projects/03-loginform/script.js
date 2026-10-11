let form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let result = document.getElementById("result");

    if (username == "kaviya" && password == "1918") {
        result.textContent = "Login Successful";
    } else {
        result.textContent = "Invalid Username or Password";
    }

});
