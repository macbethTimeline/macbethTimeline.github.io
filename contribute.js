let firebaseConfig = {
    apiKey: "AIzaSyBtaD1WBX_tnOEFn1hCVlhyeLZstD_FK98",
    authDomain: "macbethtimeline.firebaseapp.com",
    databaseURL: "https://macbethtimeline.firebaseio.com",
    projectId: "macbethtimeline",
    storageBucket: "macbethtimeline.appspot.com",
    messagingSenderId: "373358824090",
    appId: "1:373358824090:web:ef7dcf6bd940877ebd6d23",
    measurementId: "G-Z45VFET5SC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let db = firebase.firestore();





function getValues() {

    let stuff = {
        "scene": parseInt(document.getElementById("scene").value),
        "act": parseInt(document.getElementById("act").value),
        "title": document.getElementById("title").value,
        "quote": document.getElementById("quote").value,
        "desc": document.getElementById("description").value,
        "by": document.getElementById("by").value,
        "themes": document.getElementById("themes").value.split(","),
        "page": document.getElementById("page").value
    }

    return stuff;
}




function submitTo(e) {
    e.preventDefault();

    let things = getValues();

    sendF(things);

    


}

function sendF(stuff) {
    db.collection("timeline").add(stuff).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
}




document.getElementById("sendStuff").addEventListener("click", submitTo);