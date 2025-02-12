import OutputView from './views/OutputView.ts';
import InputView from './views/InputView.ts';

export default class App {
	async run() {
		const outputView = OutputView.getInstance();
		const inputView = InputView.getInstance();
		outputView.printGreetings();
		await inputView.requestDate();
	}
}
