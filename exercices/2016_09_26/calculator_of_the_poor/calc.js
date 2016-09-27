var add = function(argv){
	var result = 0;
	var arr_size = argv.length - 1;
	for (var i = arr_size; i >= 3; i--) {
		result =  result + Number(argv[i]);
		}
	return(result);
}

var substract = function(argv){
	var result = 0;
	var arr_size = argv.length - 1;
	for (var i = arr_size; i >= 3; i--) {
		result =  result - Number(argv[i]);
		}
	return(result);
}

var multiply = function(argv){
	var result = 0;
	var arr_size = argv.length - 1;
	for (var i = arr_size; i >= 3; i--) {
		result =  result * Number(argv[i]);
		}
	return(result);
}
var division = function(argv){
	var result = 0;
	var arr_size = argv.length - 1;
	for (var i = arr_size; i >= 3; i--) {
		result =  result / Number(argv[i]);
		}
	return(result);
}

var calc = function() {
	/*console.log("Veuillez entrez une operation suivi des opperandes :\n Opperations possibles (case sensitive): add , multiply, division, substract.");*/

	if (process.argv[2] == "add"){
		console.log(add(process.argv));
		return;
	}
	else if (process.argv[2] == "division"){
		console.log(division(process.argv));
		return;
	}
	else if (process.argv[2] == "multiply"){
		console.log(multiply(process.argv));
		return;
	}
	else if (process.argv[2] == "substract"){
		console.log(substract(process.argv));
	}
	else {
		console.log("Opperations possibles (case sensitive):\nadd , multiply, division, substract.");
	}
}

calc();