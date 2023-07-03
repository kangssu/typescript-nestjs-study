// 제네릭 클래스
// 클래스의 생성자를 호출할때 전달하는 인수로 타입 변수의 타입을 추론한다.
// 그렇기 때문에 클래스 생성시 제네릭 타입을 생략해도 된다.
class List<T> {
	constructor(private list: T[]) {}

	push(data: T) {
		this.list.push(data);
	}

	pop() {
		return this.list.pop();
	}

	print() {
		console.log(this.list);
	}
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.push("hello");
