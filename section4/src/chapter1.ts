// 함수 타입 표현식
type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니처(콜  시그니처)
// 함수를 작성하고 함수에 대한 타입을 작성하는 부분을 호출 시그니처라고 보면 된다.
type Operation2 = {
	(a: number, b: number): number;
};
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
