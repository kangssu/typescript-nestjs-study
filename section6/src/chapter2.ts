// 접근 제어자(access modifier) => public, private, proteced
// public: 가장 기본 값으로 제어하는게 없다.
// private: readonly와는 다르게 읽을 수 조차 없다. 즉 메서드에서는 사용한다면 사용 가능하다.
// protected: 파생 클래스까지는 접근을 허용하고 싶을 때 사용한다. public과 private의 중간인 접근제어자.
// 생성자에 접근 제어자를 달면 필드를 자동으로 만들어주기 때문에 중복으로 사용하면 오류가 난다. 즉 필드 정의를 삭제하면 된다.
class Employee {
	// 생성자
	constructor(
		private name: string,
		protected age: number,
		public position: string
	) {}

	// 메서드
	work() {
		console.log(`${this.name} 일함`);
	}
}

class ExecutiveOfficer extends Employee {
	// 필드
	officeNumber: number;

	// 생성자
	constructor(
		name: string,
		age: number,
		position: string,
		officeNumber: number
	) {
		super(name, age, position);
		this.officeNumber = officeNumber;
	}

	// 메서드
	func() {
		this.age;
	}
}

const employee = new Employee("이정환", 27, "developer");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";
console.log(employee);