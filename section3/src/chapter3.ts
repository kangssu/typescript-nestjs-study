// 기본타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입간의 호환성
// 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은지 알아보자.
type Animal = {
    name: string;
    color: string;
};

type Dog = {
	name: string;
	color: string;
	breed: string;
};

let animal: Animal = {
	name: "기린",
	color: "yellow",
};

let dog: Dog = {
	name: "돌돌이",
	color: "brown",
	breed: "진도",
};

animal = dog;
// dog = animal;

type Book = {
    name:string;
    price:number;
};

type ProgrammingBook = {
	name: string;
	price: number;
	skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
	name: "한 입 크기로 잘라먹는 리엑트",
	price: 33000,
	skill: "reactjs",
};

book = programmingBook; // 업캐스팅
// programingBook = book; // 다운캐스팅

// 초과 프로퍼티 검사
// 업캐스팅으로 인해서 타입에 없는 프로퍼티를 넣을 수 있었지만,
// 객체 리터럴로 초기화를 할 경우 타입에 없는 프로퍼티를 막는 것이 초과 프로퍼티 검사라고 한다.
// 즉, 딱 맞는 변수 타입에 맞는 프로퍼티로 넣어야한다.
// 검사에 걸리지 않으려면 객체 리터럴을 사용하지 않고 변수에 담아서 사용하면 가능하다.
let book2: Book = {
	name: "한 입 크기로 잘라먹는 리엑트",
	price: 33000,
	// skill: "reactjs",
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
	name: "한 입 크기로 잘라먹는 리엑트",
	price: 33000,
	// skill: "reactjs",
});