# 구름톤 유니브 3기 연합 스터디 1차 프론트엔드 과제

```
🗓️ 과제 제출 기한 : 9/9 (월) ~ 9/18 (수)
💻 과제 제출 방법 : https://github.com/9oormthon-univ-3-study → 개인 레포지토리 제출
🖥️ 과제 스택 : Web - React
📌 필수 과제 : Props Drilling → Context API / 권장, 선택 : → Redux
🔗 예시 배포 링크 : https://team-sparta-assignment-1.vercel.app/
```

## 🧑🏻‍🎓**학습 목표**

- React
  - [ ] styled-components에 대해 배우며 CSS-in-JS를 이해할 수 있습니다.
  - [ ] 기존과 다르게 훨씬 효율적인 컴포넌트 스타일링 기법(조건부 스타일링, 전역 스타일링 등)을 숙지합니다.
  - [ ] 다양한 React hook에 대해 이해하며 리액트 개발을 할 수 있습니다.
  - [ ] memoization의 다양한 기법을 숙지 및 활용할 수 있습니다.
  - [ ] 리액트 컴포넌트 라이프사이클을 이해하고, 각 생명주기와 mount / update / unmount의 관계를 이해할 수 있습니다.
  - [ ] 리액트에서 브라우저에 화면을 렌더링 하는 방법, 특히 Virtual DOM에 대해 이해할 수 있습니다.
  - [ ] 전역상태 관리의 필요성에 대해 설명할 수 있으며, 대표적인 전역상태관리 도구인 Redux를 활용하여 프로그램을 구성/구축할 수 있습니다.
  - [ ] 컴포넌트 라우팅을 이해하며, react-router-dom을 통해 SPA 환경 안에서의 페이지 이동 기법을 구현할 수 있습니다.
  - [ ] 비동기 프로그래밍 및 RestFul한 설계/개발방법에 대해 설명할 수 있습니다.

---

## 🧑🏻‍🎓**학습 활용 방안**

1. 효율적으로 컴포넌트에 스타일을 적용하기
2. useState 이외에도 다양한 리액트 훅을 통해 다채로운 프로그램 구성 방식을 구현하기
3. 두번, 세번 반복해서 호출되어 리소스의 낭비를 가져오는 컴포넌트에 대한 캐싱 처리
4. 전역으로 구성돼야 할 state에 대한 효율적인 관리 방법 적용
5. 리액트를 통한 비동기 통신 방법

---

## 📷 알아두면 좋은 것들

