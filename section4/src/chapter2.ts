// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단할 수 있는가?
// 1. 변환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가
// 위 2가지가 전부 호환이 되어야 한다.

// 기준1. 반환값이 호환되는가
// 반환값끼리 다운캐스팅이 되면 안된다.
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
// 이때는 업캐스팅에서 오류가 나고, 다운캐스팅에서는 오류가 나지 않는다. 왜?
// 그 이유는 서브타입에 존재하지만 슈퍼타입에는 존재하지 않는 매개변수를 호출하면 안 되기 때문에
// 이때 업캐스팅을 허용하지 않는다.
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

type Animal = {
	name: string;
};

type Dog = {
	name: string;
	color: string;
};

let animalFunc = (animal: Animal) => {
	console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
	console.log(dog.name);
	console.log(dog.color);
};

// 서브타입의 경우 슈퍼타입과 개수가 다르기 때문에 오류가 난다.
// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
	console.log(animal.name);
	// console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
	console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 
