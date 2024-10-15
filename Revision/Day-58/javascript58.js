const cartelement = document.getElementById('cartImg')


cartelement.addEventListener("click",()=>{
    var asideelement = document.querySelector('aside')
    asideelement.style.display="list-item"
    
    setTimeout(hideAsideBar,5000)
})

const hideAsideBar = ()=>{
    var asideelement = document.querySelector('aside')
    asideelement.style.display="none";
}

var btnDarkMode= document.getElementById('darkMode')

function darkModeFunct(){
    var bodyElement = document.querySelector('body')
    bodyElement.style.backgroundColor="black"
    bodyElement.style.color="white"
}

var btnLightMode = document.getElementById('lightMode')

function lightModeFunct(){
    var bodyElement = document.querySelector('body')
    bodyElement.style.backgroundColor="white"
    bodyElement.style.color="black"
}
// btnLightMode.addEventListener("click",()=>{

// })


