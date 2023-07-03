// 제네릭(일반적인, 포괄적인) = 제네럴
// 제네릭 함수로 만들면 반환값을 가변적으로 만들 수 있다.
// <>안에 T는 타입변수라고 한다.
// T는 타입변수로 함수를 호출할때마다 인수에 따라 결정이 되기 때문에 number, string, boolean 등 여러가지 타입을 가질 수 있다.
function func<T>(value: T): T {
	return value;
}

// 위의 함수에서 반환값을 any로 하면 아래의 변수 값들의 반환값도 전부 any 타입으로 추론된다.
let num = func(10);
let bool = func(true);
let str = func("string");

// 인수에 따라 타입을 결정하는 것이 아닌 직접 정의할 수도 있다.(튜플 타입으로 선언)
let arr = func<[number, number, number]>([1, 2, 3]);
