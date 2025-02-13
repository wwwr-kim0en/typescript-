export type Food = {
	id: any;
	name: string;
	price: number;
	type: number; // 0-에피타이저,1-메인,2-디저트,3-음료
};

export type Menu = Food[];

export type ChristmasEvent = {
	id: any;
	name: string;
	type: number; // 0-크리스마스 디데이 할인, 1-평일 할인, 2-특별 할인, 3-증정 이벤트
};


