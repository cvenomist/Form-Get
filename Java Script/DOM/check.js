var userNames = ["Sujay","Vijay","Satish","Abhishek","Lucky"];

var userInput = prompt("What Is Your Name?");

var output = document.getElementById("output");

/*
Ternary Way Of Checking

output.innerHTML = userNames.indexOf(userInput)> -1 ?(alert("Hello " + userInput), "Welcome Back") : (alert("Hello " + userInput), "Access Denied");

output.innerHTML += " : " + userInput;
*/

/*

If Else Way Of Checking More Effective Way Of Checking

if (userNames.indexOf(userInput)>-1) {
	alert("Hello");
	output.innerHTML = "Welcome Back, " + userInput;
} else {
	output.innerHTML = "Access Denied, " + userInput;
}

*/


//******Using Both ternary Operator And If Else Statement********//

var htmlOutput = "";
if (userNames.indexOf(userInput)>-1) {
	//alert("Hello");
	htmlOutput = "Welcome Back, " + userInput;
	var age = prompt("age");
	htmlOutput += age>18 ? "You Are 18+ You Are Welcome Here." : " You Are Under 18 You Cannot Visit Further.";
} else {
	htmlOutput = "Access Denied ";
}

output.innerHTML = htmlOutput;