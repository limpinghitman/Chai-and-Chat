// let isLoggedIn=true;
var isLoggedIn = true;

// Define a setter function to update the variable and log changes
function setIsLoggedIn(value) {
    if (isLoggedIn !== value) {
        console.log("isLoggedIn changed:", value);
        isLoggedIn = value;
    }
}

// Define a getter function to retrieve the current value
function getIsLoggedIn() {
    return isLoggedIn;
}