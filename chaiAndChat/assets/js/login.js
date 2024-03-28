// console.log(isLoggedIn);
document.querySelector(".login-btn").addEventListener("click", function() 
{   
    // console.log(isLoggedIn);
    console.log("clicked");
    var usernameInput = document.getElementById("email");
    var passwordInput = document.getElementById("pass");
    console.log(usernameInput);

    if (usernameInput.value === "sharif@gmail.com" && passwordInput.value === "sharif") {
        // setIsLoggedIn(true);
        // console.log("User is logged in:", isLoggedIn);
        window.location.href="aboutUs4.html";
    } 
    else 
    {
        alert("Login failed. Please enter correct credentials.");
    }
});