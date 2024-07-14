 var x = 10;
 var y = 30;
var a;
var b;
var c;
var d;
var sum ;
var subtract;

function functadd(){

    sum = x + y ;
   
    a = document.getElementById("num1");
    b = document.getElementById("num2");

    c = parseInt(a.value);
    d = parseInt(b.value);
    sum = c + d;
    document.getElementById("sumvalue").innerHTML="The sum is "+sum;
    // console.log(sum=x+y);

}

function functsub(){

    a = document.getElementById("num1");
    b = document.getElementById("num2");

    c = parseInt(a.value);
    d = parseInt(b.value);
    subtract;

    if(c > d){
        subtract = c - d;
        document.getElementsById("sumvalue").innerHTML="The Result is "+subtract;
    }

    else{
        subtract = -(d - c);
        document.getElementById("sumvalue").innerHTML="The Result is: "+(subtract);
    }

    if (condition) {
        
    } else {
        
    }
    

}
