function openMail() {

    let stuff = {
        "scene": parseInt(document.getElementById("scene").value),
        "act": parseInt(document.getElementById("act").value),
        "title": document.getElementById("title").value,
        "quote": document.getElementById("quote").value,
        "desc": document.getElementById("description").value,
        "by": document.getElementById("by").value,
        "themes": document.getElementById("themes").value.split(","),




    }

   let xhr = new XMLHttpRequest();
   xhr.setRequestHeader = {"params": stuff, "Access-Control-Allow-Origin": null};
   xhr.open('POST', 'https://macbeth-api.herokuapp.com/', true);
   xhr.onload = function () {
    console.log("DOne")
  };

  xhr.send("null");



}