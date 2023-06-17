// 클래스
// 쉽게 말하면 객체를 만들어내는 틀을 클래스라고 한다.
let studentA = {
	name: "이정환",
	grade: "A+",
	age: 27,
	study() {
		console.log("열심히 공부하자!");
	},
	introduce() {
		console.log("안녕하세요!");
	},
};

class Student {
	// 필드
	name;
	grade;
	age;

	// 생성자
	constructor(name, grage, age) {
		this.name = name;
		this.grade = grage;
		this.age = age;
	}

	// 메서드
	study() {
		console.log("열심히 공부하자!");
	}

	introduce() {
		console.log(`안녕하세요! ${this.name} 입니다!`);
	}
}

class StudentDeveloper extends Student {
	// 필드
	favoriteSkill;

	// 생성자
	constructor(name, grade, age, favoriteSkill) {
		super(name, grade, age);
		this.favoriteSkill = favoriteSkill;
	}

	// 메서드

	programming() {
		console.log(`${this.favoriteSkill}로 프로그래밍 한다!`);
	}
}

const studenDeveloper = new StudentDeveloper("이정환", "B+", 27, "TypeScript");
console.log(studenDeveloper);
studenDeveloper.programming();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
// let studentB = new Student("이정환", "A+", 27);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
