"use strict";

const nameText = document.getElementById('name');
const linkText = document.getElementById('link');
const commentText = document.getElementById('comment');

const userName = document.getElementById('user_name');
const avatarLink = document.getElementById('avatar');
const userComment = document.getElementById('user_comment');

function sendComment() {

const name = nameText.value;
const link = linkText.value;
const comment = commentText.value;

//Сначала переводим имя в нижний регистр и удалаяем пробелы
const lowerName = name.toLowerCase().replace(/ /g,'');
//Затем присваиваем первому символу заглавный регистр
userName.innerHTML = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);

//Присваиваем ссылку на картинку и записываем ее в атрибут src 
avatarLink.src = link;

//Сначала переводим комментарий в нижний регистр и настраиваем спам проверку на слово viagra(для любого регистра)
const lowerСomment = comment.toLowerCase().replace(/viagra/gi,'***');
//Затем присваиваем первому символу заглавный регистр
userComment.innerHTML = lowerСomment.charAt(0).toUpperCase() + lowerСomment.slice(1);


//Очищаем поле ввода
nameText.value = "";
linkText.value = "";
commentText.value = "";

}

//Добавляем функцию-обработчик к событию клика на Enter 
document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") sendComment();
});