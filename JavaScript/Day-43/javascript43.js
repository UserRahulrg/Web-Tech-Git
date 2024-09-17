// const h1 = document.getElementById("root");
// h1.style.color="red";

let elementmain = document.getElementsByClassName("main");
console.log(elementmain);

//object destructuring

let objectvar1 = {
    name:"Kavish",
    id:17890247891,
    rank:"flight liut",
    salary:132000,
    posting:"Agra"
};

let {name,id,rank,salary,posting} = objectvar1;

console.log("The name is "+name+" and the id is "+id+
    " having rank "+rank+" and salary "+salary+" posted in "
    +posting);

function objectvalueinherit({name,id,rank,salary,posting}){
    console.log("name:"+name);
    console.log("id:"+id);
    console.log("rank:"+rank);
    console.log("salary:"+salary);
    console.log("posting:"+posting);
}

objectvalueinherit(objectvar1);


let arrray =[10,20,30,40,50]

function arrayloop(...data){

    let acc =0;
    for(let val of data){
        acc = acc + val;
        console.log(acc);
    }
}

arrayloop(...arrray);










