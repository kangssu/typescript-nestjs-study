// Pick<T, K> : 뽑다, 고르다
// 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입이다.
interface Post {
	title: string;
	tags: string[];
	content: string;
	thumbnailURL?: string;
}

// K extends keyof T -> T로 들어오는 객체 타입의 키값들을 추출한 유니온 타입의 서브타입만 들어올 수 있다.
type Pick<T, K extends keyof T> = {
	// K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
	// 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
	[key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
	title: "옛날 글",
	content: "옛날 컨텐츠",
};

// Omit<T, K> : 생략하다, 빼다
// 객체 타입으로부터 특정 프로퍼티를 제거하는 타입이다.
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T =Post, K='title'
// Pick<Post, Exclude<keyof Post,'title'>>
// Pick<Post, Exclude<'title'|'content'|'tags'|'thumbnailURL','title'>>
// Exclude : A타입들을 받아서 B를 제거하는 것!
// 즉 Pick<Post,'content'|'tags'|'thumbnailURL'>

const noTitlePost: Omit<Post, "title"> = {
	content: "",
	tags: [],
	thumbnailURL: "",
};

// Record<K, V> : 객체 타입을 만들어주는 유틸리티이다.
type Record<K extends keyof any, V> = {
	[key in K]: V;
};

// "large" key에 대한 value는 { url: string; size: number }이다.
type Thumbnail = Record<
	"large" | "medium" | "samll" | "watch",
	{ url: string; size: number }
>;
