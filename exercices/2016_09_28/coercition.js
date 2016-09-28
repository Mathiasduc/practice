function sameType(a, b) {
	if(typeof a == typeof b){
		console.log("same type!");
	}
	else {
		console.log("the type is different.")
	}
}

sameType("10" , "tutu");