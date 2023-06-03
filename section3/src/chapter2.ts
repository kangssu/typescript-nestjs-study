// Unknown 타입
// 제일 높은 슈퍼타입이기 때문에 전부 업캐스팅이기 때문에 문제없이 가능하다.
function unknownExam(){
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // 아래는 에러가 나고 있는데 이유는 다운캐스팅이기 때문이다.
    // let num:number = unknownVar;
}

// Never 타입(모든 타입의 서브 타입이라고 하며, 공집합이라고 할 수 있다.)
function neverExam(){
    function neverFunc(): never{
        while(true){}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // never 타입에는 아무런 값을 넣을 수 없다.
    // never 타입이 제일 하위에 있는 타입으로 전부 다운캐스팅이 되기 때문이다.
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

// void 타입
function voidExam(){
    function voidFunc(): void{
        console.log("hi");
        // 여기서 리턴으로 undefinde를 해도 문제없다. 업캐스팅이기 때문이다.
    }

    let voidVar: void = undefined;
}

// any 타입
function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefindeVar: undefined;
    let neverVar: never;

    // 다운캐스팅이지만 신기하게도 에러가 나지 않는다.
    anyVar = unknownVar;

    // 아래도 다운캐스팅이지만 에러가 나지 않는다.
    // any 타입은 치트키 타입으로 다운캐스팅을 사용가능하며 웬만하면 사용하지 않는게 좋다.
    undefindeVar = anyVar;

    // never 타입은 공집합이기 때문에 어떤 타입도 다운캐스팅 할 수 없다.
    // neverVar = anyVar;
}