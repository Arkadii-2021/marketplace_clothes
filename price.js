const products = {
	1: {
		id: 1,
		name: 'ФУТБОЛКА ANTISOCIAL BASIC ФИОЛЕТОВЫЙ',
		description: 'Футболка выполнена из 100% хлопка.',
		sizes: [],
		price: 1650,
		available: 1
	},
	2: {
		id: 2,
		name: 'ШТАНЫ СПОРТИВНЫЕ ПРЯМЫЕ ANTISOCIAL STRIPE ЧЕРНЫЙ',
		description: '– Прямой крой, стандартная посадка, передние карманы на молнии, эластичный пояс со шнурком, лампасы',
		sizes: [],
		price: 3520,
		available: 1
	},
	3: {
		id: 3,
		name: 'РУБАШКА URBAN CLASSICS CHECKED ROOTS SHIRT DARKBLUE/WHITE',
		description: 'Клетчатая рубашка свободного покроя из тонкой фланели.',
		sizes: [],
		price: 6990,
		available: 1
	},
	4: {
		id: 4,
		name: 'ОЛИМПИЙКА ANTISOCIAL STRIPE СЕРЫЙ',
		description: 'Слегка зауженный крой, минималистичный логотип на груди, лампасы на рукавах, два боковых кармана на замках',
		sizes: [],
		price: 3740,
		available: 1
	},
	5: {
		id: 5,
		name: 'РЮКЗАК ЯКОРЬ МПА ПРОДВИНУТАЯ БАЗА ВС ТЕМНО-СИНИЙ НЕЙЛОН-1000',
		description: 'Описание отсутствует',
		sizes: [],
		price: 5050,
		available: 1
	},	
};

const basket = [
	{
		goodId: products[1],
		amount: 2,
	},
	{
		goodId: products[3],
		amount: 1,
	},
];

function basketAdd(id, quantity) {
	basket.push({goodId: products[id], amount: quantity});
	console.log('Добавлен новый товар в корзину:');
	console.log(basket[basket.length - 1]);
};

function basketDelete(productsId) {
	basket.findIndex(el => el.goodId === products[productsId]);
	console.log('Удален следующий товар:')
	console.log(basket[productsId]);
	basket.splice(0, productsId);
};

function basketClear() {
	basket.length = 0;
	console.log('Корзина пуста' + basket);
}

function basketAll() {
	totalAll = [];
	tp = 0;
	ta = 0;
	for (i = 0; i < basket.length; i++) {
		tp += (basket[i].goodId.price * basket[i].amount);
		ta += basket[i].amount;
		totalAll.push({totalSumm: tp, totalAmount: ta});
	};
	basketTotalAll = new Object(totalAll.pop());
	console.log('Цена и количество всех товаров в корзине:')
	console.log(basketTotalAll);
};

console.log('Список товаров в корзине на текущий момент');
console.log(basket);

basketAdd(2, 1);
basketAdd(4, 1);
basketAdd(5, 3);
basketDelete(1);

console.log('Список товаров в корзине после изменений');
console.log(basket);

basketAll();
/* basketClear(); */
