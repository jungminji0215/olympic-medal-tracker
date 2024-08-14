# 프로젝트 주제

2024 파리 올림픽에서 각 나라가 획득한 메달 수를 추적하는 Olympic Medal Tracker 만들기

# 배포 링크

👉🏻 [민지의 올림픽 메달 트래커](https://olympic-medal-tracker.netlify.app/)

# 시연 영상


https://github.com/user-attachments/assets/7079745f-a9f1-408b-bf58-fc12b4841007


# 기능

  - [x] 등록 : 새로운 국가와 그 국가가 획득한 메달 수를 추가할 수 있다.
  - [x] 조회 : 국가별 메달 집계 리스트를 금은동 순서대로 볼 수 있다.
  - [x] 수정 : 기존에 추가된 국가의 메달 수를 수정할 수 있다.
  - [x] 삭제 : 국가 정보 삭제할 수 있다.
  - [x] 나라 이름 입력했을 때 이미 등록된 국가라면 alert 메시지가 뜬다.
  - [x] 업데이트하는 국가가 등록되지 않은 경우 alert 메시지가 뜬다.
  - [x] 등록된 국가 정보는 로컬스토리지에 저장된다.
  - [ ] 메달 총 개수 보여주고, 메달 총 개수대로 정렬

# 컴포넌트 구조

![스크린샷 2024-08-13 오후 9 38 46](https://github.com/user-attachments/assets/76b5be94-5f51-4611-9d14-1b74054cb959)

👉🏻 컴포넌트를 그림으로 그려서 한눈에 보니까 아쉬운 부분이 보였다. MedalList 쪽에 있는 button 을 컴포넌트를 MedalForm 안에 있는 Button 컴포넌트와 같이 쓸 수 있게 했으면 좋았을 것 같았다.

# 기록

[React 에서 CSS 파일 분리해보기](https://jungminji0215.tistory.com/42)
