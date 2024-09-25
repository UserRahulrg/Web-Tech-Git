

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

let windowName;


btn1.addEventListener("click",()=>{
    windowName = window.open("","chombu","width=800,height=400");

})

btn2.addEventListener("click",()=>{
    windowName.close();
    // location.reload();
})




