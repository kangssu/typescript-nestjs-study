// void
// void -> 공허라는 뜻을 가지고 있다.
// void -> 아무것도 없음을 의미하는 타입이다.

function fun1(): string {
	return "hello";
}

function fun2(): void {
	console.log("Hello");
}

// 변수에 void 타입을 쓸 수는 있지만 아무런 값도 담지 못한다.
// 다만 undefinde 가능하지만 strictNullChecks를 끄면 null은 담을 수 있다.
let a: void;

// never
// never -> 존재하지 않는, 불가능한 타입이다.

// 아래 함수처럼 반환문 자체가 없는게 아닌,
// 반환할 수 없는 상태일 경우 void 를 쓰는 것은 말이 안되기 때문에
// 이 경우 never 타입을 사용한다.
function func3(): void {
	while (true) {}
}

function func4(): never {
	throw new Error();
}

// 변수에 never 타입을 사용할 수 있지만,
// undefined, null 전부 담을 수도 없기 때문에 아무런 값을 넣을 수 없다.
let b: never;
