// 대수 타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입이다.
// 합집합 타입과 교집합 타입이 존재한다.

// 1. 합집합 - Union 타입
// 바를 추가해서 합집합을 만드는 수의 개수는 무제한이다.
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;
let arr: (number | string | boolean)[] = [1, "hello", true];

type Union1 = Dog | Person;

let union1: Union1 = {
	name: "",
	color: "",
};

let union2: Union1 = {
	name: "",
	language: "",
};

let union3: Union1 = {
	name: "",
	color: "",
	language: "",
};

// let union4: Union1 = {
//     name:"",
// }

// 2. 교집합 타입 - Intersection 타입
let variable: number & string;

type Dog = {
	name: string;
	color: string;
};

type Person = {
    name:string;
    language: string;
};

type Intersection = Dog & Person;

// Dog와 Person의 프로퍼티가 전부 들어가있어야한다.
// 하나라도 빠진다면 오류가 난다.
// 그 이유는 Dog와 Person의 교집합은 Dog에도 해당하고, Person에도 해당되야 하기 때문이다.
let interSection1: Intersection = {
	name: "",
	color: "",
	language: "",
};