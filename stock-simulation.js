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

let stocklist = []

let options1 = {
    series: [{
    	data: [
		{
        	x: new Date(2022, 10, 28, 17, 50),
			y: [60000, 60000, 60500, 60500]
      	},
      	{
        	x: new Date(2022, 10, 28, 18, 00),
        	y: [60500, 60500, 60000, 60000]
      	},
      	{
        	x: new Date(2022, 10, 28, 18, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 18, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 18, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 18, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 18, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 19, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 19, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 19, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 19, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 19, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 19, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 20, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 20, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 20, 20),
      	},
      	{
    	    x: new Date(2022, 10, 28, 20, 30),
    	},
      	{
        	x: new Date(2022, 10, 28, 20, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 20, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 21, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 21, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 21, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 21, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 21, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 21, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 22, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 22, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 22, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 22, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 22, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 22, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 23, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 23, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 23, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 23, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 23, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 23, 50),
      	},
      	{
        	x: new Date(2022, 10, 29, 0, 00),
      	},
      	{
        	x: new Date(2022, 10, 29, 0, 10),
      	},
      	{
        	x: new Date(2022, 10, 29, 0, 20),
      	},
      	{
        	x: new Date(2022, 10, 29, 0, 30),
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
    	},
  	},
  	yaxis: {
		tickAmount: 4,
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
        	x: new Date(2022, 10, 28, 17, 50),
			y: [20000, 20000, 20100, 20100]
      	},
      	{
        	x: new Date(2022, 10, 28, 18, 00),
        	y: [20100, 20100, 20000, 20000]
      	},
      	{
        	x: new Date(2022, 10, 28, 18, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 18, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 18, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 18, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 18, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 19, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 19, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 19, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 19, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 19, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 19, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 20, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 20, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 20, 20),
      	},
      	{
    	    x: new Date(2022, 10, 28, 20, 30),
    	},
      	{
        	x: new Date(2022, 10, 28, 20, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 20, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 21, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 21, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 21, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 21, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 21, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 21, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 22, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 22, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 22, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 22, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 22, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 22, 50),
      	},
      	{
        	x: new Date(2022, 10, 28, 23, 00),
      	},
      	{
        	x: new Date(2022, 10, 28, 23, 10),
      	},
      	{
        	x: new Date(2022, 10, 28, 23, 20),
      	},
      	{
        	x: new Date(2022, 10, 28, 23, 30),
      	},
      	{
        	x: new Date(2022, 10, 28, 23, 40),
      	},
      	{
        	x: new Date(2022, 10, 28, 23, 50),
      	},
      	{
        	x: new Date(2022, 10, 29, 0, 00),
      	},
      	{
        	x: new Date(2022, 10, 29, 0, 10),
      	},
      	{
        	x: new Date(2022, 10, 29, 0, 20),
      	},
      	{
        	x: new Date(2022, 10, 29, 0, 30),
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
    	},
  	},
  	yaxis: {
		tickAmount: 4,
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
		
		if(cnt) {
			let random = Math.floor(Math.random() * 21) - 10;
			firststock.past = firststock.current;
			firststock.current = firststock.current + firststock.unit * random;
			options1.series[0].data[cnt + 1].y = [firststock.past, firststock.past, firststock.current, firststock.current]

			random = Math.floor(Math.random() * 21) - 10;
			secondstock.past = secondstock.current;
			secondstock.current = secondstock.current + secondstock.unit * random;
			options2.series[0].data[cnt + 1].y = [secondstock.past, secondstock.past, secondstock.current, secondstock.current]
			showChart(current_stock_chart);
		}

		if(cnt == 39) {
			console.log("끝");
			clearInterval(timer);
		}
	}, 100);
});

$(".stock").on("click", function() {
	let name = $(this).attr("name");
	let chart = $(this).attr("chart");
	current_stock_name = name;
	current_stock_chart = chart;

	showChart(current_stock_chart);
});

