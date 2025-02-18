import { Food } from '../types/service.ts';

// isMenuFormat 검사 이후 실행
export function convertToMenu(menuInput: string): Food[] {
	const menu = menuInput.split(',').map((item) => {
		const [foodName, count] = item.split('-');
		const food: Food = {
			name: foodName,
			price: 0,
			count: +count,
			type: 0,
		};
		return food;
	});
	return menu;
}
