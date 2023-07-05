// Partial<T> : 부분적인, 일부분의
// 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입
interface Post {
	title: string;
	tags: string[];
	content: string;
	tumbnailURL?: string;
}

type Partial<T> = {
	[key in keyof T]?: T[key];
};

// Parial 유틸리티를 사용하면 타입이 전부 선택적 프로퍼티로 변경된다.
const draft: Partial<Post> = {
	title: "제목 나중에 짓자",
	content: "초안...",
};

type Required<T> = {
	[key in keyof T]-?: T[key];
};

// Required<T> : 필수의, 필수적인
// 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입이다.
const withThumbnailPost: Required<Post> = {
	title: "한입 타스 후기",
	tags: ["ts"],
	content: "",
	tumbnailURL: "https://...",
};

type Readonly<T> = {
	readonly [key in keyof T]: T[key];
};

// Readonly<T> : 읽기전용, 수정불가
// 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입이다.
const readonlyPost: Readonly<Post> = {
	title: "보호된 게시글 입니다.",
	tags: [],
	content: "",
};

// readonlyPost.content = "";
