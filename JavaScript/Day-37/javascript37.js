
function PrimeNumberOrNot(){

    prompt("Enter a number check for Prime Number!!");
}

function NumberCountADigit(){
    prompt("Enter a number count digit for :");

    

}

function AcceptANumberAndReverseANumber(){
    prompt("Enter a Number check Accept a Number and Reverse a Number ");

    var number = document.getElementById("button1");
    var number = parseInt(number);
    prompt(number);

    var i = 0;
    if(i < number){
        if(number > 10){
           prompt();
        }
    }
}

function Parent()
{
    function Child(){
        console.log("Child Function!!");
    }
}

function Parentparent(){

    function Child(){
        prompt("Child Function");
    }

    return Child;
}


function NestedFunction(){

    InnerNestedFunction();
    
    function InnerNestedFunction(){
        prompt("Inner Function!!");
    }

    return InnerNestedFunction;
}

function NestedFunction(){

    InnerNestedFunction();
    
    function InnerNestedFunction(){
        prompt("Inner Function!!");
    }

    return InnerNestedFunction;
}

function NestedFunction(){

    InnerNestedFunction();
    
    function InnerNestedFunction(){
        prompt("Inner Function!!");
    }

    return InnerNestedFunction;
}















