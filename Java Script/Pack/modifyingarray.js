var flower = ["Rose","Jasmine","Mogra","Sunflower"];
flower.push("ShoeFlower"); //Add Element To An Last Of An Array
flower.pop();  //Delete Element From Last
flower.shift();  //Delete First Element From Array
flower.unshift("Marigold");  //Add Element At The Starting Of An Array
console.log(flower);

/*
flower.splice(_,_)
We can Choose What to Delete From Array And In The Same Line
We Can Choose From That Element How Many Element Should Be Deleted
*/

/*
flower.reverse();
Reverse The Order Of The Item
*/

/*
flower.sort();
Sort The Items Of Array By Value
*/
var animal = ["Fish","Horse","Lion","Tiger","Crocodile"];
var startVal = (animal.length);
console.log(startVal)
animal[15] = ("Dog");
console.log(animal);
animal.fill("Leopard",startVal,(animal.length-1));
console.log(animal);