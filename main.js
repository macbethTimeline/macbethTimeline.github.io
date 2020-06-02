
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


let app = new Vue({
    el: '#app',
    data: {
        indexV: 0,
        timeline: [],
        loading: true
    },
    computed: {
        lengthBar: function() {
            return this.timeline.length-1
        }
    },
    methods: {
        getData: function() {
            
            
            db.collection("timeline").get().then((querySnapshot) => {
                let final = [];
                querySnapshot.forEach((doc) => {
                    let a = doc.data();
                    // a.scene = a.scene.toString()
                    // a.act = a.act.toString()
                    if (a["img"] == undefined) {
                        a["img"] = "img/test.jpg"
                    }

                    final.push(a)
                    
                    
                });
                final.sort((a, b) => (a.act > b.act) ? 1 : (a.act === b.act) ? ((a.scene > b.scene) ? 1 : -1) : -1 )


                this.timeline = final;
            });
            


            this.loading = false;
        }
    },
    mounted() {
        this.getData();
    }
})

