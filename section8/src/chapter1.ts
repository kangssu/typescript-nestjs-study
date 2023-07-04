// 인덱스드 엑세스 타입
// 인덱스를 이용해서 다른 타입내의 특정 프로퍼티 타입을 추출하는 것이라고 한다.
type PostList = {
	title: string;
	content: string;
	author: {
		id: number;
		name: string;
		age: number;
	};
}[];

// 만약 인덱스드엑세스 타입에 존재하지 않는 프로퍼티를 쓴다면 오류가 발생한다. 당연한 오류!
// 만약 author 안에 있는 id만 가져오려면 [][]로 사용해주면 된다.
function printAuthorInfo(author: PostList[number]["author"]) {
	console.log(`${author.name}-${author.id}`);
}

// 배열 타입의 요소 타입 한개를 가져올 경우 []안에 number 또는 0을 작성해도 결과값은 똑같다.
const post: PostList[number] = {
	title: "게시글 제목",
	content: "게시글 본문",
	author: {
		id: 1,
		name: "이정한",
		age: 27,
	},
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];
// 튜플 타입안에 number 타입을 넣으면 최적의 공통 타입 즉, 유니온 타입으로 추출한다.
type TupNum = Tup[number];
