// 현재 선택중인 주식(name은 주식 이름, chart는 주식 옵션 index)
let current_stock_name = "SS전자"
let current_stock_chart = 0

// 주식 목록
let firststock = {
	name: "SS전자",
	opening: 60000,
	past: 60000,
	current: 60000,
	unit: 500,
}

let secondstock = {
	name: "KR항공",
	opening: 20000,
	past: 20000,
	current: 20000,
	unit: 100,
}

let thirdstock = {
	name: "HD자동차",
	opening: 50000,
	past: 50000,
	current: 50000,
	unit: 500,
}

let fourthstock = {
	name: "DS중공업",
	opening: 40000,
	past: 40000,
	current: 40000,
	unit: 500,
}

let fifthstock = {
	name: "SKK우유",
	opening: 5000,
	past: 5000,
	current: 5000,
	unit: 40,
}

let sixthstock = {
	name: "왕관제빵",
	opening: 8000,
	past: 8000,
	current: 8000,
	unit: 90,
}

let seventhstock = {
	name: "BGV영화사",
	opening: 70000,
	past: 70000,
	current: 70000,
	unit: 800,
}

let eighthstock = {
	name: "한양컴퓨터",
	opening: 10000,
	past: 10000,
	current: 10000,
	unit: 100,
}

let ninthstock = {
	name: "튼튼제약",
	opening: 20000,
	past: 20000,
	current: 20000,
	unit: 300,
}

// 주식 리스트
let stocklist = [firststock, secondstock,thirdstock,fourthstock,fifthstock,sixthstock,seventhstock,eighthstock,ninthstock]

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

