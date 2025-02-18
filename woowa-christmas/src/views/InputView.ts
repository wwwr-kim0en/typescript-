import { BREAK_LINE, EVENT_MONTH } from '../commons/constants/index.ts';
import { Food } from '../commons/types/service.ts';
import { convertToMenu } from '../commons/utils/convertToMenu.ts';
import { Console } from '../commons/utils/missionUtils.js';
import Validator from '../controllers/Validator.ts';

export default class InputView {
	private static instance: InputView;

	private constructor() {}
	public static getInstance() {
		if (!this.instance) {
			this.instance = new InputView();
		}
		return this.instance;
	}

	async requestDate(): Promise<number> {
		const message = `${EVENT_MONTH}월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`;
		const dateInput: string = await Console.readLineAsync(message + BREAK_LINE);
		const validatedValue = Validator.validateDateInput(dateInput);
		return validatedValue;
	}

	async requestMenu(): Promise<Food[]> {
		const message = '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)';
		const menuInput = await Console.readLineAsync(message + BREAK_LINE);

		Validator.validateMenuInput(menuInput);

		return convertToMenu(menuInput);
		// return menu;
	}
}
