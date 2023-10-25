// Получнеие необходимых элементов DOM и преобразование данных в число
const price = document.querySelectorAll('.price');
const firstPrice = Number((price[0].innerText).slice(0, -2));
const secondPrice = Number((price[1].innerText).slice(0, -2));
const thirdPrice = Number((price[2].innerText).slice(0, -2));
const fourthPrice = Number((price[3].innerText).slice(0, -2));

const final_price = document.getElementById("final_price");
final_price.innerHTML = (firstPrice + secondPrice + thirdPrice + fourthPrice).toLocaleString('ru-RU') + ' ₽';

function discount(){
	price[0].innerHTML = firstPrice - (firstPrice*0.2)+ ' ₽';
	price[1].innerHTML = secondPrice - (secondPrice*0.2)+ ' ₽';
	price[2].innerHTML = thirdPrice - (thirdPrice*0.2)+ ' ₽';
	price[3].innerHTML = fourthPrice - (fourthPrice*0.2)+ ' ₽';
	final_price.innerHTML = ((firstPrice + secondPrice + thirdPrice + fourthPrice)-((firstPrice + secondPrice + thirdPrice + fourthPrice)*0.2)).toLocaleString('ru-RU') + ' ₽';
}