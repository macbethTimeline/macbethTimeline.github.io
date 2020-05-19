

let app = new Vue({
    el: '#app',
    data: {
        indexV: 0,
        timeline: {}
    },
    computed: {
        lengthBar: function() {
            return this.timeline.length-1
        }
    },
    created() {
        fetch("https://github.com/macbethTimeline/macbethTimeline.github.io/blob/master/timeline.json").then((resp) => {
            this.timeline = resp.json;
        }, (error) => {
            console.log(error)
        }) 
    }
})

