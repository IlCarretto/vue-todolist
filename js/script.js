const {createApp} = Vue;

createApp({
    data() {
        return {
            newTask: "",
            error: false,
            tasks: [
                {
                    text: "Fare esercizio",
                    done: false
                },
                {
                    text: "Mettere a posto camera",
                    done: true
                },
                {
                    text: "Fare la spesa",
                    done: false
                },
                {
                    text: "Programmare",
                    done: false
                },
            ]
        }
    },
    methods: {
        addNewTask() {
            if (this.newTask.length >= 5) {
                this.tasks.push({text:this.newTask, done:false});
                this.newTask = "";
                this.error = false;
            } else {
                this.error = true;
            }
        },
        removeTask(indexOfTask) {
            this.tasks.splice(indexOfTask, 1);
        }
    }
}).mount("#app");