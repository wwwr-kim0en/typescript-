import OutputView from './views/OutputView.ts';
import InputView from './views/InputView.ts';
import { Food } from './commons/types/service.ts';

export default class App {
	async run() {
		const outputView = OutputView.getInstance();
		const inputView = InputView.getInstance();

		outputView.printGreetings();

		const date: number = await inputView.requestDate();

		const menu: Food[] = await inputView.requestMenu();

		outputView.printEventPreview(date, menu);
	}
}
