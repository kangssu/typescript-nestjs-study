// 프로미스
// 프로미스는 제네릭 클래스 기반으로 타입변수로 인해 결과값을 정해줄 수 있지만, 실패는 정해줄 수 없다.
// 제네릭 타입 변수(<> <- 요거)를 빼먹는다면 unknown 타입으로 추론된다.
const promise = new Promise<number>((resolve, reject) => {
	setTimeout(() => {
		// resolve(20);
		reject("뭐뭐 때문에 실패");
	}, 3000);
});

promise.then((response) => {
	console.log(response * 10);
});

promise.catch((err) => {
	if (typeof err === "string") {
		console.log(err);
	}
});

// 프로미스를 반환하는 함수의 타입을 정의
interface Post {
	id: number;
	title: string;
	content: string;
}

function fetchPost(): Promise<Post> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id: 1,
				title: "게시글 제목",
				content: "게시글 컨텐츠",
			});
		}, 3000);
	});
}

const postRequest = fetchPost();
postRequest.then((post) => {
	post.id;
});
