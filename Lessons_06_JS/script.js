// <!DOCTYPE html>
// <html>
// <head>
// 	<title>js-test_03.06</title>
// </head>
// <body>
// 	<script>
		
		function date() { 
			let date = new Date();
		
			return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
		 ${date.getDay()} ${date.getDate() + 1} ${date.getMonth()} ${date.getFullYear()}`

		}
		const el = document.querySelector('.clock');

		setInterval(()=>{
			el.textContent = date();
		}, 1000);

	
// *//почему то неполучилось
// lg = console.log;
// 		var now = new Date();
// 		lg(new Date(0)); //@param number in ms
// 		lg(new Date(2017, 3, 2, 14, 12, 54, 0)); //year, month, day, hours, minutes, seconds, ms

// 		function date(time) { 
// 			const date = new Date(time);
		
// 			return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
// 			 ${date.getDay()} ${date.getDate() + 1} ${date.getMonth()} ${date.getFullYear()}`
// 		}

// 		console.log(date(now));
// *

		// console.el = document.querSelector('.clock'); 

		// setInterval(() =>{
		// 	el.textContent = date();
		// },1000)

		//19:54:40 seturday 03 june 2017


		 //lg = console.log;
		// var now = new Date();
		
		// lg(new Date(0)); //@param number in ms
		// lg(new Date(2017, 3, 2, 14, 12, 54, 0)); //year, month, day, hours, minutes, seconds, ms

		
		// function date(time) {
		// 	let date = new Date(time);



		// /return `${date.getHours()}:${date.getMinuts()}:${date.getSeconds()}
		// 	 ${date.getDay()} ${date.getDate() + 1} ${date.getMonth()} ${date.getFullYear()}`
		// }
		// console.log(date(now));

		//19:54:40 seturday 03 june 2017



		// sum(a)(b);

	// function sum(a){
	// 	return function(b){
	// 		return a+b;
	// 	}
	// }


	// function fib(n){
	// 	var a = 1,
	// 	b = 1;
	// 	for (var i = 3; i <= n; i++) {
	// 		var c = a+b;
	// 		a=b;
	// 		b=c;
	// 	}
	// 	return b;
	// }


		// function fa(n){
		// 	return (n !== 1) ? n * fa(n-1) : 1;
		// 	}
		// console.log(fa(3));


		// function pow(x, n){
		// 	if (n!==1) {
		// 		return x * pow(x, n-1)
		// 	}else{
		// 		return x
		// 	}
		// }
		// console.log(pow(2,3));

// 	</script>
// </body>
// </html>