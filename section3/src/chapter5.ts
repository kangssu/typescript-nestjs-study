// 타입 추론
// 변수에 타입이 명시되어 있지 않아도 알아서 타입을 추론한다.
// 변수의 초기값으로 타입을 추론한다.
let a = 10;
let b = "hello";
let c = {
    id:1,
    name:"이정한",
    profile:{
        nickname:"winterlood"
    },
    urls:["https://winterlood.com"],
};

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message="hello") {
	return "hello";
}

// 초기값이 없다면 any 타입이다.
// 이후에 숫자를 넣는다면 number 타입으로 변경된다.
// any 타입의 진화라고 불러지며 초기값이 없으면 암묵적 any로 하겠다는 뜻이다.
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed();

// let 키워드로 선언하면 any로 나오지만 const 키워드로 선언할 경우 초기값으로 설정된다.
// 아래에서 10은 상수로 다른 값을 담지 않기 때문에 넘버 리터럴 타입으로 보여진다.
const num = 10;
const str = "hello";
let arr = [1, "string"];

