import { EVENT_MONTH_END_DAY, EVENT_MONTH_START_DAY } from '../commons/constants/index.ts';
import { INVALID_MENU, NO_INPUT, ONLY_NUMBER } from '../commons/constants/errorMessage.ts';
import { ValidationError } from '../models/CustomError.ts';
import { convertToMenu } from '../commons/utils/convertToMenu.ts';

export default class Validator {
	constructor() {}

	public static validateDateInput(dateInput: string): number {
		this.isEmptyString(dateInput);
		this.isNumber(dateInput);
		this.isNumberInRange(+dateInput);
		return +dateInput;
	}

	public static validateMenuInput(menuInput: string): void {
		this.isEmptyString(menuInput);
		this.isMenuFormat(menuInput);
		convertToMenu(menuInput);
	}

	// 날짜 관련 유효성 검사
	private static isNumber(input: string): void {
		if (isNaN(+input)) {
			throw new ValidationError(ONLY_NUMBER);
		}
	}

	private static isNumberInRange(num: number): void {
		if (typeof num !== 'number') return;
		if (num < EVENT_MONTH_START_DAY || num > EVENT_MONTH_END_DAY || num % 1 !== 0) {
			throw new ValidationError(`${EVENT_MONTH_START_DAY}이상 ${EVENT_MONTH_END_DAY} 이하의 정수만 입력 가능합니다.`);
		}
	}

	private static isEmptyString(input: string): void {
		const trimmed = input.trim();
		if (!trimmed) {
			throw new ValidationError(NO_INPUT);
		}
	}

	private static isMenuFormat(menuInput: string) {
		const arr = menuInput.split(',');
		for (const item of arr) {
			const inputItem = item.split('-');
			if (inputItem.length !== 2) {
				throw new ValidationError(INVALID_MENU);
			}
			const [menu, count] = inputItem;
			if (isNaN(+count)) {
				throw new ValidationError(INVALID_MENU);
			}
		}
	}
}
