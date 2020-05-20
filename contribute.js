function openMail() {

    let stuff = {
        "scene": parseInt(document.getElementById("scene").value),
        "act": parseInt(document.getElementById("act").value),
        "title": document.getElementById("title").value,
        "quote": document.getElementById("quote").value,
        "desc": document.getElementById("description").value,
        "by": document.getElementById("by").value,
        "themes": JSON.stringify(document.getElementById("themes").value.split(",")),




    }

    $.ajax({
        "type": "POST",
        "url": "https://macbeth-api.herokuapp.com/",
        "success": function(data) {
            console.log("SUCCESS")
        },
        "data": (stuff),
      });

//    let xhr = new XMLHttpRequest();
//    xhr.setRequestHeader = {"params": stuff, "Access-Control-Allow-Origin": null};
//    xhr.open('POST', 'https://macbeth-api.herokuapp.com/', true);
//    xhr.withCredentials = true;
//    xhr.onload = function () {
//     console.log("PLEASE WORK")
//   };

//   xhr.send("null");



}