// 현재 선택중인 주식(name은 주식 이름, chart는 주식 옵션 index)
let current_stock_name = "OO전자"
let current_stock_chart = 0

// 주식 목록
let firststock = {
	name: "OO전자",
	opening: 60000,
	past: 60000,
	current: 60000,
	unit: 500,
}

let secondstock = {
	name: "TT항공",
	opening: 20000,
	past: 20000,
	current: 20000,
	unit: 100,
}

// 주식 리스트
let stocklist = [firststock, secondstock]

// 주식 차트 옵션(data, 기본 설정 등이 담겨 있음)
let options1 = {
    series: [{
    	data: [
		{
        	x: new Date(2022, 10, 28, 8, 50),
			y: [60000, 60000, 60500, 60500]
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 00),
        	y: [60500, 60500, 60000, 60000]
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 10, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 10, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 10, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 10, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 10, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 10, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 11, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 11, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 11, 20),
      	},
      	{
    	    x: new Date(2022, 10, 28, 11, 30),
    	},
      	{
        	x: new Date(2022, 10, 28, 11, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 11, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 12, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 12, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 12, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 12, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 12, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 12, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 13, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 13, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 13, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 13, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 13, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 13, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 14, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 14, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 14, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 14, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 14, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 14, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 15, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 15, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 15, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 15, 30),
      	},
    	]
  	}],
 	chart: {
    	animations: {
        	enabled: false
      	},
      	type: 'candlestick',
      	height: 520,
      	toolbar: {
      		show: false
      	}
    },
  
  	xaxis: {
    	type: 'datetime',
    	labels: {
        	show: true,
			datetimeUTC: false,
    	},
  	},
  	yaxis: {
		tickAmount: 6,
    	opposite: true,
    	labels: {
        	show: true,
        	align: 'right'
    	},
    	tooltip: {
      		enabled: true
    	}
  	}
};

let options2 = {
    series: [{
    	data: [
		{
        	x: new Date(2022, 10, 28, 8, 50),
			y: [20000, 20000, 20100, 20100]
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 00),
        	y: [20100, 20100, 20000, 20000]
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 10, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 10, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 10, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 10, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 10, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 10, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 11, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 11, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 11, 20),
      	},
      	{
    	    x: new Date(2022, 10, 28, 11, 30),
    	},
      	{
        	x: new Date(2022, 10, 28, 11, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 11, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 12, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 12, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 12, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 12, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 12, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 12, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 13, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 13, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 13, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 13, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 13, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 13, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 14, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 14, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 14, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 14, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 14, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 14, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 15, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 15, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 15, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 15, 30),
      	},
    	]
  	}],
 	chart: {
    	animations: {
        	enabled: false
      	},
      	type: 'candlestick',
      	height: 520,
      	toolbar: {
      		show: false
      	}
    },
  
  	xaxis: {
    	type: 'datetime',
    	labels: {
        	show: true,
			datetimeUTC: false,
    	},
  	},
  	yaxis: {
		tickAmount: 6,
    	opposite: true,
    	labels: {
        	show: true,
        	align: 'right'
    	},
    	tooltip: {
      		enabled: true
    	}
  	}
};

// 주식 차트 옵션 리스트
let chartoption = [options1, options2]
let chart = new ApexCharts(document.querySelector(".chartdiv-chart"), options1);

// 유저가 보유하고 있는 리스트
let userstock = [];

// 표의 종목을 클릭했을 때 해당 차트를 화면에 띄우게 함
function showChart(option) {
	// 차트 info 재설정
	current = stocklist[current_stock_chart].current;
	fluctuation = stocklist[current_stock_chart].current - stocklist[current_stock_chart].opening;
	fluctuation_rate = (fluctuation / current * 100).toFixed(2);

	// 차트 정보 칸
	$("#chartdiv-stock-name").text(current_stock_name);
	$("#chartdiv-stock-price").text(current);
	$("#chartdiv-stock-fluctuation").text(fluctuation);
	$("#chartdiv-stock-fluctuationrate").text(fluctuation_rate + "%");
	if(current > stocklist[current_stock_chart].opening) {
		$("#chartdiv-stock-price").css("color","rgb(206,58,58)");
		$("#chartdiv-stock-fluctuation").css("color","rgb(206,58,58)");
		$("#chartdiv-stock-fluctuationrate").css("color","rgb(206,58,58)");
	} else if(current < stocklist[current_stock_chart].opening) {
		$("#chartdiv-stock-price").css("color","rgb(68,114,196)");
		$("#chartdiv-stock-fluctuation").css("color","rgb(68,114,196)");
		$("#chartdiv-stock-fluctuationrate").css("color","rgb(68,114,196)");
	} else {
		$("#chartdiv-stock-price").css("color","rgb(41,167,116)");
		$("#chartdiv-stock-fluctuation").css("color","rgb(41,167,116)");
		$("#chartdiv-stock-fluctuationrate").css("color","rgb(41,167,116)");
	}
	chart.destroy();
	chart = new ApexCharts(document.querySelector(".chartdiv-chart"), chartoption[option]);
	chart.render();

	// 수량 조정 칸
	$("#middledowndiv-stock-name").text(current_stock_name);
}


// userstock에서 해당 주식이 있는지, 있으면 몇번째에 있는지 찾아줌
function findIndex(name) {
	let len = userstock.length;
	let index = -1;
	for(let i = 0; i < len; i++) {
		if(userstock[i].name == name) {
			index = i;
			break;
		}
	}
	return index;
}

