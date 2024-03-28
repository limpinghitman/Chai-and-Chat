function monitorIsLoggedIn() {
    setInterval(function() {
        console.log("Current isLoggedIn value:", getIsLoggedIn());
    }, 1000); // Log every 1 second
}

monitorIsLoggedIn();