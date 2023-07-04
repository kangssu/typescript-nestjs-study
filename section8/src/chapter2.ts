// keyof 연산자
// person 변수를 추론해서 Person의 타입을 추출할 수 있다.
type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
	return person[key];
}

const person = {
	name: "이정한",
	age: 27,
};

getPropertyKey(person, "name");
