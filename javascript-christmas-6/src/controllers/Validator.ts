import { EVENT_MONTH_END_DAY, EVENT_MONTH_START_DAY } from '../commons/constants';
import { NO_INPUT, ONLY_NUMBER } from '../commons/constants/errorMessage';
import { Menu } from '../commons/types/service';
import { ValidationError } from '../models/CustomError';

export default class Validator {
	constructor() {}

	static validateDateInput(dateInput: string): number {
		this.isEmptyString(dateInput);
		this.isNumber(dateInput);
		this.isNumberInRange(+dateInput);
		return +dateInput;
	}

	static validateMenuInput(menuInput: string): Menu {
		this.isEmptyString(menuInput);
		return [];
	}

	// 날짜 관련 유효성 검사
	private static isNumber(input: string): void {
		if (isNaN(+input)) {
			throw new ValidationError(ONLY_NUMBER);
		}
	}

	private static isNumberInRange(num: number): void {
		if (typeof num !== 'number') return;
		if (num < 1 || num > 31 || num % 1 !== 0) {
			throw new ValidationError(`${EVENT_MONTH_START_DAY}이상 ${EVENT_MONTH_END_DAY} 이하의 정수만 입력 가능합니다.`);
		}
	}

	private static isEmptyString(input: string): void {
		const trimmed = input.trim();
		if (!trimmed) {
			throw new ValidationError(NO_INPUT);
		}
	}
}
