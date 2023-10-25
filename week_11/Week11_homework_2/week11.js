// Получнеие необходимых элементов DOM
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("button");
const taskList = document.getElementById("taskList");

// Функция создания новой задачи

function createTask() {
  const taskText = taskInput.value;
  //Создаем новый элемент списка
  const newTask = document.createElement("li");
  //Присваиваем текст из поля ввода в качестве содержимого новой задачи
  newTask.textContent = taskText;
  //Добавляем новую задачу в список
  taskList.append(newTask);
  //Очищаем поле ввода
  taskInput.value = "";
}

//Добавляем функцию-обработчик к событию клика на кнопку
button.addEventListener("click", createTask);

//Добавляем функцию-обработчик к событию клика на Enter 
document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") createTask();
});

// Функция для работы с элементами списка задач
const list = document.querySelector("ul");
list.addEventListener("click", function (evt) {
  if (evt.target.tagName === "LI") {
    // Код, который будет выполнен при клике на элемент <li>
    evt.target.classList.toggle("task"); // переключение класса
  }
});

