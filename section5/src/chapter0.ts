// 인터페이스
// 인터페이스는 유니온을 사용할 수 없기 때문에 타입별칭에 쓰거나 타입 주석으로 사용해야한다.
interface Person {
	readonly name: string;
	age?: number;
	sayHi(): void;
	sayHi(a: number, b: number): void;
}

type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
	name: "이정환",
	sayHi: function () {
		console.log("Hi");
	},
};

// person.name = "홍길동";
person.sayHi();
person.sayHi(1, 2);
