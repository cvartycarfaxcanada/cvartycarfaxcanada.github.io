Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

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
        ],
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split("").reverse().join("");
        }
    }
})