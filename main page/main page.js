function checkForLogin() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("signed in");
        } else {
            console.log("signed out");
            location.replace("/auth page/auth.html");
        }
    });
}

function logout() {
    firebase.auth().signOut().then(function() {
        location.replace("/auth page/auth.html")
    }).catch(function(error) {
        // An error happened.
    });
};