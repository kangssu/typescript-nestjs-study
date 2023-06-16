// 선언 합침
// 동일한 이름으로 정의할 경우 타입별칭에선 오류가 발생한다.
// 인터페이스의 경우에는 문제가 되지 않는데 결국 동일한 이름으로 선언되면 전부 합쳐지기 때문이다.
interface Person {
	name: string;
}

interface Person {
	name: string;
	age: number;
}

interface Developer extends Person {
	name: "hello";
}

const person: Person = {
	name: "",
	age: 27,
};

// 모듈 보강 작업할때 선업 합침을 사용한다.
interface Lib {
	a: number;
	b: number;
}

interface Lib {
	c: string;
}

const lib: Lib = {
	a: 1,
	b: 2,
	c: "hello",
};
