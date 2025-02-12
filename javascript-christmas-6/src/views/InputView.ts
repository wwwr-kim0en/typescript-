import { Console } from '../utils/missionUtils.js';
export default class InputView {
	private static instance: InputView;

	private constructor() {}
	public static getInstance() {
		if (!this.instance) {
			this.instance = new InputView();
		}
		return this.instance;
	}

	async requestDate() {
		const dateInput = await Console.readLineAsync('12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)');
		// validate dateInput
		console.log(dateInput);

		return dateInput;
	}

	async readDate() {
		const input = await Console.readLineAsync('12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)');
		// ...
	}
	// ...
}
