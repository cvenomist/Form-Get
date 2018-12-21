//Content + Input Dynamically

var userName = prompt("What Is Your Name?");

var output = document.getElementById("output");

output.innerText="Welcome To My Page," + userName;