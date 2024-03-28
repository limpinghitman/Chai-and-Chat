// setIsLoggedIn(true);
console.log(isLoggedIn);

function hi()
{
    document.querySelector(".login-btn").style.color="hsla(40, 12%, 5%, 1)";
}

function func2()
{
    document.querySelector(".my-cart").style.color="hsl(38, 61%, 73%)";
}


document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const myCart= document.querySelector(".my-cart");

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "hsl(38, 61%, 73%)";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "aliceblue";
        });
    });

    myCart.addEventListener("mouseover",function()
    {
        myCart.style.backgroundColor="hsla(40, 12%, 5%, 1)";
        myCart.style.color="aliceblue";
        myCart.style.borderColor="hsl(38, 61%, 73%)";
        myCart.style.transition="500ms ease";
        // transform: translate(-50%, -50%)
        // myCart.style.transform="translate(-50%,-50%)";
        document.querySelector(".demo").style.transform="translate(-50%,-50%)";
    });

    myCart.addEventListener("mouseout",function()
    {
        myCart.style.backgroundColor="hsl(38, 61%, 73%)";
        myCart.style.color="black";
    })
});


// var loginButton = document.getElementsByClassName(".my-cart");
// var logoutButton = document.getElementById("logOut");

// document.querySelector(".my-cart").addEventListener("click", function(event) 
// {
//   event.preventDefault(); // Prevent the default behavior of the link
//     console.log("clicked");
//   if (!isLoggedIn) {
//     window.location.href = "login.html";
//   } else 
//   {
//     console.log("yay");
//     logoutButton.style.display="block";
//   }
// });


// logoutButton.addEventListener("click",function(event)
// {
//     isLoggedIn=false;
//     logoutButton.style.display="none";
// });

var dropdownContent = document.querySelector(".dropdown-content");
    
function toggleDropdown() {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// JavaScript to close the dropdown when clicking outside of it
document.addEventListener("click", function(event) {
    var dropdown = document.querySelector(".dropdown");
    if (event.target !== dropdown && !dropdown.contains(event.target)) {
        dropdownContent.style.display = "none";
    }
});





