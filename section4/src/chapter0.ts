// 함수 타입 정의
// 함수를 설명하는 가장 좋은 방법은
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기하는것,
// 타입스크립트는 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기 하는 것이다.
function func(a: number, b: number) {
	return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
function introduce(name = "이정환", age: number, tall?: number) {
	console.log(`name: ${name}`);
	if (typeof tall === "number") {
		console.log(`tall: ${tall + 10}`);
	}
}

introduce("이정환", 27, 175);
introduce("이정환", 27);

// rest 파라미터 사용하는 문법은 자바스크립트 문법!
// 가변적인 길이의 인수를 전달하면 배열로 묶어서 rest 변수에 저장할 수 있는 문법이다.
function getSum(...rest: number[]) {
	let sum = 0;
	rest.forEach((it) => (sum += it));
	return sum;
}

getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); //15
