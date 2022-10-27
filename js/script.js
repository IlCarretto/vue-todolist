const {createApp} = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "Fare esercizio",
                    cancel: "&#x2717;",
                    done: false
                },
                {
                    text: "Mettere a posto camera",
                    cancel: "&#x2717;",
                    done: false
                },
                {
                    text: "Fare la spesa",
                    cancel: "&#x2717;",
                    done: false
                },
                {
                    text: "Programmare",
                    cancel: "&#x2717;",
                    done: false
                }
            ]
        }
    },
    methods: {

    }
}).mount("#app");