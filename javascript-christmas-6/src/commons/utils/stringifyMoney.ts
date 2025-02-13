export function stringifyMoney(money: number): string {
	return money.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD', // KRW
	});
}