// user-table에서 해당 주식의 index를 return함
function findUserTableIndex(name) {
	let len = $("#user-table > tbody > tr").length;
	let table = $("#user-table > tbody > tr");
	let index = -1;

	for(let i = 0; i < len; i++) {
		let cells = table[i].getElementsByTagName("td");
		if(name == cells[0].firstChild.data) {
			index = i;
			break;
		}
	}
	return index;
}

$(document).ready(function() {
	chart.render();

	// 일정 시간마다 반복하는 "timer" 코드
	// 임시로 여기에 적어서 실험했습니다
	let cnt = 0;
	let timer = setInterval(function() {
		cnt++;
		
		if(cnt % 10 == 0) {
			let index = cnt / 10;
			// 차트 재설정
			let random = Math.floor(Math.random() * 21) - 10;
			firststock.past = firststock.current;
			firststock.current = firststock.current + firststock.unit * random;
			options1.series[0].data[index + 1].y = [firststock.past, firststock.past, firststock.current, firststock.current]

			random = Math.floor(Math.random() * 21) - 10;
			secondstock.past = secondstock.current;
			secondstock.current = secondstock.current + secondstock.unit * random;
			options2.series[0].data[index + 1].y = [secondstock.past, secondstock.past, secondstock.current, secondstock.current]
			
			// stock-table 재설정(현재가, 등락)
			$("#stock1-current").text(firststock.current);
			$("#stock1-fluctuation").text(firststock.current - firststock.opening);

			$("#stock2-current").text(secondstock.current);
			$("#stock2-fluctuation").text(secondstock.current - secondstock.opening);
			
			// 총자산 = 예수금 + 총 매입가 + 총 손익
			let totalassets = Number($("#depositreceived").text())

			// user-table 재설정(손익)
			let len = $("#user-table > tbody > tr").length;
			let table = $("#user-table > tbody > tr");
			for(let i = 0; i < len; i++) {
				let chart_num = $("#user-table > tbody > tr").eq(i).attr("chart");
				let cells = $("#user-table > tbody > tr")[i].getElementsByTagName("td");
				cells[1].firstChild.data = stocklist[chart_num].current * userstock[i].num - userstock[i].totalpurchase;
				// 총자산 추가
				totalassets += Number(cells[1].firstChild.data);
				totalassets += userstock[i].totalpurchase;
			}	
			// 총자산 재설정
			$("#totalassets").text(totalassets);
			
			// 현재 시간 재설정
			let hour = options1.series[0].data[index + 1].x.getHours();
			let min = options1.series[0].data[index + 1].x.getMinutes();

			$("#currenttime").text(hour + ":" + min);
			showChart(current_stock_chart);
		}

		if(cnt / 10 == 39) {
			console.log("끝");
			clearInterval(timer);
		}
	}, 125);
});


// stock-table 행 클릭시
$(".stock").on("click", function() {
	let name = $(this).attr("name");
	let chart = $(this).attr("chart");
	current_stock_name = name;
	current_stock_chart = chart;

	// 수량을 0으로 해야함
	$("#quantity").val(0);
	showChart(current_stock_chart);
});

// user-table 행 클릭시(행이 동적 할당되기 때문에 따로 함수를 만듬)
$("#user-table-body").on("click", ".stock", function() {
	let name = $(this).attr("name");
	let chart = $(this).attr("chart");
	current_stock_name = name;
	current_stock_chart = chart;

	// 수량을 0으로 해야함
	$("#quantity").val(0);
	showChart(current_stock_chart);
})


$(".minus").on("click", function() {
	let num = Number($("#quantity").val());
	if(isNaN(num)) num = 0;
	if(num > 0) num -= 1;
	$("#quantity").val(num);

});

$(".plus").on("click", function() {
	let num = Number($("#quantity").val());
	if(isNaN(num)) num = 0;
	num += 1;
	// 최대 예수금까지 수량 늘리기 가능, 주가 떨어졌을때 수량 조정
	$("#quantity").val(num);
});

$(".buy").on("click", function() {
	let num = Number($("#quantity").val());

	if(num == 0) return;
	let purchase = stocklist[current_stock_chart].current;
	let index = findIndex(current_stock_name);
	
	// 매수한 주식 종목이 없을 경우
	if(index == -1) {
		let purchase_stock = {
			name: current_stock_name,
			totalpurchase: purchase * num,
			num: num,
			chart: current_stock_chart,
		}
		userstock.push(purchase_stock);

		$("#user-table > tbody:last").append("<tr class=\"stock\" name=" + current_stock_name + " chart=" + current_stock_chart + "><td>" + current_stock_name + "</td><td>" + 0 + "</td><td>" + num + "</td><td>" + purchase + "</td></tr>");

	} else {
		userstock[index].totalpurchase += purchase * num;
		userstock[index].num += num;
		let table_index = findUserTableIndex(current_stock_name);
		
		// user-table 재설정(수량, 매입가)
		let cells = $("#user-table > tbody > tr")[table_index].getElementsByTagName("td");
		cells[2].firstChild.data = userstock[index].num;
		cells[3].firstChild.data = Math.floor(userstock[index].totalpurchase / userstock[index].num);

	}

	// 예수금 차감
	let depositreceived = Number($("#depositreceived").text());
	depositreceived -= purchase * num;
	$("#depositreceived").text(depositreceived);

	// 수량을 0으로 해야함
	$("#quantity").val(0);
	showChart(current_stock_chart);
});

$(".sell").on("click", function() {
	console.log(userstock);
	
	
})
