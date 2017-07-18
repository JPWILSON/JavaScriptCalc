
window.onload = function(){
	document.getElementById("total").innerHTML = " 0.000 ";
	var current_num ="";
	var subtotal =0;
	var operator ="";
	var just_pressed_operator = false;
	var just_pressed_equals = false;

	document.getElementById("0").onclick = function(){
		if(current_num.length < 9){
			current_num += "0";
			document.getElementById("total").innerHTML = current_num;
			just_pressed_operator = false;
			just_pressed_equals = false;
		}
	}

	document.getElementById("1").onclick = function(){
		if(current_num.length < 9){
			current_num += "1";
			document.getElementById("total").innerHTML = current_num;
			just_pressed_operator = false;
			just_pressed_equals = false;
		}
	}

	document.getElementById("2").onclick = function(){
		if(current_num.length < 9){
			current_num += "2";
			document.getElementById("total").innerHTML = current_num;
			just_pressed_operator = false;
			just_pressed_equals = false;
		}
	}

	document.getElementById("3").onclick = function(){
		if(current_num.length < 9){
			current_num += "3";
			document.getElementById("total").innerHTML = current_num;
			just_pressed_operator = false;
			just_pressed_equals = false;
		}
	}

	document.getElementById("4").onclick = function(){
		if(current_num.length < 9){
			current_num += "4";
			document.getElementById("total").innerHTML = current_num;
			just_pressed_operator = false;
			just_pressed_equals = false;
		}
	}

	document.getElementById("5").onclick = function(){
		if(current_num.length < 9){
			current_num += "5";
			document.getElementById("total").innerHTML = current_num;
			just_pressed_operator = false;
			just_pressed_equals = false;
		}
	}

	document.getElementById("6").onclick = function(){
		if(current_num.length < 9){
			current_num += "6";
			document.getElementById("total").innerHTML = current_num;
			just_pressed_operator = false;
			just_pressed_equals = false;
		}
	}

	document.getElementById("7").onclick = function(){
		if(current_num.length < 9){
			current_num += "7";
			document.getElementById("total").innerHTML = current_num;
			just_pressed_operator = false;
			just_pressed_equals = false;
		}
	}

	document.getElementById("8").onclick = function(){
		if(current_num.length < 9){
			current_num += "8";
			document.getElementById("total").innerHTML = current_num;
			just_pressed_operator = false;
			just_pressed_equals = false;
		}
	}

	document.getElementById("9").onclick = function(){
		if(current_num.length < 9){
			current_num += "9";
			document.getElementById("total").innerHTML = current_num;
			just_pressed_operator = false;
			just_pressed_equals = false;
		}
	}

	document.getElementById("decimal").onclick = function(){
		if(current_num.length < 9){
			current_num += ".";
			document.getElementById("total").innerHTML = current_num;
			just_pressed_operator = false;
			just_pressed_equals = false;
		}
	}

	document.getElementById("+").onclick = function(){
		if(just_pressed_operator == false){
			if(just_pressed_equals == true){
				operator = "+";
				current_num = "";
				just_pressed_operator == true;
				document.getElementById("total").innerHTML = operator;
			}
			else{
				operator = "+";
				subtotal = parseFloat(current_num);
				current_num = "";
				just_pressed_operator == true;
				document.getElementById("total").innerHTML = operator;
			}
		just_pressed_equals = false;
		}
	}

	document.getElementById("-").onclick = function(){
		if(just_pressed_operator == false){
			if(just_pressed_equals == true){
				operator = "-";
				current_num = "";
				just_pressed_operator == true;
				document.getElementById("total").innerHTML = operator;
			}
			else{
				operator = "-";
				subtotal = parseFloat(current_num);
				current_num = "";
				just_pressed_operator == true;
				document.getElementById("total").innerHTML = operator;
			}
		just_pressed_equals = false;
		}
	}

	document.getElementById("/").onclick = function(){
		if(just_pressed_operator == false){
			if(just_pressed_equals == true){
				operator = "/";
				current_num = "";
				just_pressed_operator == true;
				document.getElementById("total").innerHTML = operator;
			}
			else{
				operator = "/";
				subtotal = parseFloat(current_num);
				current_num = "";
				just_pressed_operator == true;
				document.getElementById("total").innerHTML = operator;
			}
		just_pressed_equals = false;
		}
	}

	document.getElementById("x").onclick = function(){
		if(just_pressed_operator == false){
			if(just_pressed_equals == true){
				operator = "x";
				current_num = "";
				just_pressed_operator == true;
				document.getElementById("total").innerHTML = operator;
			}
			else{
				operator = "x";
				subtotal = parseFloat(current_num);
				current_num = "";
				just_pressed_operator == true;
				document.getElementById("total").innerHTML = operator;
			}
		just_pressed_equals = false;
		}
	}


	document.getElementById("equals").onclick = function(){
		//console.log(subtotal);
		if(just_pressed_operator == false && operator != ""){
			if(operator == "+"){
				subtotal += parseFloat(current_num);
			}
			else if(operator == "-"){
				subtotal -= parseFloat(current_num);
			}
			else if(operator == "x"){
				subtotal *= parseFloat(current_num);
			}
			else {
				subtotal /= parseFloat(current_num);
			}
			operator = "";
			current_num = "";
			just_pressed_operator == false;
		}
		just_pressed_equals = true;
		var res= subtotal.toString();
		console.log(res);
		if(res.length > 10){
			res = res.substr(0,9);
			document.getElementById("total").innerHTML = res;
		}
		else{
			document.getElementById("total").innerHTML = subtotal;
		}
	}

	document.getElementById("clear").onclick = function(){
		document.getElementById("total").innerHTML = "";
	}

	document.getElementById("clearall").onclick = function(){
		document.getElementById("total").innerHTML = " 0.000 ";
		current_num ="";
		subtotal =0;
		operator ="";
		just_pressed_operator = false;
		just_pressed_equals = false;
	}
};

/*
//MAKE IT TOGGLE!!!
window.onload = function(){
	document.getElementById("lets_go").innerHTML = " Calculator!";
	document.getElementById("change_me").onclick = function(){
	//document.getElementById("change_me").toggle = function(){
		if(document.getElementById("lets_go").innerHTML != "Calculator Progress!"){
			document.getElementById("lets_go").innerHTML = "Calculator Progress!";
		}
		else{
			document.getElementById("lets_go").innerHTML = "Calculator!";
		}
	};
	document.getElementById("total").innerHTML = " 0.000 ";
};

Application for Employment Opportunity – July 2017: Rikatec - CTO
*/