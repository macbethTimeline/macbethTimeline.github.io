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
    window.open('mailto:moses.joshua@emanuelschool.nsw.edu.au;keyser.jesse@emanuelschool.nsw.edu.au?subject=subject&body=' + JSON.stringify(stuff));

}