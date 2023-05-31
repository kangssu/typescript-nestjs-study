// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 만약 숫자로 할당할 경우는 특정 숫자를 지정할 수 있고,
// 한개씩 숫자가 높아지면서 카운트 된다고 생각하면 된다. 즉 숫자형 이넘!
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정현",
    role: Role.ADMIN,
    Language: Language.english,
};
const user2 = {
    name: "홍길동",
    role: Role.USER // 1 <- 일반 유저
};
const user3 = {
    name: "아무개",
    role: Role.GUEST // 2 <- 게스트
};
console.log(user1, user2, user3);
export {};
