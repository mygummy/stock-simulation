let current_stock_name = "OO전자"
let current_stock_chart = 0

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

let stocklist = [firststock, secondstock]

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

let chartoption = [options1, options2]
let chart = new ApexCharts(document.querySelector(".chartdiv-chart"), options1);

// 표의 종목을 클릭했을 때 해당 차트를 화면에 띄우게 함
function showChart(option) {
	// 차트 info 재설정
	current = stocklist[current_stock_chart].current;
	fluctuation = stocklist[current_stock_chart].current - stocklist[current_stock_chart].opening;
	fluctuation_rate = (fluctuation / current * 100).toFixed(2);
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
}

$(document).ready(function() {
	chart.render();

	// 일정 시간마다 반복하는 코드
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
	}, 10);
});



$(".stock").on("click", function() {
	let name = $(this).attr("name");
	let chart = $(this).attr("chart");
	current_stock_name = name;
	current_stock_chart = chart;

	showChart(current_stock_chart);
});

