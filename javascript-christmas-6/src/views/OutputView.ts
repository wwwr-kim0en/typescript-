import { Console } from '../commons/utils/missionUtils.js';
import { BREAK_LINE, EVENT_MONTH } from '../commons/constants/index.ts';
import { Food } from '../commons/types/service.ts';
const GREETINGS = `안녕하세요! 우테코 식당 ${EVENT_MONTH}월 이벤트 플래너입니다.`;

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
		Console.print(GREETINGS + BREAK_LINE);
	}
	public printEventResult(date: number, menu: Food[]) {
		const message = `${EVENT_MONTH}월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`;
		Console.print(message + BREAK_LINE);
		// print menu list
		// print total price before discount
		// print giveaway
		// print event list
	}

	printMenu(menu: any) {
		// print menu list
	}

	printTotalPriceBeforeDiscount(menu: any) {}
	// calculate total price from menu list
	//

	printGiveAwayEvent() {}

	printEventList() {}
}
