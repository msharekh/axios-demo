const axios = require('axios')

axios.get('http://jsonplaceholder.typicode.com/todos')
.then((response) => {
    for (let todo of response.data) {
        console.log(todo.title);        
    }
}).catch((err) => {
    console.log(err);
    })