// 타입 별칭
type User = {
	id: number;
	name: string;
	birth: string;
	bio: string;
	location: string;
};

let user: User = {
	id: 1,
	name: "이정현",
	birth: "1997.01.07",
	bio: "안녕하세요",
	location: "부천시",
};

let user2: User = {
	id: 2,
	name: "이정현",
	birth: "1997.01.07",
	bio: "안녕하세요",
	location: "부천시",
};

// 인덱스 시그니처(key와 value로 사용할 경우)
// 인덱스 시그니처는 작성한 규칙만 위반하지 않으면 전부 허용한다.
// 즉, 프로퍼티가 존재하지 않아도 오류가 발생하지 않는다.
// 한가지의 프로퍼티는 존재해야한다면 key 값 아래에 특정 값을 추가해주면 된다.
// 다만, 인덱스 시그니처의 value 타입이 일치하거나 호환되어야 한다.(일치하지 않으면 오류 발생)
type CountryCodes = {
	[key: string]: string;
};

let countryCodes: CountryCodes = {
	Korea: "ko",
	UnitedState: "us",
	UnitedKingdom: "uk",
};

type CountryNumberCodes = {
	[key: string]: number;
    Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
	Korea: 1,
};