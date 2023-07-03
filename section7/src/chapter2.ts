// map 메서드
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2,4,6]으로 저장될 것

function map<T, U>(arr: T[], callback: (item: T) => U) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i]));
	}
	return result;
}

map(arr, (it) => it * 2);
// string 타입에서 number 타입으로 반환하려면 제네릭 타입 변수를 2개를 써야한다.
map(["hi", "hello"], (it) => parseInt(it));

// forEach : 반환 값 없이 for 문처럼 반복문이 실행된다.
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}
forEach(arr2, (it) => {
	console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
	it;
});
