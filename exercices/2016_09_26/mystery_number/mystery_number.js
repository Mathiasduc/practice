/*Math.random.round();*/
var randominette = Math.floor(Math.random() * 100);
/*var user_ipt = process.argv[3];*/
console.log(randominette);
function the_price_is_right(argv) {
	if (argv > randominette) {
		console.log("Plus petit!")
	}
	if (argv < randominette) {
		console.log("Plus grand!")
	}
	if (argv == randominette)
		console.log("The price IS RIGHT!")	
}
the_price_is_right(process.argv[2]);