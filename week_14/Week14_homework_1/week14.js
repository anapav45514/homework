"use strict";

// Создание пустого массива grades
const grades = [];
//Заполнение массива случайными оценками от 1 до 100 для 12 студентов.
for (let i = 0; i < 12; i++) {
  grades.push(Math.floor(1 + Math.random() * 100));
}
console.log(grades);

const newList = document.querySelector(".main-list");

//Функция расчета среднего балла студентов
function calculateResults() {
  const commonMark = Math.floor(
    grades.reduce((a, b) => a + b, 0) / grades.length
  );

  //Максимальный балл среди студентов, используя соответствующий метод массива.
  const maxValueGrade = Math.max(...grades);
  //Минимальный балл среди студентов, используя соответствующий метод массива.
  const minValueGrade = Math.min(...grades);
  //Функция расчета количества студентов, получивших положительную оценку (балл выше или равен 60).
  const filterGoodMark = grades.filter(function (number) {
    return number >= 60;
  });
  console.log(filterGoodMark);
  //Функция расчета количества студентов, получивших отрицательную оценку (балл ниже 60).
  const filterBadMark = grades.filter(function (number) {
    return number <= 60;
  });
  console.log(filterBadMark);

  //Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E

  const letterMarks = grades.map(function (number) {
    if (number <= 100 && number >= 80) {
      return "A";
    }
    if (number <= 79 && number >= 60) {
      return "B";
    }
    if (number <= 59 && number >= 40) {
      return "C";
    }
    if (number <= 39 && number >= 20) {
      return "D";
    }
  });

  const aveMark = document.createElement("div");
  aveMark.innerHTML = `<p> Оценки студентов - ${grades}</p></br>
  <p> Средний балл студентов - ${commonMark}</p></br>
<p>Максимальный балл среди студентов - ${maxValueGrade}</p></br>
<p>Минимальный балл среди студентов - ${minValueGrade}</p></br>
<p>Количество студентов, получивших положительную оценку - ${filterGoodMark.length}</p></br>
<p>Количество студентов, получивших отрицательную оценку - ${filterBadMark.length}</p></br>
<p>Оценки студентов в буквенном формате - ${letterMarks}</p></br>`;
  newList.append(aveMark);
}
