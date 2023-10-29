"use strict";

function calculateTime() {
  // Получаем дату дня рождения
  const dateInput = Date.parse(document.getElementById('dateInput').value);
  // Получаем текущую дату
  const currentDate = new Date();
  const diffInMilliseconds = dateInput - currentDate;
  // Конвертируем разницу из миллисекунд в дни
  const dayDiff = Math.ceil(diffInMilliseconds/1000/60/60/24);
  const result = document.getElementById('result');

  switch (dayDiff%10) {
      case 1:
      result.style.color = 'black';
      result.innerHTML = `До дня рождения остался  ${dayDiff} день`;
      break;
      case 2:
        result.innerHTML = `До дня рождения осталось  ${dayDiff} дня`;
        break;
        case 3:
        result.innerHTML = `До дня рождения осталось  ${dayDiff} дня`;
        break;
        case 4:
        result.innerHTML = `До дня рождения осталось  ${dayDiff} дня`;
        break;
        case 5:
        result.innerHTML = `До дня рождения осталось  ${dayDiff} дней`;
        break;
        case 6:
        result.innerHTML = `До дня рождения осталось  ${dayDiff} дней`;
        break;
        case 7:
        result.innerHTML = `До дня рождения осталось  ${dayDiff} дней`;
        break;
        case 8:
        result.innerHTML = `До дня рождения осталось  ${dayDiff} дней`;
        break;
        case 9:
        result.innerHTML = `До дня рождения осталось  ${dayDiff} дней`;
        break;
        case 10:
        result.innerHTML = `До дня рождения осталось  ${dayDiff} дней`;
        break;
      default:
        result.style.color = 'red';
        result.innerHTML = "Введите дату Вашего рождения";
}}