// 타입 단언(Type Assertion)
type Person = {
	name: string;
	age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age=27;

type Dog = {
	name: string;
	color: string;
};

let dog = {
	name: "돌돌이",
	color: "brown",
	breed: "진도",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼 타입이거나 A가 B의 서브 타입이어야 한다.
// 즉, 겹치는 부분이 있어야 타입 단언을 사용할 수 있다.
let num1 = 10 as never;
let num2 = 10 as unknown;

// 다중단언, 단언을 2번한 경우 가능하긴하다. (근데 실무에선 글쎄..)
let num3 = 10 as unknown as string;

// const 단언
// let을 const로 사용한것과 동일하다고 보면된다.
// const 단언을 하면 수정할 수 없다. readOnly 프로퍼티로 변하기 때문이다.
let num4 = 10 as const;
let cat = {
	name: "야옹이",
	color: "yellow",
} as const;

// cat.name = "";

// Not Null 단언
type Post = {
	title: string;
	author?: string;
};

let post: Post = {
	title: "게시글1",
	author: "이정환",
};

// 만약 아래의 코드에 author?라고 되어있다면 값이 있으면 number 타입, 없으면 undefind라고 인식한다.
// 그렇기 때문에 len에서 오류가 나지만, author!로 바꾼다면 무조건 값이 존재하는데 그건 number 타입이야라고 말할 수 있다.
const len: number = post.author!.length;