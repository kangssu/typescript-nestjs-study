// object (객체 리터럴 타입이라고 한다.)
let user = {
    id: 1,
    name: "이정현",
};
// 프로퍼티에 ? 만 붙이면 있어도 되고 없어도 된다는 표시이다.
// 즉, 선택적 프로퍼티, 옵셔널 프로퍼티로 있다면 number 타입이여야 한다.
user = {
    name: "홍길동",
};
let config = {
    apiKey: "MY API KEY",
};
export {};
