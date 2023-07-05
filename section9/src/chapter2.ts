// infer(inference = 추론하다라는 뜻을 가진다.)
type FuncA = () => string;
type FuncB = () => number;

// ()=>string의 서브타입이 T이면 string 아니면 never <- 이건 string으로 고정했을 경우
// FuncB처럼 반환값을 number로 하고 싶을 경우 infer 를 사용하면 된다.
// infer R은 R이라는 타입이 있다고만 보면된다. ()=> R이 ()=>number의 서브 타입인지를 확인한다.
// infer R은 참이 되기위해 R 타입을 추론한다. 즉 ()=> number extends () => number로 추론시킨다.
// infer 다음에 추론할 수 없는 값이 온다면 거짓으로 판단한다.
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;
type C = ReturnType<number>;

// 예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
