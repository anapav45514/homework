//Задание 1


function phrase (){
	console.log ('Я учу JavaScript!');
}

phrase();


//Задание 2

//Получаем элемент

const picture1 = document.getElementById('picture1');
let p = document.getElementById('pictureName');

//Кнопки переключения

function function_next() {
	picture1.src = 'assets/img/Annapurna_Base_Camp.jpg'
	p.innerHTML = 'Annapurna Base Camp Trek'
}

function function_back() {
	picture1.src = 'assets/img/Everest_Base_Camp.webp'
	p.innerHTML = 'Everest Base Camp Trek'
}

//*** Задание под звездочкой ***

function calculateTotalPrice(quantity,price){
	if (quantity===undefined){
		quantity=2;
	}
	if (price===undefined){
		price=15000000;
	}
	let result = quantity*price
	alert('Total price '+ result.toLocaleString('ru-RU') + ' rubles');
}