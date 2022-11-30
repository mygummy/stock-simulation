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

해결해야할 것
- stock-table 색상 추가
- 매도 기능 구현
- 매도: 해당 주식을 다 매도했을 경우 user-table에서 목록 삭제
- 예수금: 주식을 매수 / 매도 했을 때 변동, 매수 금액은 예수금을 넘지 않도록 함
- 총자산: timer에서 변동

추가 내용
- 시작 페이지 작성
- 이름 입력 시 다음 화면으로 전환(enter키 사용 가능)
- 게임 화면에 이름 출력

시작페이지에 추가할 내용
- 체크박스 & 게임플레이 방법 안내