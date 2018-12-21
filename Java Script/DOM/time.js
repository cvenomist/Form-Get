var myTime = prompt("What Hour It Is?");

var output = document.getElementById("output");

if (myTime>=8 && myTime<12) {

	output.innerHTML = "Wake Up Bro!";

} else if (myTime>=8 && myTime<12) {

	output.innerHTML = "Go To Lunch!";

} else if (myTime>=13 && myTime<16) {

	output.innerHTML = "Go To Work!";

} else if (myTime>=16 && myTime<20) {

	output.innerHTML = "Dinner Time!";

} else if (myTime>=22) {

	output.innerHTML = "Time To Go To Sleep!";

} else {

	output.innerHTML = "You Should Be Sleeping!";
	
}