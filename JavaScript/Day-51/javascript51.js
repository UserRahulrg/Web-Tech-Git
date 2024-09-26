const btnelem1 = document.getElementById("btn1")
const btnelem2 = document.getElementById("btn2")

btnelem1.addEventListener("click",()=>{
    window.open("https://www.google.com/","_blank","width:480,height:800")
})

btnelem2.addEventListener("click",()=>{
    windowName.close()
})

console.log(window.Navigator)

const btn = document.getElementById("copy")

btn.addEventListener("click",()=>{

    const p = document.querySelector("p");
    const content = p.textContent;
    navigator.clipboard.writeText(content);
})

const pasteelem1 = document.getElementById("paste")

pasteelem1.addEventListener("paste",(e)=>{

    e.preventDefault();
})

/*

btn.addEventListener("click",()=>{
    const p = document.querySelector("p");
    const content = p.textContent;
    navigator.clipboard.writeText(content)
    .then(()=>console.log("Text Copied to Clipboard!!"))
    .catch((error)=>console.log("Error: "+error))
})

*/






