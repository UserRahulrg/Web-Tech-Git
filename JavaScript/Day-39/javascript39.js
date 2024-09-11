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

 
















