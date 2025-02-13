import OutputView from './views/OutputView.ts';
import InputView from './views/InputView.ts';

export default class App {
	async run() {
		const outputView = OutputView.getInstance();
		const inputView = InputView.getInstance();

		outputView.printGreetings();

		const date = await inputView.requestDate();
		const menu = await inputView.requestMenu();

		outputView.printEventResult(date, menu);
	}
}
