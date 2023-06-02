var rasp = 0;
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;

window.onload = function() { 
		//q1
		function handleA1Click() {
			document.getElementById('q1').style.color = "#BA0C0C";
			q1 = 1;
			checkQ1();
		}
		
		function handleA2Click() {
			document.getElementById('q1').style.color = "#BA0C0C";
			q1 = 1;
			checkQ1();
		}
		
		function handleA3Click() {
			document.getElementById('q1').style.color = "#408E0E";
			q1 = 1;
			inc_rasp();
			checkQ1();
		}
		
		function checkQ1() {
			if (q1 === 1) {
			document.getElementById('a1').removeEventListener("click", handleA1Click);
			document.getElementById('a2').removeEventListener("click", handleA2Click);
			document.getElementById('a3').removeEventListener("click", handleA3Click);
			}
		}
		
		
		document.getElementById('a1').addEventListener("click", handleA1Click);
		document.getElementById('a2').addEventListener("click", handleA2Click);
		document.getElementById('a3').addEventListener("click", handleA3Click);
		
	
	//q2
	function handleA4Click() {
		document.getElementById('q2').style.color = "#BA0C0C";
		q2 = 1;
		checkQ2();
	}
	
	function handleA5Click() {
		document.getElementById('q2').style.color = "#BA0C0C";
		q2 = 1;
		checkQ2();
	}
	
	function handleA6Click() {
		document.getElementById('q2').style.color = "#408E0E";
		q2 = 1;
		inc_rasp();
		checkQ2();
	}
	
	function checkQ2() {
		if (q2 === 1) {
		document.getElementById('a4').removeEventListener("click", handleA4Click);
		document.getElementById('a5').removeEventListener("click", handleA5Click);
		document.getElementById('a6').removeEventListener("click", handleA6Click);
		}
	}
	
	
	document.getElementById('a4').addEventListener("click", handleA4Click);
	document.getElementById('a5').addEventListener("click", handleA5Click);
	document.getElementById('a6').addEventListener("click", handleA6Click);


	//q3

	function handleA7Click() {
		document.getElementById('q3').style.color = "#BA0C0C";
		q3 = 1;
		checkQ3();
	}
	
	function handleA8Click() {
		document.getElementById('q3').style.color = "#408E0E";
		q3 = 1;
		inc_rasp();
		checkQ3();
	}
	
	function handleA9Click() {
		document.getElementById('q3').style.color = "#BA0C0C";
		q3 = 1;
		checkQ3();
	}
	
	function checkQ3() {
		if (q3 === 1) {
		document.getElementById('a7').removeEventListener("click", handleA7Click);
		document.getElementById('a8').removeEventListener("click", handleA8Click);
		document.getElementById('a9').removeEventListener("click", handleA9Click);
		}
	}
	
	
	document.getElementById('a7').addEventListener("click", handleA7Click);
	document.getElementById('a8').addEventListener("click", handleA8Click);
	document.getElementById('a9').addEventListener("click", handleA9Click);

	//q4

	function handleA10Click() {
		document.getElementById('q4').style.color = "#408E0E";
		q4 = 1;
		inc_rasp();
		checkQ4();
	}
	
	function handleA11Click() {
		document.getElementById('q4').style.color = "#BA0C0C";
		q4 = 1;
		checkQ4();
	}
	
	function handleA12Click() {
		document.getElementById('q4').style.color = "#BA0C0C";
		q4 = 1;
		checkQ4();
	}
	
	function checkQ4() {
		if (q4 === 1) {
		document.getElementById('a10').removeEventListener("click", handleA10Click);
		document.getElementById('a11').removeEventListener("click", handleA11Click);
		document.getElementById('a12').removeEventListener("click", handleA12Click);
		}
	}
	
	
	document.getElementById('a10').addEventListener("click", handleA10Click);
	document.getElementById('a11').addEventListener("click", handleA11Click);
	document.getElementById('a12').addEventListener("click", handleA12Click);

	//q5

	function handleA13Click() {
		document.getElementById('q5').style.color = "#408E0E";
		q1 = 1;
		inc_rasp();
		checkQ5();
	}
	
	function handleA14Click() {
		document.getElementById('q5').style.color = "#BA0C0C";
		q1 = 1;
		checkQ5();
	}
	
	function handleA15Click() {
		document.getElementById('q5').style.color = "#BA0C0C";
		q1 = 1;
		checkQ5();
	}
	
	function checkQ5() {
		if (q1 === 1) {
		document.getElementById('a13').removeEventListener("click", handleA13Click);
		document.getElementById('a14').removeEventListener("click", handleA14Click);
		document.getElementById('a15').removeEventListener("click", handleA15Click);
		}
	}
	
	
	document.getElementById('a13').addEventListener("click", handleA13Click);
	document.getElementById('a14').addEventListener("click", handleA14Click);
	document.getElementById('a15').addEventListener("click", handleA15Click);

	function inc_rasp() {
		rasp = rasp + 1;
		localStorage.setItem('Scor', rasp);
	}

	let sub = document.createElement('div');
	sub.setAttribute("id" , "sub")
	sub.style.display = "grid";
	sub.style.marginTop = 20 + "px";
	sub.style.marginLeft = 50 + "px";
	sub.style.marginDown = 50 + "px";
	sub.style.backgroundColor = "black";
	sub.style.color = "white";
	sub.style.justifyContent = "center";
	sub.style.width = 70 + "px";
	sub.innerHTML = "Submit";
	sub.style.borderRadius = 20 + "px";
	document.body.appendChild(sub);

	var input = document.createElement('input');
    input.type = 'text';
    input.classList.add('textbox');
	input.style.padding = 15 + "px";
	input.style.marginTop = 15 + "px";

    var container = document.getElementById('container');
    container.appendChild(input);

	function afis_scor(){
		document.body.removeChild(sub);

		let score = document.createElement('div');
		score.setAttribute("id" , "score");
		score.style.display = "flex";
		score.style.justifyContent = "center";
		score.style.fontSize = 40 + "px";
		score.style.color = "white";
		score.innerHTML = "Scor : " + localStorage.getItem('Scor') + "/5";
		document.body.appendChild(score);

		function refreshPage() {
			location.reload();
		}
		
		var interval = setInterval(refreshPage, 20000);

		function gen_rand(){
	randColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
	return randColor;
	}

	document.addEventListener('keydown' , function(event) {
		if (event.key === "c"){
		score.style.color = "#" + gen_rand();
		}
	});

	var ababa = input.value;

	console.log('Input value:', ababa);

	}

	document.getElementById('sub').addEventListener("click" , afis_scor);

	document.addEventListener('keydown' , function(event){
		if(event.key === "f"){
	var intrebari = document.getElementById('q1');
	intrebari.classList.remove('intrebari');
	var intrebari = document.getElementById('q2');
	intrebari.classList.remove('intrebari');
	var intrebari = document.getElementById('q3');
	intrebari.classList.remove('intrebari');
	var intrebari = document.getElementById('q4');
	intrebari.classList.remove('intrebari');
	var intrebari = document.getElementById('q5');
	intrebari.classList.remove('intrebari');
		}
	});

	const ti = document.querySelector("p");
	const compStyle = window.getComputedStyle(ti);
	console.log(compStyle.width);

}


