"use strict";
// Получение необходимых элементов DOM
const nameText = document.getElementById("name");
const linkText = document.getElementById("link");
const commentText = document.getElementById("comment");

const messageList = document.querySelector(".main-block__chat");

//Функция отображения поля ввода имени пользователя
function showHideNameBox() {
  let chkNo = document.getElementById("chkNo");
  let chkYes = document.getElementById("chkYes");
  if (chkNo.checked) {
    document.getElementById("nameForm").style.display = "none";
  } else if (chkYes.checked) {
    document.getElementById("nameForm").style.display = "flex";
  }
}
//Функция создания нового комментария
function sendComment() {
  const name = nameText.value;
  const link = linkText.value;
  const comment = commentText.value;

  const userInfo = document.createElement("div");
  userInfo.classList.add("block1");
  messageList.append(userInfo);

  //Присваиваем ссылку для аватара пользователя и записываем ее в атрибут src
  const newAvatar = document.createElement("img");
  newAvatar.src = link;
  //Задаем рандомный дефолтный аватар пользователя
  if (link === "") {
    //Создаем массив с рандомными аватарами
    let randomPic = [
      "/week_13/Week13_homework_2/assets/img/avatar1.png",
      "/week_13/Week13_homework_2/assets/img/avatar2.png",
      "/week_13/Week13_homework_2/assets/img/avatar3.png",
      "/week_13/Week13_homework_2/assets/img/avatar4.png",
      "/week_13/Week13_homework_2/assets/img/avatar5.png",
    ];
    newAvatar.src = randomPic[Math.floor(Math.random() * randomPic.length)];
    userInfo.append(newAvatar);
  }

  //Перевод имени в нижний регистр и удаление пробелов
  const userName = document.createElement("p");
  const lowerName = `<p>${name.toLowerCase().replace(/ /g, "")}</p>`;
  //Заглавный регистр для первого символа
  userName.innerHTML = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
  if (name === "") {
    userName.innerHTML = `<p>Username</p>`;
  }
  userInfo.append(userName);
  //Вывод даты комментария
  const date = document.createElement("p");
  date.innerHTML = `<p>${new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })}</p>`;
  userInfo.append(date);

  //Перевод комментария в нижний регистр и настройка спам-проверки на слово viagra(для любого регистра)
  const newComment = document.createElement("div");
  newComment.classList.add("newComment");
  const lowerСomment = comment.toLowerCase().replace(/viagra/gi, "***");
  //Заглавный регистр для первого символа
  newComment.innerHTML =
    lowerСomment.charAt(0).toUpperCase() + lowerСomment.slice(1);
  messageList.append(newComment);

  //Очищаем поле ввода
  nameText.value = "";
  linkText.value = "";
  commentText.value = "";
}

//Добавляем функцию-обработчик к событию клика на Enter
document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") sendComment();
});
