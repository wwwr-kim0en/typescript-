import App from './App.ts';
import { Console } from './commons/utils/missionUtils.js';

try {
	new App().run();
} catch (error: any) {
	// console.error(error);
	Console.print(error.message);
}
