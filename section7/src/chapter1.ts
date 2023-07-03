// 1. 함수에 넘어오는 인수의 타입이 다를 경우
function swap<T, U>(a: T, b: U) {
	return [b, a];
}

// 만약 'a' string 값으로 a가 T로 할당이 되면 그 다음 인수도 string으로 들어가야하기 때문에
// 다른 타입을 쓸 경우에 제네릭 타입변수에 2개를 사용해서 쓰면 오류가 발생하지 않는다.
const [a, b] = swap("a", 2);

// 2.배열의 첫번째 인수를 반환할 수 있도록
// 아래 함수 안 리턴문에서는 아직 호출 전이므로 unknown 타입으로 오류가 발생한다.
// 이때 data의 타입에 T[]를 넣어주면 어떤 타입이든 배열은 존재하기 때문에 unknown 타입의 배열로 만들어주는 것이다.
function retunFirstValue<T>(data: [T, ...unknown[]]) {
	return data[0];
}

let num = retunFirstValue([0, 1, 2]);

let str = retunFirstValue([1, "hello", "mynameis"]);

// 3. 타입에 조건을 걸어서 제한하는 경우
// T는 number 타입의 프로퍼티 length를 가지고 있는 객체를 확장하는 타입으로 제한한다.
function getLength<T extends { length: number }>(data: T) {
	return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });