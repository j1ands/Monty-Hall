
function monty()
{
	var prizeArray = [0,0,0];
	prizeArray[Math.floor((Math.random() * 2))] = 1;

	var firstPick = Math.floor((Math.random() * 3));
	var neverSwitch = prizeArray[firstPick];
	var alwaysSwitch = prizeArray[firstPick];
	prizeArray.splice(firstPick, 1);

	var reveal = Math.floor(Math.random() * 2);

	if(prizeArray[reveal] == 0)
	{
		prizeArray.splice(reveal, 1);
		alwaysSwitch = prizeArray[0];
	}

	else
	{
		alwaysSwitch = prizeArray[reveal];
	}

	return [neverSwitch, alwaysSwitch];
}

var totals = [0,0];

for(var x = 0; x <1000; x++)
{
	monty().forEach(function(element, index, array)
	{
		totals[index] += element;
	})
}

console.log("Never switching was " + totals[0] / 10 + "% successful\n");
console.log("Always switching was " + totals[1] / 10 + "% successful");