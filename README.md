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
#### 1. 타입 시스템이란?
* 정적 타입 시스템 : 코드 실행 이전 모든 변수의 타입을 고정적으로 결정한다. (ex. C, Java)
* 점진적 타입 시스템 : 자바의 동적 타입 시스템과 자바스크립트의 정적 타입 시스템을 결합한 것이라고 생각한다. <pre>let a:number = 1; <br>let a = 1;</pre>
* 동적 타입 시스템 : 코드를 실행하고 나서 그때마다 유동적으로 변수의 타입을 결정한다. (ex. Python, JavaScript)

#### 2. TypeScript의 동장 원리는?
* TypeScript 코드 👉 AST(추상 문법 트리) 변환 👉 타입 검사(검사 실패하면 컴파일 종료) 👉 JavaScript 코드로 변환 완료 👉 **여기부턴 일반적인 컴파일 과정** AST(추상 문법 트리) 👉 바이트 코드 👉 실행

#### 3. 타입 개념
* **TypeScript는 컴파일 과정에서 설정한 타입은 자바스크립트 파일로 변환하는 과정에서 전부 사라진다.**
* 원시타입(Primitive Type) : 하나의 값만 저장하는 타입 (ex. number, string, boolean, null, undefined)
  * *:은 타입 주석 및 타입 어노테이션이라고 부른다.*
