var a = prompt("Enter First Num");
var b = prompt("Enter Second Num");
var c = prompt("Enter Comparision Number");
var compare = Number(a) + Number(b);

//Ternary Operater 

//var myTernary = (c==compare)?"True":"False";
//console.log(myTernary);
//alert(compare);

// If Else Condition
if (compare==Number(c)) {
	document.write("<b><h2>You Are Right</h2></b>")	
} else {
	document.write("<b><h2>You Are Wrong</h2></b>")
}


