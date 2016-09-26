
function odd_even(start, skip){
	for (; start <= 100; start = start + skip)	
	{
		if (start % 2 == 0)
			console.log("pair", start);
		else
			console.log("impair", start);
	}
}

odd_even(20, 5);