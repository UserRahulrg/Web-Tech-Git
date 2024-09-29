var counter = document.getElementById("incrementcounter")
var count;

// counter.addEventListener("click",()=>{
//     display.textContent = count;
//     count++;
// })

function dialog(){
    setTimeout(5000)
    console.log("Tu Samjha")

    
setInterval(()=>{
    console.log("task")
    newcount++
},1000)
}

let newcount = 0;

setInterval(()=>{
    console.log("task")
    newcount++
},1000)


//took ref of Button 

/*
const btncopy = document.getElementById("copy")
const btnblock = document.getElementById(".code")

btncopy.addEventListener("click",()=>{
    const code = document.querySelector(".code")
    const content = code.textContent;

    navigator.clipboard.writeText(content)

    console.log(content)

    const overlay = document.createElement("div")
    overlay.classList.add("overlay")

    const overlayMsg = document.createElement("div")

    overlayMsg.textContent='Text Copied to Clipboard!!'
    overlayMsg.classList.add("overlay-message")

   overlayMsg.textContent='Text Copied to Clipboard!!'
    overlayMsg.classList.add("overlay-message")
    
})

const overlayMsg = document.createElement("div")

overlayMsg.textContent='Text Copied to Clipboard!!'
overlayMsg.classList.add("overlay-message")
btnblock.appendChild(overlay)


*/

