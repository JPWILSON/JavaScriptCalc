//MAKE IT TOGGLE!!!
window.onload = function(){
	document.getElementById("lets_go").innerHTML = "Calculatorey!";
	document.getElementById("change_me").onclick = function(){
	//document.getElementById("change_me").toggle = function(){
		if(document.getElementById("lets_go").innerHTML != "Calculator Progress!"){
			document.getElementById("lets_go").innerHTML = "Calculator Progress!";
		}
		else{
			document.getElementById("lets_go").innerHTML = "Calculatorey!";
		}
	};

};
