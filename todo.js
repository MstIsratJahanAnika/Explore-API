const loadToDo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    // fetch
    fetch(url) // response promise
        .then(response => response.json()) //json data deyar promise korbe
        .then(data => displayToDo(data)); //function call
}


// sample object - todo
// { 
//     userId: 7,
//     id: 126, 
//     title: 'ut asperiores perspiciatis veniam ipsum rerum saepe', 
//     completed: true 
// }

const displayToDo = (todos) => {
    // 1. get container
    const todoContainer = document.getElementById('todo-container');
    // console.log(todoContainer);
    todoContainer.innerHTML = ""; //empty

    // 2. card make for each element in container 
    todos.forEach((todo) => {
        console.log(todo);

        //3. make card
        const todoCard = document.createElement('div');
        todoCard.innerHTML = `
            <div class = "todo-card">
                <p>${todo.completed == true? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`} </p>
                <h3>${todo.title}</h3>
            </div>
        `

        // 4. append in main container 
        todoContainer.appendChild(todoCard);
    });
};

loadToDo();