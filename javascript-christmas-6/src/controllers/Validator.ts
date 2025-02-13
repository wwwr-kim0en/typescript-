export default class Validator {
	private static type: number | null;
	private static instance: Validator;

	constructor(type: any) {
		switch (type) {
			case 'date':
				this.validateDate();
				break;
			case 'menu':
				this.validateMenu();
				break;
			default:
				throw new Error('Invalid type');
		}
	}
	public static getInstance(type: any) {
		if (this.type == null || this.type !== type) {
			this.type = type;
			this.instance = new Validator(type);
		}
		return this.instance;
	}
	public static validateNull(input: string) {
		const trimmedInput = input.trim();
		if (!trimmedInput) {
			throw new Error('');
		}
	}

	private validateNumber(input: string, condition?: boolean) {
		if (isNaN(+input)) {
			throw new Error();
		}

		return +input;
	}
	private validateString() {}
	validateDate() {}

	validateMenu() {}
}
