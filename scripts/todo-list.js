const todoList = [
  {
    name: "make dinner",
    dueDate: "2023-07-18",
  },
  {
    name: "wash dishes",
    dueDate: "2023-07-19",
  },
];

renderTodoList();
function renderTodoList() {
  let todoListHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <p>${name}  ${dueDate}
        <button onclick="todoList.splice(${i}, 1);
          renderTodoList();
        ">Delete</button>
      </p>`;
    todoListHtml += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".todo-name");
  const dateElement = document.querySelector(".due-date-input");
  const name = inputElement.value;
  const dueDate = dateElement.value;
  todoList.push({ name, dueDate });
  inputElement.value = "";
  renderTodoList();
}
