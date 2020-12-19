db.collection("test").doc("test").get().then(function(doc) {

    if (doc.exists) {
        console.log(doc.data().test);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});