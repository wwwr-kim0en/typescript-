import { BREAK_LINE, GIVE_AWAY_MIN_PRICE, GIVE_AWAY_PRIZE, GIVE_AWAY_PRIZE_COUNT } from '../commons/constants';
import { Food } from '../commons/types/service';
import { stringifyMoney } from '../commons/utils/stringifyMoney';

export default class Manager {
	menuList: Food[] = [];
	totalPrice: number = 0;
	totalDiscountPrice: number = 0;
	
  constructor(menu: Food[]) {
		this.menuList = menu;
		this.totalPrice = this.calculateTotalPrice() || 0;
		this.totalDiscountPrice = this.calculateTotalDiscountPrice() || 0;
	}

	getOrderList() {
		const menus = this.menuList.map((food) => `${food.name} ${food.count}개` + BREAK_LINE);
		return menus.join('');
	}

	getTotalPrice() {
		return stringifyMoney(this.totalPrice) + '원';
	}

	getGiveAway() {
		if (this.totalPrice >= GIVE_AWAY_MIN_PRICE) {
			return `${GIVE_AWAY_PRIZE} ${GIVE_AWAY_PRIZE_COUNT}개`;
		} else {
			return '없음';
		}
	}

	getDiscountList() {}

	calculateTotalPrice(): number | undefined {
		if (!this.menuList.length) return;
		const totalPrice = this.menuList.reduce((acc, cur) => acc + cur.price * (cur?.count || 0), 0);

		return totalPrice;
	}

	calculateTotalDiscountPrice() {
		return 0;
	}
}
