const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let todos = [];
const TODOS_KEY = "todos";

function onTodoSubmit(event) {
	event.preventDefault();
	const todo = toDoInput.value;
	toDoInput.value = "";
	const todoObj = {
		text: todo,
		id: Date.now(),
	};
	todos.push(todoObj);
	drawTodo(todoObj);
	saveTodo();
}

function saveTodo() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
	const li = event.target.parentElement;
	li.remove();
	todos = todos.filter((todo) => todo.id !== parseInt(li.id));
	saveTodo();
}

function drawTodo(todo) {
	const li = document.createElement("li");
	li.id = todo.id;
	const span = document.createElement("span");
	const button = document.createElement("button");

	span.innerText = todo.text;
	button.innerText = "X";
	button.addEventListener("click", deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
	const parsedTodos = JSON.parse(savedTodos);
	todos = parsedTodos;
	parsedTodos.forEach(drawTodo);
}
