// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말한다.
type Admin = {
	tag: "ADMIN";
	name: string;
	kickCount: number;
};

type Member = {
	tag: "MEMBER";
	name: string;
	point: number;
};

type Guest = {
	tag: "GUEST";
	name: string;
	visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
	switch (user.tag) {
		case "ADMIN": {
			console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
			break;
		}
		case "MEMBER": {
			console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
			break;
		}
		case "GUEST": {
			console.log(
				`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`
			);
			break;
		}
	}
}

// 복습겸 한가지 예시
// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
	state: "LOADING";
};
type FailedTask = {
	state: "FAILED";
	error: {
		message: string;
	};
};
type SuccessTask = {
	state: "SUCCESS";
	response: {
		data: string;
	};
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(tast: AsyncTask) {
	switch (tast.state) {
		case "LOADING": {
			console.log("로딩중");
			break;
		}
		case "FAILED": {
			console.log(`에러발생 : ${tast.error.message}`);
			break;
		}
		case "SUCCESS": {
			console.log(`성공 : ${tast.response.data}`);
			break;
		}
	}
}

const loading: AsyncTask = {
	state: "LOADING",
};

const failed: AsyncTask = {
	state: "FAILED",
	error: {
		message: "오류 발생 원인은 ~",
	},
};

const success: AsyncTask = {
	state: "SUCCESS",
	response: {
		data: "데이터 ~",
	},
};