let options3 = {
    series: [{
    	data: [
		{
        	x: new Date(2022, 10, 28, 8, 50),
			y: [50000, 50000, 50500, 50500]
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 00),
        	y: [50500, 50500, 50000, 50000]
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

let options4 = {
    series: [{
    	data: [
		{
        	x: new Date(2022, 10, 28, 8, 50),
			y: [40000, 40000, 40500, 40500]
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 00),
        	y: [40500, 40500, 40000, 40000]
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

let options5 = {
    series: [{
    	data: [
		{
        	x: new Date(2022, 10, 28, 8, 50),
			y: [5000, 5000, 5040, 5040]
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 00),
        	y: [5040, 5040, 5000, 5000]
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

let options6 = {
    series: [{
    	data: [
		{
        	x: new Date(2022, 10, 28, 8, 50),
			y: [8000, 8000, 8090, 8090]
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 00),
        	y: [8090, 8090, 8000, 8000]
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

let options7 = {
    series: [{
    	data: [
		{
        	x: new Date(2022, 10, 28, 8, 50),
			y: [70000, 70000, 70800, 70800]
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 00),
        	y: [70800, 70800, 70000, 70000]
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

let options8 = {
    series: [{
    	data: [
		{
        	x: new Date(2022, 10, 28, 8, 50),
			y: [10000, 10000, 10100, 10100]
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 00),
        	y: [10100, 10100, 10000, 10000]
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

let options9 = {
    series: [{
    	data: [
		{
        	x: new Date(2022, 10, 28, 8, 50),
			y: [20000, 20000, 20300, 20300]
      	},
      	{
        	x: new Date(2022, 10, 28, 9, 00),
        	y: [20300, 20300, 20000, 20000]
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
let chartoption = [options1, options2, options3, options4, options5, options6, options7, options8, options9]
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


// 시작시, timer 설정
$(document).ready(function() {
	chart.render();

	// 일정 시간마다 반복하는 "timer" 코드
	// 임시로 여기에 적어서 실험했습니다
	let cnt = 0;
	let timer = setInterval(function() {
		cnt++;
		
		if(cnt % 10 == 0 && cnt / 10 <= 39) {
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
			
			random = Math.floor(Math.random() * 21) - 10;
			thirdstock.past = thirdstock.current;
			thirdstock.current = thirdstock.current + thirdstock.unit * random;
			options3.series[0].data[index + 1].y = [thirdstock.past, thirdstock.past, thirdstock.current, thirdstock.current]

			random = Math.floor(Math.random() * 21) - 10;
			fourthstock.past = fourthstock.current;
			fourthstock.current = fourthstock.current + fourthstock.unit * random;
			options4.series[0].data[index + 1].y = [fourthstock.past, fourthstock.past, fourthstock.current, fourthstock.current]
			
			random = Math.floor(Math.random() * 21) - 10;
			fifthstock.past = fifthstock.current;
			fifthstock.current = fifthstock.current + fifthstock.unit * random;
			options5.series[0].data[index + 1].y = [fifthstock.past, fifthstock.past, fifthstock.current, fifthstock.current]

			random = Math.floor(Math.random() * 21) - 10;
			sixthstock.past = sixthstock.current;
			sixthstock.current = sixthstock.current + sixthstock.unit * random;
			options6.series[0].data[index + 1].y = [sixthstock.past, sixthstock.past, sixthstock.current, sixthstock.current]
			
			random = Math.floor(Math.random() * 21) - 10;
			seventhstock.past = seventhstock.current;
			seventhstock.current = seventhstock.current + seventhstock.unit * random;
			options7.series[0].data[index + 1].y = [seventhstock.past, seventhstock.past, seventhstock.current, seventhstock.current]
			
			random = Math.floor(Math.random() * 21) - 10;
			eighthstock.past = eighthstock.current;
			eighthstock.current = eighthstock.current + eighthstock.unit * random;
			options8.series[0].data[index + 1].y = [eighthstock.past, eighthstock.past, eighthstock.current, eighthstock.current]
			
			random = Math.floor(Math.random() * 21) - 10;
			ninthstock.past = ninthstock.current;
			ninthstock.current = ninthstock.current + ninthstock.unit * random;
			options9.series[0].data[index + 1].y = [ninthstock.past, ninthstock.past, ninthstock.current, ninthstock.current]

			// stock-table 재설정(현재가, 등락)
			$("#stock1-current").text(firststock.current);
			$("#stock1-fluctuation").text(firststock.current - firststock.opening);
			
			$("#stock2-current").text(secondstock.current);
			$("#stock2-fluctuation").text(secondstock.current - secondstock.opening);
			
			$("#stock3-current").text(thirdstock.current);
			$("#stock3-fluctuation").text(thirdstock.current - thirdstock.opening);

			$("#stock4-current").text(fourthstock.current);
			$("#stock4-fluctuation").text(fourthstock.current - fourthstock.opening);

			$("#stock5-current").text(fifthstock.current);
			$("#stock5-fluctuation").text(fifthstock.current - fifthstock.opening);
			
			$("#stock6-current").text(sixthstock.current);
			$("#stock6-fluctuation").text(sixthstock.current - sixthstock.opening);
			
			$("#stock7-current").text(seventhstock.current);
			$("#stock7-fluctuation").text(seventhstock.current - seventhstock.opening);
			
			$("#stock8-current").text(eighthstock.current);
			$("#stock8-fluctuation").text(eighthstock.current - eighthstock.opening);

			$("#stock9-current").text(ninthstock.current);
			$("#stock9-fluctuation").text(ninthstock.current - ninthstock.opening);
			

			// stock-table 숫자 색 재설정
			if(firststock.current > firststock.opening) {
				$("#stock1-current").css("color","rgb(206,58,58)");
				$("#stock1-fluctuation").css("color","rgb(206,58,58)");
			}
			else if(firststock.current < firststock.opening) {
				$("#stock1-current").css("color","rgb(68,114,196)");
				$("#stock1-fluctuation").css("color","rgb(68,114,196)");
			}
			else {
				$("#stock1-current").css("color","rgb(41,167,116)");
				$("#stock1-fluctuation").css("color","rgb(41,167,116)");
			}
			
			if(secondstock.current > secondstock.opening) {
				$("#stock2-current").css("color","rgb(206,58,58)");
				$("#stock2-fluctuation").css("color","rgb(206,58,58)");
			}
			else if(secondstock.current < secondstock.opening) {
				$("#stock2-current").css("color","rgb(68,114,196)");
				$("#stock2-fluctuation").css("color","rgb(68,114,196)");
			}
			else {
				$("#stock2-current").css("color","rgb(41,167,116)");
				$("#stock2-fluctuation").css("color","rgb(41,167,116)");
			}

			if(thirdstock.current > thirdstock.opening) {
				$("#stock3-current").css("color","rgb(206,58,58)");
				$("#stock3-fluctuation").css("color","rgb(206,58,58)");
			}
			else if(thirdstock.current < thirdstock.opening) {
				$("#stock3-current").css("color","rgb(68,114,196)");
				$("#stock3-fluctuation").css("color","rgb(68,114,196)");
			}
			else {
				$("#stock3-current").css("color","rgb(41,167,116)");
				$("#stock3-fluctuation").css("color","rgb(41,167,116)");
			}

			if(fourthstock.current > fourthstock.opening) {
				$("#stock4-current").css("color","rgb(206,58,58)");
				$("#stock4-fluctuation").css("color","rgb(206,58,58)");
			}
			else if(fourthstock.current < fourthstock.opening) {
				$("#stock4-current").css("color","rgb(68,114,196)");
				$("#stock4-fluctuation").css("color","rgb(68,114,196)");
			}
			else {
				$("#stock4-current").css("color","rgb(41,167,116)");
				$("#stock4-fluctuation").css("color","rgb(41,167,116)");
			}

			if(fifthstock.current > fifthstock.opening) {
				$("#stock5-current").css("color","rgb(206,58,58)");
				$("#stock5-fluctuation").css("color","rgb(206,58,58)");
			}
			else if(fifthstock.current < fifthstock.opening) {
				$("#stock5-current").css("color","rgb(68,114,196)");
				$("#stock5-fluctuation").css("color","rgb(68,114,196)");
			}
			else {
				$("#stock5-current").css("color","rgb(41,167,116)");
				$("#stock5-fluctuation").css("color","rgb(41,167,116)");
			}

			if(sixthstock.current > sixthstock.opening) {
				$("#stock6-current").css("color","rgb(206,58,58)");
				$("#stock6-fluctuation").css("color","rgb(206,58,58)");
			}
			else if(sixthstock.current < sixthstock.opening) {
				$("#stock6-current").css("color","rgb(68,114,196)");
				$("#stock6-fluctuation").css("color","rgb(68,114,196)");
			}
			else {
				$("#stock6-current").css("color","rgb(41,167,116)");
				$("#stock6-fluctuation").css("color","rgb(41,167,116)");
			}

			if(seventhstock.current > seventhstock.opening) {
				$("#stock7-current").css("color","rgb(206,58,58)");
				$("#stock7-fluctuation").css("color","rgb(206,58,58)");
			}
			else if(seventhstock.current < seventhstock.opening) {
				$("#stock7-current").css("color","rgb(68,114,196)");
				$("#stock7-fluctuation").css("color","rgb(68,114,196)");
			}
			else {
				$("#stock7-current").css("color","rgb(41,167,116)");
				$("#stock7-fluctuation").css("color","rgb(41,167,116)");
			}

			if(eighthstock.current > eighthstock.opening) {
				$("#stock8-current").css("color","rgb(206,58,58)");
				$("#stock8-fluctuation").css("color","rgb(206,58,58)");
			}
			else if(eighthstock.current < eighthstock.opening) {
				$("#stock8-current").css("color","rgb(68,114,196)");
				$("#stock8-fluctuation").css("color","rgb(68,114,196)");
			}
			else {
				$("#stock8-current").css("color","rgb(41,167,116)");
				$("#stock8-fluctuation").css("color","rgb(41,167,116)");
			}

			if(ninthstock.current > ninthstock.opening) {
				$("#stock9-current").css("color","rgb(206,58,58)");
				$("#stock9-fluctuation").css("color","rgb(206,58,58)");
			}
			else if(ninthstock.current < ninthstock.opening) {
				$("#stock9-current").css("color","rgb(68,114,196)");
				$("#stock9-fluctuation").css("color","rgb(68,114,196)");
			}
			else {
				$("#stock9-current").css("color","rgb(41,167,116)");
				$("#stock9-fluctuation").css("color","rgb(41,167,116)");
			}
			
			// 총자산 = 예수금 + 총 매입가 + 총 손익
			let totalassets = Number($("#depositreceived").text())

			// user-table 재설정(손익)
			let len = $("#user-table > tbody > tr").length;
			let table = $("#user-table > tbody > tr");
			for(let i = 0; i < len; i++) {
				let chart_num = $("#user-table > tbody > tr").eq(i).attr("chart");
				let cells = $("#user-table > tbody > tr")[i].getElementsByTagName("td");
				cells[1].firstChild.data = stocklist[chart_num].current * userstock[i].num - userstock[i].totalpurchase;
				
				// user-table 숫자 색 재설정
				if(Number(cells[1].firstChild.data) > 0) {
					$("#user-table > tbody > tr > td:nth-child(2)").eq(i).css("color", "rgb(206,58,58)");
					$("#user-table > tbody > tr > td:nth-child(4)").eq(i).css("color", "rgb(206,58,58)");
				}
				else if(Number(cells[1].firstChild.data) < 0) {
					$("#user-table > tbody > tr > td:nth-child(2)").eq(i).css("color", "rgb(68,114,196)");
					$("#user-table > tbody > tr > td:nth-child(4)").eq(i).css("color", "rgb(68,114,196)");
				}
				else {
					$("#user-table > tbody > tr > td:nth-child(2)").eq(i).css("color", "rgb(41,167,116)");
					$("#user-table > tbody > tr > td:nth-child(4)").eq(i).css("color", "rgb(41,167,116)");
				}

				// 총자산 추가
				totalassets += Number(cells[1].firstChild.data);
				totalassets += userstock[i].totalpurchase;
			}	
			// 총자산 재설정
			$("#totalassets").text(totalassets);
			
			
		}
		
		if(cnt % 10 == 0 && cnt / 10 <= 39) {
			let index = cnt / 10;
			// 현재 시간 재설정
			let hour = options1.series[0].data[index + 1].x.getHours();
			let min = options1.series[0].data[index + 1].x.getMinutes();

			if(min == 0) $("#currenttime").text(hour + ":00");
			else $("#currenttime").text(hour + ":" + min);
			showChart(current_stock_chart);
		}

		if(cnt / 10 == 40) {
			// 시간이 다 되었을 때, dashboard.html로 넘어감
			alert("시간 종료!");
			clearInterval(timer);

			// dashboard.html 연결 + localStorage로 data 보내기
			let name = $("#name-of-user").text();
			let money = Number($("#totalassets").text());
			name = name.slice(0, -7)
			
			let user_sp = {
				name: name,
				money: money,
				rate: (money / 10000).toFixed(2),
			}
			localStorage.setItem('user_sps',user_sp);
			// location.href='dashboard.html';
		}
	}, 10);
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


// - 버튼 클릭시
$(".minus").on("click", function() {
	let num = Number($("#quantity").val());
	if(isNaN(num)) num = 0;
	if(num > 0) num -= 1;
	$("#quantity").val(num);

});


// + 버튼 클릭시
$(".plus").on("click", function() {
	let num = Number($("#quantity").val());
	if(isNaN(num)) num = 0;
	num += 1;
	// 최대 예수금까지 수량 늘리기 가능, 주가 떨어졌을때 수량 조정
	$("#quantity").val(num);
});


// 매수 버튼 클릭시
$(".buy").on("click", function() {
	let num = Number($("#quantity").val());

	if(num == 0) return;
	let purchase = stocklist[current_stock_chart].current;
	let index = findIndex(current_stock_name);
	
	// 매수 가격이 예수금을 초과할 경우
	if(Number($("#depositreceived").text()) < purchase * num) {
		// 안내창 띄우기
		$("#guide").text(current_stock_name + " 주식의 매수가격이 예수금을 초과했습니다!");
		return;
	}

	// 매수한 주식 종목이 없을 경우
	if(index == -1) {
		let purchase_stock = {
			name: current_stock_name,
			totalpurchase: purchase * num,
			num: num,
			chart: current_stock_chart,
		}
		userstock.push(purchase_stock);

		$("#user-table > tbody:last").append("<tr class=\"stock\" name=" + current_stock_name + " chart=" + current_stock_chart + "><td>" + current_stock_name + "</td><td class=\"profit\">" + 0 + "</td><td>" + num + "</td><td class=\"purchase\">" + purchase + "</td></tr>");

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

	// 매수가 정상적으로 이루어졌다면 guide msg 삭제
	$("#guide").text("");

});


// 매도 버튼 클릭시
$(".sell").on("click", function() {
	let num = Number($("#quantity").val());
	
	if(num == 0) return;
	let sell = stocklist[current_stock_chart].current;
	let index = findIndex(current_stock_name);
	
	// 매도할 주식 종목이 user-table에 없을 경우
	if(index == -1) {
		// 안내창 띄우기
		$("#guide").text(current_stock_name + " 주식은 현재 보유하고 있는 주식이 아닙니다.");
		return;
	} 

	// 매도할 주식 수량이 현재 보유중인 주식 수량을 초과할 경우
	if(num > userstock[index].num) {
		// 안내창 띄우기
		$("#guide").text(current_stock_name + " 주식의 보유 수량을 초과했습니다!");
		return;
	}
	// 매도할 주식 수량이 현재 보유중인 주식 수량보다 작을 경우(수량이 남는 경우)
	else if(num < userstock[index].num) {
		userstock[index].totalpurchase -= sell * num;
		userstock[index].num -= num;
		let table_index = findUserTableIndex(current_stock_name);
		
		// user-table 재설정(수량, 매입가)
		let cells = $("#user-table > tbody > tr")[table_index].getElementsByTagName("td");
		cells[2].firstChild.data = userstock[index].num;
		cells[3].firstChild.data = Math.floor(userstock[index].totalpurchase / userstock[index].num);
	}
	// 매도할 주식 수량이 현재 보유중인 주식 수량과 같을 경우(수량이 딱 맞는 경우 배열, 테이블 값 삭제 해주어야 함)
	else {
		// userstock에 해당 주식 삭제
		userstock.splice(index, 1);
		// 해당 주식 행 삭제
		let table_index = findUserTableIndex(current_stock_name);
		$("#user-table > tbody tr").eq(table_index).remove();
	}

	// 예수금 증가
	let depositreceived = Number($("#depositreceived").text());
	depositreceived += sell * num;
	$("#depositreceived").text(depositreceived);

	// 수량을 0으로 해야함
	$("#quantity").val(0);
	showChart(current_stock_chart);

	// 매도가 정상적으로 이루어졌다면 guide msg 삭제
	$("#guide").text("");

});
