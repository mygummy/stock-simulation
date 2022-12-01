# stock-simulation
ossp final project

게임화면 구현상황

npm install jquery --save

npm install apexcharts --save

해결한 것
- stock-table 행 클릭 시 해당 차트를 화면에 표시
- 시간이 흐르면서 주가가 변동되게 함
- 현재 시간 수정
- 차트 위 정보 표시(색상 추가)
- 매수: user-table에 해당 주식 추가(동적할당)
- 매수 기능 구현(user-table에서 수량, 매입가는 매수할 때 변동, 손익은 timer에서 변동)
- 총자산: timer에서 변동
- stock-table 색상 추가
- 매도 기능 구현
- 매도: 해당 주식을 다 매도했을 경우 user-table에서 목록 삭제
- 예수금: 주식을 매수 / 매도 했을 때 변동
- 수량 조정: 매수 금액이 예수금을 넘길 경우 어떻게 할 것인가?
- 수량 조정: 매도 수량이 해당 주식 보유 수량보다 많을 경우 어떻게 할 것인가?
- stock-table 색상 추가

해결해야할 것
- stock-simulation.html에서 dashboard.html로 데이터 전달

시작 페이지에 추가한 내용
- 시작 페이지 작성 완료
- 이름 입력 시 다음 화면으로 전환(enter키 사용 가능)
- 인게임 화면에 이전 화면에서 입력한 이름 출력
- 게임플레이 방법 안내(우측 하단 적색 버튼 클릭으로 시작화면 설명화면 전환 가능)


중요! public 파일 문제(해결완료)
현재 stock-simulation.html이 node_modules를 못 읽어오는 중
- public 추가 전 깃허브 리포지토리와 비교했을 때, public에 없는 파일: .gitignore / LICENSE / README.md / main.js / package-lock.json / package.json


//README.md 최종본 (작성 중)

**The name of app:** 내일은 주식왕!

**Screenshots of your app:**

<div align=center>
###시작 화면###
<img width="1280" alt="start" src="https://user-images.githubusercontent.com/113420520/205119162-0dddb34f-ceb5-4ebb-9d2f-93672fa95a66.png">
  
###게임 설명 화면###
<img width="1280" alt="manual" src="https://user-images.githubusercontent.com/113420520/205119279-6df49506-2108-4089-8524-f533fdbf7b35.png">
  
###주식 매매 화면###
<img width="1280" alt="in-game" src="https://user-images.githubusercontent.com/113420520/205117045-bf783813-6c48-4fd7-869d-314f36bf0110.png">

###랭킹 화면###

</div>

**Youtube link:** 여기에 쓸 것

**How to install**
1. public 파일 다운로드
2. index.html 실행 전 다음 2개의 명령어를 쳐야 함
npm install jquery --save
npm install apexcharts --save

**How to play:**
1. public 파일 안에 있는 index.html 실행
2. '게임 방법' 버튼을 클릭해서 게임 방법을 익힌 뒤 '이전으로' 버튼을 눌러서 이전 화면으로 돌아온다.
3. 자신의 이름을 작성한 후 '시작!' 버튼을 누른다.
4. 제한 시간 동안 주식을 매매하여 총자산을 늘리자!
5. 제한 시간이 지나면 시간 종료 알림이 뜨면서 랭킹 화면으로 넘어간다.
6. 랭킹 화면에서 자신의 최종 총자산과 수익률을 볼 수 있다.
7. 화면 하단의 '랭킹제출/submit'버튼을 눌러 랭킹에 자신의 투자 결과를 등록할 수 있다. 우측에서 수익률 상위 5명의 투자 결과를 확인할 수 있다.
8. '다시시작/retry'버튼을 눌러 게임을 다시 플레이 할 수 있다. 

**Example:** 실행 화면 사진을 보여주자

**Documentation:**

1. index.html: 게임의 시작 화면을 보여주는 html 파일
2. manual.html: 게임 방법을 알려주는 html 파일
3. stock-simulation.html: 주식 매매가 이루어지는 html 파일
4. dashboard.html: 게임 결과를 알려주는 html 파일
5. stock-simulation.js: 주식을 매매할 수 있는 함수, 버튼의 기능을 구현해놓은 javascript 파일
6. start_screen_style.css: index.html의 디자인
7. manual_style.css: manual.html의 화면 디자인
8. style: stock-simulation.html의 디자인
9. style_dash: dashboard.html의 디자인
10. thumbnail.png: 앱의 썸네일 사진
11. startbackground.jpg: index.html의 배경화면 사진
12. manual.png: 게임 방법을 설명하는 사진
