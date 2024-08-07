
alert("Global Scope And Local Space!!");

var a = 10;
var b = 20;
var c = 30;

function Inner(){

    var a = 100;
    var b = 200;
    var c = 300;

    console.log("Value of Inner Variable a is "+a);
    console.log("Value of inner Variable b is "+b);
    console.log("Value of inner variable c is"+c);

    alert("Value of a is "+a+"\n Value of b is "+c+"\n Value of c is "+c);
}

console.log("Value of outer Variable a is "+a);
console.log("Value of Outer Variable b is "+b);
console.log("Value of Outer Variable c is "+c);

Inner();

alert("Value of a is "+a+"\n Value of b is "+c+"\n Value of c is "+c+"Value of a is "+a+"\n Value of b is "+c+"\n Value of c is "+c+"Value of a is "+a+"\n Value of b is "+c+"\n Value of c is "+c+"Value of a is "+a+"\n Value of b is "+c+"\n Value of c is "+c+"Value of a is "+a+"\n Value of b is "+c+"\n Value of c is "+c+"Value of a is "+a+"\n Value of b is "+c+"\n Value of c is "+c+"Value of a is "+a+"\n Value of b is "+c+"\n Value of c is "+c);

















