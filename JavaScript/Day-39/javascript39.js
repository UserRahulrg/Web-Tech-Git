let value = firstClass();
console.log(value);

function firstClass(){
    let valueofprompt=prompt("This is First class function!");
    return valueofprompt;
}


let arrFunctVar = (a,b) => (a**b);
var c = 2;
var d = 5;
console.log(arrFunctVar(c,d));

const arra = new Array(10,20,30,40,50);
console.log(arra);

const a =10;
const b =20;
const myArray = [function sum(a,b){return(a+b)},
                 function sub(a,b){return(a-b)}];
const myNewArray = [(a,b) => {return(a+b)},(a,b) =>
                    {return(a-b)}];
console.log(myArray);
console.log(myNewArray);


const arr = [1,2,3,4,5];
const output = [];

arr.forEach((val,i,array)=>{
    output.push(val + 10);
})

console.log(output);

const arr1 = ["sun","mon","tue"];
const arr2 = ["wed","thu","fri","Sat"];

const res = arr1.concat(arr2);
console.log(res);


let arrjs = ["j","a","v","a","s","c","r","i","p","t"];
const resarr= arrjs.join("");

console.log(resarr);

console.log("This is a object!")
const obj ={
    1 : 1 ,
    2 : "Tinku",
    3 : "tinku.org",
    4 : "Tinku lamba",
}
console.log(obj);

const objs = {
    name : "Chombu",
    age : 24,
    "is logging" : true,
}
delete obj["is logging"]
console.log(obj)
                                   
const user = {
    name:"Aditya",
    age:23,
    userinfo:()=>{
        console.log(user);
        console.log('${user.name}');
    }
}
console.log(user);

//write a function that takes an array and find prime number.
// arr = [10,12,14,16,19,21]

const qsarr = [10,12,14,16,19,21];

var i = 0;
var primeNumber = 0;
var count = 0;



    for(i=0;i<6;i++){
        if(qsarr[i]%2 == 1){
            if(qsarr[i]%3){
                if(qsarr[i]%4){
                    count++;
                }
                count++;
            }
            count++;
        }
        count++;
        
        console.log(count);

        if(count>2){
            console.log("Not a Prime Number");
        }
        else{
            console.log("It is a Prime Number");
        }
    }


    var outputqs1 = primeNumber;
    console.log(output);   
    i++;


//wrte a funcyion that takes an array and create one
//single array
//arr=[1,[2,3],4,[5,6,[7,8],9],10]

const qs2arr=[1,[2,3],4,[5,6,[7,8],9],10]

const qs2var = qs2arr.flat(2);
console.log(qs2arr); 


//write a function that takes an array and give split
//result

var qs3arr = [1,2,3,4,5,6,7,8,9,0];
var qs3arr2 = [1,2,3,4,5,6,7,8,9,0];
var qs3output2 = [1,2,3,4,5];
var qs3output3 = [6,7,8,9,10]

var qs3outputdesiredarr1 = qs3arr.splice(0,5);
var qs3outputdesiredarr2 = qs3arr2.splice(5,0);

console.log(qs3outputdesiredarr1);
console.log(qs3outputdesiredarr2);

var qs3v1arr = [10,11,12,13,14,15,16,17,18,19,20]
var arr1ofqs3 = qs3v1arr.slice[1,5];
console.log("array 1 of qs3 "+qs3v1arr.slice[1,5]);
prompt("array 1 of qs3 "+arr1ofqs3);
prompt(qs3v1arr.slice(1,7));












