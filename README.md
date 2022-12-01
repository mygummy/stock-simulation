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

해결해야할 것
- stock-table 색상 추가
- 매도 기능 구현
- 매도: 해당 주식을 다 매도했을 경우 user-table에서 목록 삭제
- 예수금: 주식을 매수 / 매도 했을 때 변동
- 수량 조정: 매수 금액이 예수금을 넘길 경우 어떻게 할 것인가?
- 수량 조정: 매도 수량이 해당 주식 보유 수량보다 많을 경우 어떻게 할 것인가?
- 숫자 천 단위마다 쉼표 추가(어려움)

시작 페이지에 추가한 내용
- 시작 페이지 작성 완료
- 이름 입력 시 다음 화면으로 전환(enter키 사용 가능)
- 인게임 화면에 이전 화면에서 입력한 이름 출력
- 게임플레이 방법 안내(우측 하단 적색 버튼 클릭으로 시작화면 설명화면 전환 가능)

중요! public 파일 문제
현재 stock-simulation.html이 node_modules를 못 읽어오는 중
- public 추가 전 깃허브 리포지토리와 비교했을 때, public에 없는 파일: .gitignore / LICENSE / README.md / main.js / package-lock.json / package.json