* 리터럴타입 : 값(리터럴) 자체가 타입이 되는 것이다. 타입으로 저장된 값 이외에는 다른 값을 지정할 수가 없다.<br><pre>let numA: 10 = 10;<br>let strB: "hello" = "hello";<br>let boolA: true = true;</pre>
* 배열타입 : 배열안에 들어있는 요소에 대한 타입을 작성 후 대괄호를 작성해주면 된다.<br><pre>let numArr: number[] = [1,2,3];<br>let strArr: string[] : ["hello","im","winterlood"];<br>let boolArr: Array<boolean> = [true,false,true];</pre>
  * *만약 배열안에 타입이 다양하다면 ? (여기서 | 는 유니온이라고 한다.)*<br><pre>let multiArr: (number | string)[] = [1,"hello];</pre>
  * *만약 다차원 배열 타입은 ?* <br><pre>let doubleArr: number[][] = [[1,2,3],[4,5]];</pre>
* 튜플타입 : JavaScript에서는 존재하지 않는 타입이며, 길이와 타입이 고정된 배열로 지정된 타입이 아닌 다른 타입이 들어갈 수 없다.<br><pre>let tup1: [number, number] = [1,2];</pre>
* 객체 리터럴 타입: 객체(Object)의 모든 타입까지 전부 지정하는 것을 말한다.<br>**구조를 기준으로 타입을 정의하기 때문에 구조적 타입 시스템**이라고 부른다.(Property Based Type System)

#### 4. 타입 별칭
* 타입을 마치 별칭처럼 사용하는 것을 타입 별칭이라고 한다.<br><pre>type User = {<br> id: number;<br> name:string;<br>};</pre>
* 타입별칭은 동일한 스코프에 중복되지 않도록 사용해야하지만, 함수내에는 상관없고 export를 사용한다면 문제없다.

#### 5. 인덱스 시그니처
* 객체 타입의 정의를 더 유연하게 해주는 key와 value로 사용한다.<br><pre>type countryCodes = {<br> [key: string]: string;<br>};</pre>
* 여기서 프로퍼티들이 전부 존재하지 않아도 오류가 나지 않는 이유는 규칙을 위반하지만 않으면 발생하지 않는다.<br>기본적인 프로퍼티를 추가적으로 적어주는 것도 좋은 방법이지만 value의 타입은 일치해야된다는 점은 기억해두어야한다!

#### 🌞 여기서 STOP!!! 타입스크립트를 이해하고 넘어가자!
#### 6. 타입 계층도 및 호환성
![Untitled](https://github.com/kangssu/typescript-study/assets/83870420/b5c7e5f6-6fe5-408b-ad93-6af394d44405)
* **슈퍼타입(부모타입) 👉 서브타입(자식타입): 다운캐스팅(대부분 상황 허용 X)**
* **서브타입(자식타입) 👉 슈퍼타입(부모타입): 업캐스팅(모든 상황 허용)**
* **Unknown 타입:** 가장 상위로 전체 집합, 슈퍼 타입이라고 말한다. 즉, 모든 타입을 넣을 수 있지만 예를 들어 number 타입에 unknown 타입을 넣는다면 다운 캐스팅이기 때문에 오류가 난다.
* **never 타입:** 모든 타입의 서브 타입이라고 한다. 즉, 공집합으로 아무 값도 반환할 값이 없다고 보면 된다. 예를 들어 number, string 모든 타입에 never 타입을 넣으면 전부 업캐스팅이기 때문에 오류가 나지 않는다.
* **Void 타입:** 반환값이 없는, 리턴문이 없는 함수에서 사용된다. (return undefined로 해도 문제는 없음..)
* **any 타입:** 치트키 타입으로 타입 계층도를 아예 무시한다. 모든 타입의 슈퍼 타입으로 위치하기도 하며 서브 타입으로 위치하기도 한다. (never 타입까지 다운 캐스팅 할 순 없음..)

#### 7. 객체 타입의 호환성
* 적은 프로퍼티를 가지고 있는 객체가 슈퍼 타입이고 추가 프로퍼티를 가지고 있는 객체는 서브 타입이라고 한다.
* 객체 초기화 할 경우에는 서브 타입에 존재하는 프로퍼티를 넣을 수 없다. 그 이유는 초과 프로퍼티 검사가 발동되었기 때문에 오류가 난다고 보면 된다.
  * **초과 프로퍼티 검사:** 객체 타입 변수를 초기화 할 경우에 초과 프로퍼티(실제 타입에 정의해놓지 않은 프로퍼티)가 존재하면 안 되도록 막는 것이다.

#### 8. 대수 타입
* 여러개의 타입을 합성해서 새롭게 만들어낸 타입이라고 하며 합집합 타입과 교집합 타입이 존재한다.
* **합집합 타입(Union 타입):** | 를 이용해서 추가할 수 있는 타입은 무한대이다.
```
let a: string | number | boolean | undefined | null | {};
a = 1;
a = "hello";
a = true;

let a: (number | string | boolean)[] = [1, "hello", true];
```
* **교집합 타입(Intersection 타입):** &로 추가된 모든 프로퍼티가 포함되어야 한다.
```
type Dog = {
 name: string;
 color: string;
};
type Person = {
 name: string;
 language: string;
};

type Interscrion = Dog & Person;
let intersection1: Intersection = {
 name: "",
 color: "",
 language: "",
};
```

#### 9. 타입 추론
* 변수에 타입을 정의하지 않아도 타입을 자동으로 타입을 추론한다.
* 하나의 변수에 타입을 정의하지 않으면 숫자를 담았다가 문자를 담으면 각각의 타입이 number, string으로 타입 추론이 된다. 이것을 any 타입의 진화라고 한다.
* const는 넘버 리터럴로 추론해주지만 let은 좀 더 범용적인 타입으로 추론을 해준다. 이것을 타입 넓히기라고 한다.(실무에서는 const로 전부 사용했음..)
```
let d; // 암묵적 any 타입이라고 한다. 이 경우가 any 타입이 진화한다고 보면된다.
d = 10; // any -> number 타입으로 진화!
d= "hello"; // any -> string 타입으로 진화!

const num = 10; // 이 경우 num은 10만 담을 수 있기 때문에 넘버 리터럴 타입!
let arr = [1, "string"]; // (number | string) []인 유니온 타입으로 추론된다!
```

#### 10. 타입 단언(Type Assertion)
* 초기에 빈 객체로 만들고 나중에 값을 정의해주고 싶다면 as 타입으로 단언하면 된다. as 앞에 있는 값을 as 뒤에 있는 타입으로 추론하라는 의미다.
* 만약 타입에 정의되지 않은 추가 프로퍼티를 사용해야 한다면 동일하게 객체 뒤에 as를 붙이면 된다.
* A as B일 경우 A가 B의 슈퍼 타입이거나 A가 B의 서브 타입이여야 한다.
  * 위 2가지가 아닐 경우 오류가 발생하는데 이때 다중 단언(2번)하면 오류 나지 않는다. 예를 들어 10 as unknown as string..!(좋은 방법은 아님..)
* **const 단언:** as const를 사용하면 let이 const로 사용한 것으로 타입이 추론된다. 또한, 객체로 타입을 초기화 할 경우에 사용하면 모든 프로퍼티가 readonly로 추론이 된다. 즉 프로퍼티 값을 변경할 수 없다.(근데 실무에서는 전부 const를 사용했기 때문에..사용할 일은 드물듯..?)
* **Non Null 단언:** 만약 객체에서 옵션 프로퍼티가 있을 경우에는 해당 값이 undefinde일 경우가 존재한다. 이때 길이를 체크하는 코드를 작성해버리면 ?.length 이런식으로 작성되는데 undefinde 길이를 측정할 수 없기 때문에 오류가 발생한다. 오류를 해결하기 위해서는 !로 있다는 조건에만 적용될 수 있게 붙여줘야한다.
```
type Persion = {
 name: string;
 age: number;
}

let persion = {} as Person;
person.name = "이정현";
person.age = 27;
```

#### 11. 서로소 유니온 타입
* 교집합이 없는 타입들로만 만든 유니온 타입을 말한다. 예를 들어 string 타입과 number 타입이라고 생각하면 된다. 이때 교집합이 하나도 없기 때문에 서로소 관계라고 하며 서로소 집합이라고 한다.
* 리터럴 타입으로 고유 값을 정의해준다면 교집합 관계에서 분리될 수 있다. 예를 들면 아래 객체들에서 tag 개념이다.
```
type Admin = {
 tag: "ADMIN";
 name: string;
};
type Guest = {
 tag = "GUEST";
 name: string;
};
```
#### 🌚 다시 GOGO!!! 개념을 좀 더 파악한 것 같다..

#### 12. 함수타입
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

#### 13. 함수 타입 표현식과 호출 시그니처
* **함수 타입 표현식:** 타입 별칭을 사용하여 매개변수의 타입과 반환값의 타입을 별도로 만들 수 있다.<br><pre>type Operation = (a: number, b: number) => number;<br>const add: Operation = (a,b) => a - b;</pre>
* **호출 시그니쳐(콜 시그니처):** 실제 함수를 직접 정의하는 것처럼 타입의 문법으로 정의하는 것이라고 한다. 함수 타입 표현식과 동일한 기능을 한다.<br><pre>type Operation2 = {<br> (a: number, b: number): number;<br>};<br>// function func(a: number): void {}</pre>

#### 14. 함수 타입의 호환성
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

#### 15. 함수 오버로딩
* 함수의 구현부 없이 작성한 코드를 **오버로드 시그니쳐**라고 한다.
* 실제 구현부를 **구현 시그니쳐**라고 한다. 즉, 오버로드 시그니쳐에서 만들어진 버전이 아니라면 오류가 발생하며 오버로드 시그니쳐의 매개변수 개수 차이가 있다면 실제 구현부에서 선택적 매개변수로 정의해서 모두 의미있게 만들어줘야 한다.

#### 16. 인터페이스
* **인터페이스란?** 타입별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법이다.
  * 상호간의 약속된 규칙으로 객체의 구조를 정의하는데 특화된 문법으로 상속, 합침 등의 특수한 기능까지~ 제공한다.
  * 인터섹션이나 유니온은 따로 사용할 수 없기 때문에 타입 주석에 활용하거나 타입별칭을 사용해야한다.
  * 또한, 오버로딩을 사용하려면 호출 시그니처를 사용해서 만들어야하고 함수 타입 표현식으론 만들 수 없다. 메소드명 자체가 중복되었다고 오류가 나면서 인식이 되지 않기 때문이다.

* **인터페이스 확장**
  * 인터페이스로 타입을 여러개 만들 경우 동일한 프로퍼티가 중복되는 경우가 있을 것이다.
  * 이때 몇개 안되면 한개를 수정해도 금방하지만, 다양할 경우 노가다..이때 사용하는 것이 인터페이스 확장이다!
  * 즉, extends(확정하다)를 사용하여 중복되는 타입을 받아주면 된다. (ex. extend Animal) 다른 말로는 상속이라고 불린다.
  * 상속받은 프로퍼티의 타입을 다시 정의할 수 있지만, 서브 타입일 경우에만 가능하다.(다운 캐스팅만 가능한것..?)
  * 다중 확장은 extends Dog, Cat 이런식으로 2개를 상속받을 수 있다. Dog, Cat 프로퍼티를 전부 가질 수 있다고 보면 된다.
```
interface Animal {
 name: string;
 color: string;
}

interface Dog extends Animal {
 isBark: boolean;
}

const dog: Dog = {
 name: "",
 color: "",
 isBark: true,
};
```
* **인터페이스 합치기(선언 합침)**
  * 동일한 이름으로 정의한 인터페이스의 경우 선언된 프로퍼티들이 전부 합쳐진다. 즉, 중복 선언 가능!
  * 다만, 동일한 프로퍼티의 타입을 다르게 선언하면 충돌이 되지 않는다. 타입은 무조건 일치해야한다.(실무에서는 사용하지 않았던..😅)

#### 17. 클래스
* 타입스크립트 클래스는 타입으로도 사용할 수 있다. 그 이유는 구조적 타입 시스템이므로 클래스의 구조로 판단을 하기 때문에 거기에 맞는 타입이라고 해석된다.
* 만약, 상속받아서 사용하는 클래스라면 상속받는 프로퍼티들은 super로 명시하지 않으면 오류가 발생한다.
```
class Employee {
 name: string;
 age: number;
 position: string;

 constructior(name: string, age: number, position: string) {
  this.name = name;
  this.age = age;
  this.position = position;
 }

 work() {
  console.log("일함");
 }
};

// 인스턴스 생성하기!
const employeeB = new Employee("이정환", 27, "개발자");
```

#### 18. 클래스의 접근제어자(access modifier)
* 클래스를 만들때 특정 필드나 메서드에 접근할 수 있는 범위라고 생각하면 된다.(실무에서는 private readonly로 많이 사용했던 기억이..😕)
* 클래스 내의 생성자에 접근제어자를 달아줄 수 있는데 이때는 필드와 필드 초기화까지 자동으로 만들어주기 때문에 필드, 필드 초기화 코드를 전부 삭제해줘야 한다.
* **public:** 기본! 클래스에 아무 접근제어자를 사용하지 않으면 public이 들어가있다고 생각하면 된다. 아무 제약이 없기 때문에 아무데서나 사용할 수 있다.
* **private:** 클래스 내에서만 사용할 수 있으며 클래스 외부에서 접근 또는 읽기까지 불가능하기 때문에 클래스 내의 메서드에서 사용해야한다.
* **protected:** 파생 클래스의 메서드까지는 접근할 수 있는 범위이다.

#### 19. 제네릭
* **제네릭이란?**
  * 함수의 인수에 따라 반환값을 가변적으로 사용하는 것이 제네릭으로 일관적인, 포괄적인 함수를 제네릭 함수라고 한다.
  * 함수의 이름 뒤에 <T> 문법을 사용해서 타입변수를 지정해줘야한다.
  * 제네릭 타입변수에 어떤 타입이 담기는지 결정될 때는 함수를 호출할 때마다 결정된다.<br><pre>function func<T>(value: T): T{<br> return value;<br>}<br>let num = fun(10); value 10, number 타입이 들어가기 때문에 제네릭 타입이 number로 추론된다.<br>let bool = func(true);</pre>

* **제네릭 함수 응용**
  * 함수 호출시 2가지 인수를 받을 경우 제네릭 타입변수도 2가지를 받아야 타입이 다르더라도 오류가 나지 않는다.(<T, U> 이런식으로) 그 이유는 처음에 받은 타입이 두번째 타입에도 동일하게 할당이 되서 오류가 나기 때문이다.
  * 함수 호출 전에는 제네릭 타입에 어떤 타입이 올지 모르기 때문에 배열의 인덱스를 반환할 경우에 오류가 발생한다. 그 이유는 unknown 타입의 인덱스 형식으로 사용할 수 없기 때문인데 이때 T[]로 명시해준다면 오류가 발생하지 않는다.(타입을 명시하지 않을 경우 (data:[T, ...unknown[]])으로 사용)<br><pre>function first<T>(data: T[]){<br> return data[0];<br>}<br>let num = first([0,1,2]);</pre>
  * 길이를 반환하는 함수에서는 배열로 작성하는 것이 아닌 제네릭 타입변수에 길이가 number인 프로퍼티를 가지고 있는 타입으로 확장한다는 것을 추가해줘야 한다.(<T extends {length:number}>) 

* **map 메서드**
  * 만약 arr에 string 배열 타입이 들어가고 callback 함수에 반환값의 타입이 number 타입일 경우 제네릭 타입변수를 2가지로 받아서 반환값을 다르게 작성해줘야 한다.<br><pre>function map(arr: T[], callback: (item: T) => T) {<br> let result = [];<br> for (let i = 0; i < arr.length; i++) {<br> result.push(callback(arr[i]));<br> }<br>}<br>map(arr, (it) => it * 2);<br>map(["hi", "hello"], (it) => parsInt(it));</pre>

* **forEach 메서드**
```
function forEach<T>(arr: T[], callback : (item: T) => void) {
 for(let i = 0; i < arr.length; i++) {
  callback(arr[i]);
 }
}

forEach(arr2, it) => {
 console.log(it.toFixed());
});
```

* **제네릭 인터페이스**
  * 제네릭 함수 만드는것과 동일하게 만들어 주면 된다.(function -> interface) 다만, 변수에 타입으로 정의할 경우 타입 변수를 꼭! 정의해줘야한다.
  * 타입 변수(공식문서 명칭) = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터라고 불리기도 한다.<br><pre>interface KeyPair<K, V> {<br> key: K;<br> value: V;<br>}<br>let keyPair: KeyPair<string, number> = {<br> key: "key",<br> value: 0;<br>};</pre>
  * 제네릭 인터페이스는 인덱스 시그니처와 사용하면 좋은 이유는 변수 타입을 다양하게 사용할 수 있다. 😄<br><pre>interface Map<V> {<br> [key: string]: V;<br>}<br>let stringMap: Map<string> = {<br> key: "value",<br>};<br>let booleanMap: Map<boolean> = {<br> key: true,<br>};</pre>

* **제네릭 타입별칭**
  * 제네릭 타입별칭도 제네릭 인터페이스처럼 동일하게 타입 변수를 꼭! 정의해줘야하며 제네릭 인터페이스랑 문법만 다를뿐 거의 비슷하다고 보면 된다.<br><pre>type Map2<V> = {<br> [key: string]: V;<br>};<br>let stringMap2: Map2<string> = {<br> key: "typescript",<br>};</pre>

* **제네릭 클래스**
  * 클래스 이름 뒤에 제네릭 타입변수를 작성하여 제네릭 클래스로 만들어준다.
  * 이때 클래스 생성자를 호출할 때 생성자에 인수로 전달하는 값을 기준으로 타입변수의 타입을 추론한다. 그렇기 때문에 클래스 생성자에 제네릭 타입변수를 따로 추가하지 않아도 된다.

* **제네릭 프로미스**
  * 프로미스 생성자를 호출할 때 타입변수를 할당하면 비동기 처리 결과 값을 직접 명시할 수 있다. 다만, 실패했을 경우는 설정할 수 없으며 이때는 unknown 타입으로 확인된다.
  * 함수의 반환 값 타입에 제네릭 타입변수를 작성하는 경우가 많다. 함수의 선언만 봐도 어떤 타입을 반환하는지를 확인하는 것이 좋기 때문이다.(실무에서는 함수의 반환 값 타입에 작성했었다..😮)

#### 20. 타입 조작하기
* **인덱스드 엑세스 타입:** 인덱스를 이용해서 특정 프로퍼티 타입을 추출하는 것이다. 객체, 배열, 튜플에 전부 사용 가능하다.
  * ex. Post["author"] -> Post 타입중 뽑아내고 싶은 프로퍼티 author의 객체 타입만 추출할 수 있다.
  * 인덱스 안에 들어가는 문자열은 값(변수)이 아닌 타입이라는 것을 이해해야한다! 또한, 타입 안에 특정 프로퍼티가 없는 값을 넣으면 오류가 발생한다.
  * ex. Post 타입의 author 객체의 id 값만 가져오고 싶을 경우 -> Post["author"]["id"]
  * 배열 타입의 경우 타입 뒤에 [0] 또는 [number]를 넣어주면 하나의 요소의 타입만 가져올 수 있으며 이때도 값이 아닌 number 타입! 타입을 넣은 것이다.
  * 튜플 타입의 경우 인덱스를 사용해서 각각 타입을 가져올 수 있다.(ex. type Tup = [number, string] -> Tup[1])

* **keyof 타입:** 객체타입에 적용하는 연산자로 keyof 타입을 사용하면 전부 유니온 타입으로 모든 프로퍼티를 추출할 수 있다.
  * 다만, keyof 연산자는 타입에만 사용할 수 있다는 것을 기억해야하며, keyof를 typeof와 사용한다면 더 간편하게 사용할 수 있다.<br><pre>type Person = typeof person;<br>function getPropertyKey(person: Person, key: keyof typeof person( {<br> return person[key];<br>}<br>const person = {<br> name: "이정환",<br> age: 27,<br>};<br>getPropertyKey(person, "name");</pre>

* **맵드 타입:** keyof 타입처럼 객체타입에 적용할 수 있으며, 인덱스 시그니처 문법과 비슷하기도 하다.
  * [key in "id" | "name"]: User[key] -> key in은 key가 id, name일 수도 있다고 해석되고 User[key]는 인덱스드 엑세스 타입으로 key가 id, name으로 해석된다. 즉, id: User["id"]으로 number 타입, name: User["name"]으로 string 타입이 된다.
  * 여기서 맵드 타입의 진가는 선택적 프로퍼티를 설정하고 싶을때 사용한다.(ex. [key in "id" | "name"]?: User[key])
  * 만약 유니온 타입으로 넣기 너무 많을 경우 keyof와 같이 사용할 수 있다.(ex.[key in keyof User]?: User[key])
  * 만약 전부 수정이 안되고 읽기전용일 경우 readonly를 사용해주면 된다.(ex.readonly [key in "id" | "name"]?: User[key])
 
* **템플릿 리터럴 타입**
```
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";
type ColorAnimal = `${Color}-${Animal}`; // 간단하게 만들고 싶은 조합으로 만들 수 있다.(문자열일 경우)
```

#### 21. 조건부 타입
* 조건부 타입은 삼항연산자를 사용한 조건으로 타입을 결정하는 것이다.
```
// number 타입이 string 타입을 확장한 타입이 참이면 string 타입, 거짓이면 number 타입(결과: A는 number 타입)
type A = number extends string ? string : number; 
```
* 제네릭과 조건부 타입을 같이 사용하는 경우에는 타입을 가변적으로 쓰면서 논리의 흐름대로 타입을 변경할 수 있다.
```
// StringNumberSwitch 호출시 넘어오는 타입이 number 타입을 확장한 타입인지
type StringNumberSwitch<T> = T extends number ? string : number;
type varA = StringNumberSwitch<number>; // 참 결과: string
type varB = StringNumberSwitch<string>; // 거짓 결과: number(
```
* 함수의 반환 값에 조건부 타입을 넣어서 사용할 수도 있다. 다만, 함수 내부에 타입 관련 코드가 있다면 함수 호출전에는 오류가 날 수도 있다. 이때는 함수 오버로딩을 통해서 선언부를 만들어주고 구현부에는 함수의 반환 값을 지우고 매개변수 타입은 any 타입으로 정해서 사용한다.

* **분산적인 조건부 타입:** 조건부 타입을 유니온과 함께 사용할 때 조건부 타입이 분산적으로 사용될 수 있게 만드는 것이다.
  * 유니온 타입을 사용할 경우 한번은 첫번째 타입, 그다음 두번째 타입등 한번씩 조건부의 참과 거짓을 판단한다. 결국 변수의 타입은 유니온 타입으로 나오게 된다.
  * 중복되는 타입은 생략이 되며 never 타입일 경우도 생략되서 나오게 된다. never 타입이 사라지는 이유는 유니온 타입은 타입들간의 합집합 타입을 만드는데 never은 공집합 타입이므로 공집합과 다른 집합을 합집합 하는 것은 원래 원본 집합이기 때문에 사라지게 된다.
  * 분산적인 조건부 타입을 방지할 경우에는 [T] extends [number] ? ..... 처럼 대괄호를 사용해주면 된다. 결국 결과는 전부 거짓으로 나올 수 밖에 없다.

* **infer:** 조건부 타입 내에서 특정 타입만 추론할 수 있다.
  * infer R 문법은 결국 참으로 만들 수 있는 조건으로 추론을 한다. 그렇기 때문에 거짓으로 넘어가는 경우는 추론이 불가능한 상황만 존재한다.<br><pre>type FuncA = () => string;<br>type FuncB = () => number;<br>type ReturnType<T> = T extends () => infer R ? R : never;<br>type A = ReturnType<FuncA>;<br>type B = ReturnType<FuncB>;<br>type C = ReturnType<number>; // 추론 불가능..</pre>

#### 22. 유틸리티 타입
* 제네릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해 실무에서 자주 사용되는 타입을 미리 만들어 놓은것




