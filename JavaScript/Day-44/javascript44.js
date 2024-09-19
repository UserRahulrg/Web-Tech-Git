4alert("Javascript is working properly!")

let variable1 = document.createElement("li")
let variable2 = document.createElement("li")
let variable3 = document.createElement("li")
let variable4 = document.createElement("li")

variable1.textContent="HTML"
variable2.textContent="CSS"
variable3.textContent="JavaScript"
variable4.textContent="React"

let unorlist = document.querySelector("ul")

if(unorlist)
{
    unorlist.appendChild(variable1)
    unorlist.appendChild(variable2)
    unorlist.appendChild(variable3)
    unorlist.appendChild(variable4)
}
else{
    prompt("No unordered list element found!")
}

// const p = document.querySelector("p");
// p.textContent=p.textContent+"I am Web Developer";

// const p = document.querySelector("p");
// p.innerHTML="Hello I am <a href=' ' target = 'blank' > Web Developer </a>"

// const div = document.getElementById("example")

// // if(div.)

// const div = document.























