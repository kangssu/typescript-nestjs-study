// 인터페이스와 클래스
// 인터페이스로 생성하는 것은 전부 public 필드만 정의할 수 있다.
// 만약 private 필드가 필요하면 인터페이스에 정의하지 말고 바로 생성자에 작성해야한다.
interface CharacterInterface {
	name: string;
	moveSpeed: number;
	move(): void;
}

// implements: 구현하다. 즉 Character 클래스가 CharacterInterface 설계도를 구현한다고 보면 된다.
class Character implements CharacterInterface {
	constructor(
		public name: string,
		public moveSpeed: number,
		private extra: string
	) {}

	move(): void {
		console.log(`${this.moveSpeed} 속도로 이동!`);
	}
}
