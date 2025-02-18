export const MAIN_PAGE = '메인화면'
export const MAIN_PAGE_FEATURES = {
  ORDER:(featureId) => {
    return `${featureId} - 주문등록`
  },
  PAY:(featureId) => {
    return `${featureId} - 결제하기`
  },
  EXIT: (featureId) => {
    return `${featureId} - 프로그램 종료`
  }
}
export const TABLE_LIST = '테이블 목록'
export const FOOD_TYPE = {
  CHICKEN: '[치킨]',
  DRINK:'[음료]'
}
export const ORDER_HISTORY = '주문 내역'
export const MENU = '메뉴'
export const AMOUNT = '수량'
export const PRICE = '금액'
export const WON = '원'
export const REQUEST = {
  FEATURE : "원하는 기능을 선택하세요.",
  TABLE:'테이블을 선택하세요.',
  MENU:'등록할 메뉴를 선택하세요.',
  AMOUNT: '메뉴의 수량을 입력하세요.',
  PAYMENT: (cardId,cashId) => {
    return `신용 카드는 ${cardId}번, 현금은 ${cashId}번`
  }
}
export const CONTINUE_TABLE_PAYMENT = (tableId) => {
  return `${tableId}번 테이블의 결제를 진행합니다.`
}
export const TABLE = `┏ - ┓┏ - ┓┏ - ┓┏ - ┓┏ - ┓┏ - ┓
| 1 || 2 || 3 || 5 || 6 || 8 |
┗ - ┛┗ - ┛┗ - ┛┗ - ┛┗ - ┛┗ - ┛`