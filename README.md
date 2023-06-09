# TypeScript :fire:
> TypeScript로 개발을 시작하게 된지 6개월이 넘어가고 있다. 회사에서 Java를 TypeScript로 전부 마이그레이션을 진행하게되었고, 
> 기초 개념을 공부할 시간이 없었다. :sob: 정말 미친듯이 바쁜 평일들과 싸우기 바빴다. 👀<br/>
> 지금부터 **인프런 한 입 크기로 잘라먹는 타입스크립트**로 TypeScript 기초개념들을 뿌셔볼 예정이다. 👊😒👊
<br/><br/>
### 📌 TypeScript...
* 2012년 MS 엔지니어, C#의 창시자인 앤더스 하일스버그의 손에서 탄생했다.
* TypeScript는 **JavaScript의 확장판**으로 더 안전하게 사용할 수 있도록 타입 관련 기능들을 추가한 언어라고 할 수 있다.
```
// JavaScript
let a = 1;

// TypeScript
let a: number = 1;
```
* 우리가 기존에 알고 있는 JavaScript 기본 문법은 전부 쓸 수 있기 때문에 TypeScript에서는 타입만 추가적으로 학습하면 된다.
<br/><br/>
#### 그래서 왜 배워야하는데 ? 
* JavaScript는 이미 인기 있는 언어로 너무 잘 나가서 TypeScript가 나왔기 때문이다.
* JavaScript는 웹 브라우저에서만 사용하게 개발된 언어로 유연한 문법이지만 버그 발생 가능성이 높았다.
* NodeJS로 JavaScript를 어디서든 구동할 수 있게끔 해줬기 때문에 웹 서버, 모바일 앱, 데스크탑 앱까지이 만들 수 있었다.
* 하지만, 이렇게 개발하다보니 엄격하지 않은 언어의 특성 때문에 버그 발생 가능성이 너무 위험하여 안정성이 떨어지게 되었다.
* 이렇게 안정성을 확보한 언어가 바로 **TypeScript!**
<br><br/>
### 📌 자! 이제 TypeScript를 파헤치자!
#### 타입 시스템이란?
* 정적 타입 시스템 : 코드 실행 이전 모든 변수의 타입을 고정적으로 결정한다. (ex. C, Java)
* 점진적 타입 시스템 : 자바의 동적 타입 시스템과 자바스크립트의 정적 타입 시스템을 결합한 것이라고 생각한다. <pre>let a:number = 1; <br>let a = 1;</pre>
* 동적 타입 시스템 : 코드를 실행하고 나서 그때마다 유동적으로 변수의 타입을 결정한다. (ex. Python, JavaScript)

#### TypeScript의 동장 원리는?
* TypeScript 코드 👉 AST(추상 문법 트리) 변환 👉 타입 검사(검사 실패하면 컴파일 종료) 👉 JavaScript 코드로 변환 완료 👉 **여기부턴 일반적인 컴파일 과정** AST(추상 문법 트리) 👉 바이트 코드 👉 실행

#### 타입 개념
* **TypeScript는 컴파일 과정에서 설정한 타입은 자바스크립트 파일로 변환하는 과정에서 전부 사라진다.**
* 원시타입(Primitive Type) : 하나의 값만 저장하는 타입 (ex. number, string, boolean, null, undefined)
  * *:은 타입 주석 및 타입 어노테이션이라고 부른다.*
