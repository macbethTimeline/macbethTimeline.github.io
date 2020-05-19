let app = new Vue({
    el: '#app',
    data: {
        indexV: 0,
        timeline: [{
                "scene": 1,
                "act": 2,
                "title": "Macbeth Introduction",
                "desc": "Macbeth is introduced to the audience",
                "quote": `But brave Macbeth—well, he deserves that name— 
            Disdaining fortune, with his brandished steel,
            Like valour’s minion carved out his passage
            Till he faced the slave;`,
                "by": "The Captain",
                "themes": ["Heroism", "Nobility"],
                "img": "img/photoOne.png"
            },
            {
                "scene": 1,
                "act": 3,
                "title": "Macbeth Paranoia Begins",
                "desc": "Banquo questions Macbeth on his paranoia",
                "quote": `Good sir, why do you start and seem to fear
            Things that dosound so fair?`,
                "by": "Banquo",
                "themes": ["Paranoia"],
                "img": "img/photoTwo.png"
            },
            {
                "scene": 1,
                "act": 3,
                "title": "Macbeth Guilt Begins",
                "desc": "Macbeth quesdtions himself and his thoughts",
                "quote": `This supernatural soliciting
            Cannot be ill, cannot be good. If ill,
            Why hath it given me earnest of success,
            Commencing in a truth? I am thane of Cawdor.
            If good, why do I yield to that suggestion
            Whose horrid imge doth unfix my hair
            And make me seated heart knock at my ribs, Against the use of nature?`,
                "by": "Macbeth",
                "themes": ["Guilt"],
                "img": "img/photoThree.png"
            },
            {
                "scene": 1,
                "act": 4,
                "title": "Macbeth Scheming",
                "desc": "Macbeth schemes about the future",
                "quote": `The prince of Cumberland! That is a step
            On which I must fall down, or else o'erleap,
            For in my way it lies. Stars, hide your fires;
            Let not light see my black and deep desires.`,
                "by": "Macbeth",
                "themes": ["Paranoia"],
                "img": "img/photoFour.png"
            },
            {
                "scene": 1,
                "act": 7,
                "title": "Macbeth Flaws",
                "desc": "Macbeth recognises his own flaws",
                "quote": `I have no spur
            To prick the sides of my intent, but only
            Vaulting ambition, which o'erleaps itself
            And falls on the' other.`,
                "by": "Macbeth",
                "themes": ["Flaws"],
                "img": "img/photoFive.png"
            },
            {
                "scene": 1,
                "act": 7,
                "title": "Lady Macbeth Response",
                "desc": "Lady Macbeth convinces Macbeth to kill",
                "quote": `Art thou afeard
            To be the same in thine own act and valor
            As thou art in desire? Wouldst thou have that. Which thou esteem'st the ornament of life,
            And live a coward in thine own esteem`,
                "by": "Lady Macbeth",
                "themes": ["Flaws"],
                "img": "img/photoSicks.png"

            },
            {
                "scene": 2,
                "act": 1,
                "title": "Macbeth Hallucinates",
                "desc": "Macbeth has a hallucination",
                "quote": `Is this a dagger which I see before me,
            The handle toward my hand? Come, let me clutch thee.`,
                "by": "Macbeth",
                "themes": ["Murder", "Guilt"],
                "img": "img/photoSeven.png"
            },
            {
                "scene": 2,
                "act": 2,
                "title": "Macbeth Guilt Increases",
                "desc": "Macbeth feels even more guilty",
                "quote": `As they had seen me with these hangman's hands.
            List'ning their fear I could not say "Amen,"
            When they did say "God bless us!"`,
                "by": "Macbeth",
                "themes": ["Guilt", "Sorrow"],
                "img": "img/photoAight.png"
            },
            {
                "scene": 2,
                "act": 3,
                "title": "Macbeth's Emotional Journey",
                "desc": "Macbeth's Emotional Journey so far'",
                "quote": `Knock, knock, knock! Who's there, i' th' name of 
            Beelzebub? Here's the farmer that hanged himself on the 
            expectation of plenty`,
                "by": "The Porter",
                "themes": ["Guilt", "Ambition", "Hope"],
                "img": "img/photoNine.png"
            },
            {
                "scene": 3,
                "act": 1,
                "title": "Macbeth Paranoia Increases",
                "desc": "Macbeth is even more paranoid",
                "quote": `To be thus is nothing,
            But to be safely thus.`,
                "by": "Macbeth",
                "themes": ["Paranoia", "Fear"],
                "img": "img/photoTen.png"
            }
        ]
    },
    computed: {
        lengthBar: function() {
            return this.timeline.length-1
        }
    }
})

