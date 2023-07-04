// 템플릿 리터럴 타입
// 문자열로 여러가지 상황들을 만들어야할때 사용한다. 그렇게 많이 사용하지는 않는다.
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";
type ColoredAnimal = `${Color}-${Animal}`;

