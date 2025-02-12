import { Console } from '../utils/missionUtils.js';
const GREETINGS = '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.';
const BREAK_LINE = '\n';

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

	printMenu() {
		Console.print('<주문 메뉴>');
		// ...
	}
	// ...
}
