
window.onload = function(){
	document.getElementById("total").innerHTML = " 0.000 ";
	var current_num ="";
	var subtotal =0;
	var operator ="";


	document.getElementById("0").onclick = function(){
		current_num += "0";
		document.getElementById("total").innerHTML = current_num;
	}

	document.getElementById("1").onclick = function(){
		current_num += "1";
		document.getElementById("total").innerHTML = current_num;
	}

	document.getElementById("2").onclick = function(){
		current_num += "2";
		document.getElementById("total").innerHTML = current_num;
	}

	document.getElementById("3").onclick = function(){
		current_num += "3";
		document.getElementById("total").innerHTML = current_num;
	}

	document.getElementById("4").onclick = function(){
		current_num += "4";
		document.getElementById("total").innerHTML = current_num;
	}

	document.getElementById("5").onclick = function(){
		current_num += "5";
		document.getElementById("total").innerHTML = current_num;
	}

	document.getElementById("6").onclick = function(){
		current_num += "6";
		document.getElementById("total").innerHTML = current_num;
	}

	document.getElementById("7").onclick = function(){
		current_num += "7";
		document.getElementById("total").innerHTML = current_num;
	}

	document.getElementById("8").onclick = function(){
		current_num += "8";
		document.getElementById("total").innerHTML = current_num;
	}

	document.getElementById("9").onclick = function(){
		current_num += "9";
		document.getElementById("total").innerHTML = current_num;
	}

	document.getElementById("+").onclick = function(){
		if(operator != ""){
			switch(operator){
				case "+":
					subtotal += parseFloat(current_num);
					break;
				case "-":
					subtotal -= parseFloat(current_num);
					break;
				case "x":
					subtotal *= parseFloat(current_num);
					break;
				case "/":
					subtotal /= parseFloat(current_num);
			}
		}
		operator = "+";
		//subtotal += parseFloat(current_num);
		current_num = "";
		document.getElementById("total").innerHTML = operator;
	}

	document.getElementById("-").onclick = function(){
		if(operator != ""){
			switch(operator){
				case "+":
					subtotal += parseFloat(current_num);
					break;
				case "-":
					subtotal -= parseFloat(current_num);
					break;
				case "x":
					subtotal *= parseFloat(current_num);
					break;
				case "/":
					subtotal /= parseFloat(current_num);
			}
		}
		operator = "-";
		//subtotal += parseFloat(current_num);
		current_num = "";
		document.getElementById("total").innerHTML = operator;
	}

	document.getElementById("x").onclick = function(){
		if(operator != ""){
			switch(operator){
				case "+":
					subtotal += parseFloat(current_num);
					break;
				case "-":
					subtotal -= parseFloat(current_num);
					break;
				case "x":
					subtotal *= parseFloat(current_num);
					break;
				case "/":
					subtotal /= parseFloat(current_num);
			}
		}
		operator = "x";
		//subtotal += parseFloat(current_num);
		current_num = "";
		document.getElementById("total").innerHTML = operator;
	}

	document.getElementById("/").onclick = function(){
		if(operator != ""){
			switch(operator){
				case "+":
					subtotal += parseFloat(current_num);
					break;
				case "-":
					subtotal -= parseFloat(current_num);
					break;
				case "x":
					subtotal *= parseFloat(current_num);
					break;
				case "/":
					subtotal /= parseFloat(current_num);
			}
		}
		operator = "/";
		//subtotal += parseFloat(current_num);
		current_num = "";
		document.getElementById("total").innerHTML = operator;
	}

	document.getElementById("equals").onclick = function(){
		if(operator != ""){
			switch(operator){
				case "+":
					subtotal += parseFloat(current_num);
					break;
				case "-":
					subtotal -= parseFloat(current_num);
					break;
				case "x":
					subtotal *= parseFloat(current_num);
					break;
				case "/":
					subtotal /= parseFloat(current_num);
			}
		}
		document.getElementById("total").innerHTML = subtotal;
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
*/