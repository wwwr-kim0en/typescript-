import { availableMenu } from '../commons/constants/availableMenu';

// type Food = {
// 	name: string;
// 	price: number;
// };

type Order = {
	food: Food;
	count: number;
};

type OrderList = Order[];

class EventPlanner {
	private menu: Food[] = availableMenu;
	private orderList: OrderList;
	private totalPrice: number;
	private giveAway: string;
	private discountList: string;
	private date: number;

	constructor(menu: Food[]) {
		this.menu = menu;
		this.orderList = [];
		this.totalPrice = 0;
		this.giveAway = '';
		this.discountList = '';
	}
}

class Food {
	private name: string;
	private price: number;
	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
	}
	getName() {
		return this.name;
	}
	getPrice() {
		return this.price;
	}
}

