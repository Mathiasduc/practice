var add = function(argv){
	var result = 0;
	var arr_size = argv.length - 1;
	for (var i = arr_size; i >= 2; i--) {
		/*console.log("index ",i);
		console.log("valeur " ,Number(argv[i]));*/
		result =  result + Number(argv[i]);
		/*console.log(result);*/
		}
	console.log(result);
}
add(process.argv);
/*console.log(process.argv);*/