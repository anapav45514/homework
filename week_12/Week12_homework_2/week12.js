"use strict";

function calculateBMI() {

const weight = parseFloat(document.getElementById('weightInput').value);
const height = parseFloat(document.getElementById('heightInput').value)/ 100; // переводим см в метры
const bmi = Math.round(weight / Math.pow(height,2));
const result = document.getElementById('result');


if (bmi < 18.5) {
  result.innerHTML =
    `Ваш индекс массы тела (ИМТ): ${bmi} 
        \n - У вас недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.`;
} else if (bmi >= 18.5 && bmi <= 24.9) {
  result.innerHTML =
    `Ваш индекс массы тела (ИМТ):  ${bmi}  
        - У вас избыточный вес. В этой категории есть некоторый риск развития заболеваний, связанных с ожирением.`;
} else if (bmi >= 25 && bmi <= 29.9) {
  result.innerHTML =
    `Ваш индекс массы тела (ИМТ): ${bmi}  
        - У вас избыточный вес. В этой категории есть некоторый риск развития заболеваний, связанных с ожирением.`;
} else if (bmi > 30) {
  result.innerHTML =
    `Ваш индекс массы тела (ИМТ):  ${bmi}  
        - У вас ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.`;
}

}

