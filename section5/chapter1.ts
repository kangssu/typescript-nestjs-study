// 인터페이스 확장
// 중복되는 타입들을 중복해서 사용하게 되면 한개를 고칠 경우 번거로움이 발생한다.
// 그렇기 때문에 인터페이스 확장을 사용한다고 보면 된다.
// extends(확장 또는 상속)로 동일하게 사용하는 인터페이스를 정의하면된다.
// 상속받는 서브 타입의 프로퍼티 타입이 변경될 경우 오류가 발생한다.
// 객체 타입이면 전부 확장할 수 있기 때문에 type으로 정의해도 상속받을 수 있다.
// 다중 확장도 가능하며 extend 뒤에 콤마로 여러개를 정의할 수 있다.
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

interface Cat extends Animal {
	isScreathch: boolean;
}

interface Chicken extends Animal {
	isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
	name: "",
	color: "",
	isBark: true,
	isScreathch: true,
};
