function login() {

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log("signed in")
            location.replace("/main page/main page.html")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}