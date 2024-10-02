const code = document.getElementById("code");
const tooltip = document.createElement("div");

tooltip.classList.add("tooltip");
tooltip.textContent="Copy Code Snippet"
code.appendChild(tooltip);

const java = document.getElementById("java");
const javascript = document.getElementById("js");
const python = document.getElementById("python")

java.addEventListener("click",function (){
    code.textContent='System.out.println("Hello World");'
    code.style.color='white'
    this.style.backgroundColor='blue'
    javascript.style.backgroundColor='blue'
    python.style.backgroundColor='blue'
    code.appendChild(tooltip);
    //this.computedStyleMap.appendChild(tooltip);
})