* 리터럴타입 : 값(리터럴) 자체가 타입이 되는 것이다. 타입으로 저장된 값 이외에는 다른 값을 지정할 수가 없다.<br><pre>let numA: 10 = 10;<br>let strB: "hello" = "hello";<br>let boolA: true = true;</pre>
* 배열타입 : 배열안에 들어있는 요소에 대한 타입을 작성 후 대괄호를 작성해주면 된다.<br><pre>let numArr: number[] = [1,2,3];<br>let strArr: string[] : ["hello","im","winterlood"];<br>let boolArr: Array<boolean> = [true,false,true];</pre>
  * *만약 배열안에 타입이 다양하다면 ? (여기서 | 는 유니온이라고 한다.)*<br><pre>let multiArr: (number | string)[] = [1,"hello];</pre>
  * *만약 다차원 배열 타입은 ?* <br><pre>let doubleArr: number[][] = [[1,2,3],[4,5]];</pre>
* 튜플타입 : JavaScript에서는 존재하지 않는 타입이며, 길이와 타입이 고정된 배열로 지정된 타입이 아닌 다른 타입이 들어갈 수 없다.<br><pre>let tup1: [number, number] = [1,2];</pre>
* 객체 리터럴 타입: 객체(Object)의 모든 타입까지 전부 지정하는 것을 말한다.<br>**구조를 기준으로 타입을 정의하기 때문에 구조적 타입 시스템**이라고 부른다.(Property Based Type System)

#### 타입 별칭
* 타입을 마치 별칭처럼 사용하는 것을 타입 별칭이라고 한다.<br><pre>type User = {<br> id: number;<br> name:string;<br>};</pre>
* 타입별칭은 동일한 스코프에 중복되지 않도록 사용해야하지만, 함수내에는 상관없고 export를 사용한다면 문제없다.

#### 인덱스 시그니처
* 객체 타입의 정의를 더 유연하게 해주는 key와 value로 사용한다.<br><pre>type countryCodes = {<br> [key: string]: string;<br>};</pre>
* 여기서 프로퍼티들이 전부 존재하지 않아도 오류가 나지 않는 이유는 규칙을 위반하지만 않으면 발생하지 않는다.<br>기본적인 프로퍼티를 추가적으로 적어주는 것도 좋은 방법이지만 value의 타입은 일치해야된다는 점은 기억해두어야한다!

-- 중간 정리하기

#### 함수타입
* 타입스크립트 함수는 **어떤 타입**의 매개변수를 받고, **어떤 타입**의 결과값을 반환하는지 알면 된다.
  * **선택적 매개변수:** 매개변수에 전달하는 값을 생략하고 싶다면 ?를 사용해서 선택적 매개변수로 정의를 한다. (필수 매개변수 앞에 올 수 없음..)
  선택적 매개변수라면 undefinde 값이 들어올 수 있기 때문에 타입가드로 타입을 좁혀야 한다. (예를들어 tall * 10이 오류가 나는 것 처럼..)
```
function test(a: number, b: number) {
 return a + b;
}
or
function test2(name = "강수", tall?: number) {
 console.log(`name: ${name}`);
 if (typeof tall === "number") {
  console.log(`tall: ${tall}`);
 }
}

test2("강수", 170);
test2("강수");
```

#### 함수 타입 표현식과 호출 시그니처
* **함수 타입 표현식:** 타입 별칭을 사용하여 매개변수의 타입과 반환값의 타입을 별도로 만들 수 있다.<br><pre>type Operation = (a: number, b: number) => number;<br>const add: Operation = (a,b) => a - b;</pre>
* **호출 시그니쳐(콜 시그니처):** 실제 함수를 직접 정의하는 것처럼 타입의 문법으로 정의하는 것이라고 한다. 함수 타입 표현식과 동일한 기능을 한다.<br><pre>type Operation2 = {<br> (a: number, b: number): number;<br>};<br>// function func(a: number): void {}</pre>

#### 함수 타입의 호환성
* 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지를 판단하게 된다.
* 즉, 반환값의 타입과 매개변수의 타입이 호환되어야 함수 타입이 호환된다고 보면 된다.
```
// 1. 반환값이 호환되는지 확인해보기!
type A = () => number; 
type B = () => 10;
let a: A = () => 10; //  number 타입
let b: B = () => 10; // number 리터럴 타입

a = b; // 업캐스팅(number 리터럴 타입 -> number 타입)
b = a; // 여기서 오류! 이유는 다운캐스팅이 되면 안되기 때문이다.(number 타입 -> number 리터럴 타입)

// 2. 매개변수가 호환되는지 확인해보기!
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; // 여기서 오류! 업캐스팅..왜 오류가 날까?
d = c; // 다운캐스팅..왜 될까?
```

* **위에서 생긴 의문점!:astonished: 업캐스팅인데 오류가 나고 다운캐스팅인데 오류가 나지 않는다..이유를 확인해보자!**
  * 매개변수가 객체 타입일때 이해하기 쉽기 때문에 매개변수 객체 타입 예시를 확인해보자!
```
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

animalFunc = dogFunc; // 여기서 오류! 이유는 서브 타입의 매개변수가 슈퍼 타입에 없기 때문에 말도 안되는 코드가 나오는 걸 방지하기 위해서 오류 발생시킨다.
dogFunc = animalFunc; // 여기서 오류 안남! 이유는 서브 타입은 슈퍼 타입의 모든 프로퍼티를 가지고 있기 때문에 가능하다.
```

#### 함수 오버로딩
* 함수의 구현부 없이 작성한 코드를 **오버로드 시그니쳐**라고 한다.
* 실제 구현부를 **구현 시그니쳐**라고 한다. 즉, 오버로드 시그니쳐에서 만들어진 버전이 아니라면 오류가 발생하며 오버로드 시그니쳐의 매개변수 개수 차이가 있다면 실제 구현부에서 선택적 매개변수로 정의해서 모두 의미있게 만들어줘야 한다.












