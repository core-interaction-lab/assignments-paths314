function fetchPrompt () {
    var fashionPrompt = document.getElementById('prompt');
    var prompts = ['Pasta', 'Fried Rice', 'Tomato Soup', 'Sandwich', 'Pizza', 'Milkshake', 'Burrito', 'Burger'];
    var prompt = prompts[Math.floor(Math.random()*prompts.length)];
    fashionPrompt.append(prompt);
}
fetchPrompt();


const todoTextarea = document.getElementById('todo-textarea');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoContainer = document.getElementById('todo-container');


const state = {
    todoItems: [], 
};

const setTodoItems = items => {
    state.todoItems = items;
};

const addTodoItem = item => {
    const todoItemsCopy = state.todoItems.slice();
    todoItemsCopy.push(item);
    setTodoItems(todoItemsCopy);
};

const removeTodoItem = (index) => {
    const todoItemsCopy = state.todoItems.slice();
    todoItemsCopy.splice(index, 1);
    setTodoItems(todoItemsCopy);
};

const buildTodoItem = (item, index) => {
    const todoEl = document.createElement('article');
    const textEl = document.createElement('p');

    textEl.innerHTML = item;

    todoEl.append(textEl);
    return todoEl;
};

const buildTodoItems = items => {
    todoContainer.innerHTML = '';
    const todoItemsEls = items.map(buildTodoItem);
    todoContainer.append(...todoItemsEls);
};

const main = () => {
    addTodoBtn.addEventListener('click', evt => {
        const todoValue = todoTextarea.value;
        if (todoValue.length > 0) {
            addTodoItem(todoValue);
            buildTodoItems(state.todoItems);
        }
    });
};

main();