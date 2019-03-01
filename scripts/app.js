var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!",
        seen: true,
        title: "the title text",
        todos: [
            { text: "Learn JS" },
            { text: "Learn Vue" },
            { text: "Change to TS" },
            { text: "Build something not-shitty" }
        ]
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split("").reverse().join("");
        }
    }
})