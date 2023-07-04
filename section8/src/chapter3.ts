// 맵드 타입
// 맵드 타입은 인터페이스에서 만들 수 없기 때문에 type으로 만들어야 한다.
interface User {
	id: number;
	name: string;
	age: number;
}

// [] 대괄호 안에는 키를 정의하고 밖은 키들의 값을 정의한다.
// key 값으로 id, name, age일 수도 있다는 것을 정의한다.
// User["id"]->number 타입, User["name"]-> string 타입, User["age"]->number 타입으로 정의가 된다.
// 맵드 타입의 효과를 보는 것은 선택적 프로퍼티를 사용하는 것이다.
type PartialUser = {
	[key in "id" | "name" | "age"]?: User[key];
};

// 아래 key 라는 값은 꼭 key라고 사용하지 않아도 되지만 직관성을 위해 key로 사용한다.
type BooleanUser = {
	[key in keyof User]: boolean;
};

type ReadOnlyUser = {
	readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadOnlyUser {
	// ...기능
	return {
		id: 1,
		name: "이정한",
		age: 27,
	};
}

const user = fetchUser();
// user.id = 1; // 위에서 readonly로 사용한다면 값은 변경할 수 없다.

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
	// ...수정하는 기능
}

updateUser({
	// id: 1,
	// name: "이정한",
	age: 25,
});
