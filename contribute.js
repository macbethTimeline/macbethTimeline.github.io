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

    fetch('https://macbeth-api.herokuapp.com/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: "",
            params: stuff
        }).then(res => res.json())
        .then(res => console.log(res));

    window.open('mailto:moses.joshua@emanuelschool.nsw.edu.au;keyser.jesse@emanuelschool.nsw.edu.au?subject=Macbeth_Quote&body=' + JSON.stringify(stuff));

}