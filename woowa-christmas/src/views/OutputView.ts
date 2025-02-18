import { Console } from '../commons/utils/missionUtils.js';
import { BREAK_LINE, EVENT_MONTH } from '../commons/constants/index.ts';
import { Food } from '../commons/types/service.ts';
import Manager from '../controllers/Manager.ts';

export default class OutputView {
	private static instance: OutputView;

	private constructor() {}

	public static getInstance() {
		if (!this.instance) {
			this.instance = new OutputView();
		}
		return this.instance;
	}

	public printGreetings() {
		const message = `안녕하세요! 우테코 식당 ${EVENT_MONTH}월 이벤트 플래너입니다.`;
		Console.print(message + BREAK_LINE);
	}
	public printEventPreview(date: number, menu: Food[]) {
		Console.print(`${EVENT_MONTH}월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);

		const manager = new Manager(menu);
		const orderList = manager.getOrderList();
		Console.print(BREAK_LINE + '<주문메뉴>' + BREAK_LINE + orderList);

		const totalPrice = manager.getTotalPrice();
		Console.print(BREAK_LINE + '<할인 전 총 주문 금액>' + BREAK_LINE + totalPrice);

		const giveAway = manager.getGiveAway();
		Console.print(BREAK_LINE + '<증정 메뉴>' + BREAK_LINE + giveAway);

		const discountList = manager.getDiscountList();
		Console.print(BREAK_LINE + '<혜택 내역>' + BREAK_LINE + discountList);
	
		
	}

	
}
