// 10

function outer(){
    prompt("Inside Outer Function!!");
    console.log("Inside Outter Function!!");

    let a = 10;
    function inner(){
        console.log("Inside Inner Function!!");

    }

    return inner();
}

//const var = parent();

let res= outer();









