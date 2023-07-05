// 분산적인 조건부 타입
// 만약 분산적인 조건부 타입을 원치 않는다면 [T] extends [number]? 이런식으로 대괄호를 넣어주면 된다.
// 유니온 타입으로 정의되었다면 T에 유니온 합집합이 들어가므로 결과는 거짓이 나오게 된다.
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 제네릭 타입에 유니온 타입이 할당되면 분산적인 조건부 타입으로 업그레이드 된다.
// 한번은 number, 또 한번은 string으로 전달이 된다.
// StringNumberSwitch<number> | -> 여긴 스트링 타입
// StringNumberSwitch<string> -> 여긴 넘버 타입 이런식으로 전달이 된다. 즉 string | number 타입으로 정의된다.
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number,string> |
// Exclude<string,string> |
// Exclude<boolean,string>

// 2단계
// number |
// never |
// boolean

// 최종 결과
// number | never | boolean -> never 타입은 사라지기 때문에 유니온 타입에 포함되지 않는다.
// 유니온 타입은 합집합 타입인데 never 타입은 공집합이기 때문에 제외되기 때문이다.

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number,string> |
// Extract<string,string> |
// Extract<boolean,string>

// 2단계
// never |
// string |
// never

// 최종 결과
// string
