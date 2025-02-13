import { BREAK_LINE, EVENT_MONTH } from '../commons/constants/index.js';
import { Menu } from '../commons/types/service.js';
import { Console } from '../commons/utils/missionUtils.js';
import OutputView from './OutputView.js';

const ASK_DATE = `${EVENT_MONTH}월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`;
const ASK_MENU = '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)';

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
		const dateInput = await Console.readLineAsync(ASK_DATE);
		// validate dateInput

		return +dateInput;
	}

	async requestMenu(): Promise<Menu> {
		const menuInput = await Console.readLineAsync(ASK_MENU + BREAK_LINE);
		//validate menuInput
		OutputView.print(menuInput);
		return [];
	}
}
