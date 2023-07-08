import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 초기 js -> ts로 변경하기 위한 최종 정리!
// npx create-react-app . -> react 설치를 위한 명령어
// 1. 타입선언 @types/node @types/react @types/react-dom @types/jest
// 2. tsconfig.json 생성해서 설정값 추가
// 3. 모든 js 파일을 jsx 로 일단 오류가 안나게 변경
// 4. jsx 파일을 다시 tsx 파일로 변경하고 안에 오류를 하나씩 수정
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