- **패키지 매니저 : npm, yarn 소개**
- state, props, 컴포넌트 구성하기
  - **컴포넌트 쪼개기 + 부모컴포넌트, 자식 컴포넌트 이해하기**
  - **컴포넌트 간 데이터 전달 방법 이해하기(state, props)**
  - state, props의 차이점에 대해 이해하기
  - **prop drilling (**https://www.youtube.com/watch?v=3MB8DBXzEos)
- spa
  - **SPA(Single Page Application)란?**
  - **여러 라이브러리/프레임워크 사이에서React가 현재 왜 대세이며 React를 배웠을 때의 이점**
  - **간단한 SPA 애플리케이션 제시하여 이해 돕는 [예제](https://team-sparta-assignment-1.vercel.app/)**
- (개념) 클래스형 컴포넌트와 함수형 컴포넌트 다른 점, 우리는 왜 함수형 컴포넌트를 배우는지
- (개념) 렌더링
  - **렌더링의 조건 : props, state, 부모 컴포넌트의 변경**
- (개념) 불변성 \*
  - **리액트에서 불변성을 유지해야 하는 이유**원시값 : 주소 : 값참조형 데이터 : 주소 : 참조주소
- Vite
  - 반드시 Vite를 써야만 리액트 프로젝트를 생성할 수 있는 것일까?
- **번들링? 웹팩? ESBuild? ES Module? Rollup?**

---

### 💡 주제: “개인 지출 관리 애플리케이션” 만들기

- [ ] react-router-dom 을 활용한 페이지 이동처리
- [ ] styled-component 를 이용한 스타일링 적용
- [ ] context api 를 이용한 전역 상태 관리
- [ ] redux 를 이용한 전역 상태 관리

### 구현할 웹사이트 예시

이 어플리케이션은 사용자가 월별 지출을 관리할 수 있도록 도와주는 개인 재무 관리 도구입니다. 사용자는 각 월별로 지출 내역을 추가, 조회, 수정, 삭제할 수 있으며, 월별 총 지출과 항목별 지출 비율을 시각적으로 확인할 수 있습니다-(선택사항) 로컬 스토리지를 활용하여 사용자가 마지막으로 작업하던 월을 기억해 지속적인 사용 편의성을 제공합니다.

[팀 스파르타 나만의 가계부!](https://team-sparta-assignment-1.vercel.app/)

---

### 필수 구현 사항

- 지출 CRUD 구현 (작성, 조회, 수정, 삭제)
- 월별 지출 조회 기능 구현 (Home - Read)
- 월별 지출 항목 등록 구현 (Home - Create)
- 지출 상세 화면 구현 (Detail - Read)
- 상세화면에서 지출 항목 수정 구현 (Detail - Update)
- 상세화면에서 지출 항목 삭제 구현 (Detail - Delete)

---

## **필수 요구 사항! 아래 내용을 지켜 구현해 주세요!**

- styled-components 를 이용하여 스타일링
  - 인라인 스타일링이나 일반 css 파일을 이용한 스타일링 방식 지양
  - 모든 태그를 styled-components 화 할 필요는 없으나 스타일링이 들어가는 경우는 styled-components 화 할 것
- styled-components에 props를 넘김으로 인한 조건부 스타일링 적용
  - 월 선택 탭에 적용해 보세요
- react-router-dom 을 이용해서 페이지 전환을 합니다. 지출을 수정하기 위한 페이지 이동 시에 사용해주세요.
- useState, useEffect, useRef 사용과제
  - 안내 순서에 각각 어디에서 사용되면 좋을지 가이드를 드렸습니다. 해당 부분에서 위의 기능들을 각각 사용해주세요
- 지출 항목 등록 시 id는 uuid 라이브러리를 이용(npm i uuid) or (yarn add uuid)

https://www.npmjs.com/package//uuid

---

### 👉 과제는 Props Drilling → Context API → Redux 순으로 각각 별도의 브랜치를 만들어 제출해야 합니다.

- 제출된 깃헙에는 props-drilling, context, redux 라는 이름의 각각의 브랜치명이 있어야 합니다.
- props-drilling 브랜치에서는 context나 redux 없이 useState만으로 상태관리해서 코드를 작성합니다.
- props-drilling 으로 코드를 모두 작성 및 커밋을 완료했으면 context 브랜치로 생성 및 이동합니다.
- context 브랜치에서는 props-drilling으로 작업한 코드에서 react context API를 사용하여 전역상태를 이용한 코드로 리팩터링합니다.
- context 브랜치에서 리팩터링 및 커밋을 완료했으면 redux 브랜치 생성 및 이동합니다.
- redux 브랜치에서는 context api로 전역상태를 관리한 코드를 모두 redux 라이브러리를 이용한 코드로 리팩터링합니다. 주의: Redux ducks 패턴을 사용하지 않고 Redux Toolkits을 사용하도록 합니다.

---

## 과제 진행 순서 안내

아래 순서대로 진행하시는 것을 권장 드립니다. 본인이 할 수 있는 항목까지 최대한 도전해 보세요!

### (1) 프로젝트 셋업

Vite 를 이용해서 리액트 프로젝트를 셋업.

pages/ , components/ 폴더 작성 및 필요 컴포넌트 사전 작성

styled-components, react-router-dom 설치

index.html에 있는 title 변경

🔻

```
yarn add react-router-dom
yarn create vite acoountbook --template react
cd accountbook
yarn
yarn dev

yarn add styled-components
```

<img width="300px" src="https://github.com/user-attachments/assets/64f01056-9d79-4aad-902f-11a1bdcdc483" alt="폴더 구조"/>


---

### (2) “props-drilling” 브랜치 생성 및 이동

Remind: props-drilling 브랜치에서는 context 나 redux는 사용하지 않습니다!

```
git checkout -b props-drilling
```

🔻

<img width="300px" src="https://github.com/user-attachments/assets/1805d7e4-a26f-4c39-a61e-9442ff6b4b7a" alt="브랜치 구조"/>

---

### (3) Router 셋업

react-router-dom을 이용하여 홈화면과 상세화면에 대한 라우터 설정을 해주세요.

```jsx
import { Router } from "express";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
```

---

### (4) 전역스타일링 적용

styled-components 를 이용해 주세요. (App.css, index.css 는 삭제하셔도 좋습니다.)

reset.css 코드 적용

🔻

index.css를 다 밀고

```
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

위 코드를 입력해준 뒤,

index.html

```html
<link rel="stylesheet" href="./reset.css" />
```

을 작성.

---

### (5) 홈 화면 UI: 배너 및 헤더 파트 UI 구현

월 선택 탭에서 월을 클릭했을 때 어떤 탭이 활성화되었는지 styled-components의 조건부 스타일링을 적용해 보세요.

---

### (6) 홈 화면 UI: Dummy Data(fakeData.json)를 이용한 리스트 UI 구현

fakeData.json

참고: 제공해 드린 fakedata 와 같은 형식을 이용하실 필요는 없습니다. 자유롭게 데이터 형식을 택하셔도 무방합니다.

<img width="500px" src="https://github.com/user-attachments/assets/79ef1d85-8138-4037-97af-8550f7e002e3" alt="fakedata"/>

---

### (7) 지출 항목 입력창 작성하여 지출 항목 등록 기능 구현

1. 날짜, 항목, 금액, 내용을 입력하고 지출 항목을 등록하세요.

2. 날짜와 금액에 대해 유효성 검사를 적용해 주세요.

3. 지출 등록 시 id는 uuid 라이브러리를 이용해 생성합니다.

참고: 제공해 드린 fakedata 와 같은 형식을 이용하실 필요는 없습니다. 자유롭게 데이터 형식을 택하셔도 무방합니다.

---

### (8) 홈화면의 지출 항목 클릭 시 상세화면으로 이동 구현

상세화면 이동 시 클릭한 지출 항목의 id값을 가지고 이동해 주세요.

---

### (9) 지출 수정화면 UI 구현

1. 지출을 수정할 수 있는 UI 표현해 주세요.

2. 수정할 값을 받는 Input을 만들 때 useRef 를 사용해주세요.

3. 수정, 삭제, 뒤로가기 기능을 넣어주세요.

4. 수정 버튼을 누르면, 기존 지출의 데이터를 수정하고 ‘홈’ 으로 이동합니다. 수정된 변경사항이 바로 적용이 되어야 합니다.

5. 삭제 버튼 클릭 시 즉시 삭제하기 보다는 사용자에게 확인받은 뒤 삭제처리 하도록 해주세요. 삭제 이후에는 홈으로 이동시켜주세요.

---

### (10) “context” 로 브랜치 생성 및 이동

Remind: context 브랜치에서는 redux는 사용하지 않습니다!

```
git checkout -b context
```

---

### (11) props drilling으로 불편하게 관리하던 state를 context api 로 리팩터링

체 지출 state 는 context 전역상태로 변경합니다. 이외에도 전역상태 관리하고 싶은 상태가 있으면 자유롭게 context 로 관리해 줍니다.

---

### (12) “redux” 로 브랜치 생성 및 이동

Remind: redux 브랜치에서는 context 없이 redux만 사용합니다!

```
git checkout -b redux
```

---

### (13) context 로 관리중이던 모든 것을 redux 로 리팩터링

Redux-toolkit 을 사용해 리덕스를 구성해 주세요. (ducks 패턴은 사용하지 않습니다.)

---

### (14) 13단계까지 모두 완료하셨다면 선택구현사항들에 도전해 보시면 되겠습니다!

---

## 👌 선택 구현 사항 :

필수 구현 사항을 모두 완료하고 나서 여유가 되신다면 아래에 도전해 보실 만한 항목들을 살펴보고 선택적으로 구현에 도전해 보세요

- 모달 구현
  - window.alert 이나 window.confirm 대신 직접 구현한 모달을 적용해 봅시다.
- 월별 지출 Summary
  - 월별 지출 상세를 정리해주는 UI 를 만들어 봅니다.
- 지출 데이터 정렬Sort 로직을 작성하여 데이터를 시간순 혹은 종류별로 정렬해 봅시다.
- src 폴더 기준 절대경로 설정 (vite.config.js) ex) ../../../../../components/buttons.js ⇒ @/components/button.js

---

## ❓ 스터디를 위해 아래 질문들에 대한 고민을 해보고 오시면 좋겠습니다.

1. styled-components 는 CSS in JS 라이브러리 중 하나로 리액트 개발 시 자주 사용되는 방법입니다. 본인이 생각하는 styled-components의 장점과 단점을 말씀해 주세요.
2. props-drilling으로 전체를 먼저 구현하신 다음 context api와 redux로 리팩터링해서 전역 상태 관리를 경험해 보셨습니다. 어떤 상태들을 전역 상태로 관리하셨나요?

   context나 redux로 전역상태를 관리해봤을 때 어떤 문제를 해결해준다고 느끼셨나요?

3. 지출을 등록/수정 하는 과정에서 useState 와 useRef 를 둘다 사용해봤는데요. 각각 언제 사용하면 좋을 지에 대한 생각을 공유해주세요.
