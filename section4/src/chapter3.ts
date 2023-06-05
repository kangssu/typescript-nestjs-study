// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법이다.
// 하나의 함수 func를 만들고 모든 매개변수의 타입은 number로
// 1. 매개변수가 1개면 20 곱한 값 출력
// 2. 매개변수가 3개면 매개변수들을 전부 더한 값을 출력

import { type } from "os";

// 버전들을 먼저 선언한다. 이것을 오버로드 시그니처라 한다.
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부. 이것을 구현 시그니처라 한다.
// 모든 오버로드 시그니처가 의미가 있도록 만들어줘야 하기 때문에 선택적 매개변수로 값을 변경한다.
function func(a: number, b?: number, c?: number) {
	if (typeof b === "number" && typeof c === "number") {
		console.log(a + b + c);
	} else {
		console.log(a * 20);
	}
}

func(1);
func(1, 2, 3);
