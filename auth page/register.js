function register() {

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let username = document.getElementById("username").value

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {

            firebase.firestore().collection("Users").doc(firebase.auth().currentUser.uid).set({
                    Username: username,
                    email: email,
                    downloadURL: "default"
                })
                .then(function() {
                    console.log("Document successfully written!");
                    location.replace("/main page/main page.html")
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });

}