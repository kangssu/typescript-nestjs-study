// 사용자 정의 타입가드
type Dog = {
	name: string;
	isBark: boolean;
};

type Cat = {
	name: string;
	isScratch: boolean;
};

type Animal = Dog | Cat;

// 함수 자체를 타입 가드 역할로 만들어야 타입이 좁혀질 수 있다.
function isDog(animal: Animal): animal is Dog {
	return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
	return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
	if (isDog(animal)) {
		// 강아지
	} else if (isCat(animal)) {
		// 고양이
	}
}
