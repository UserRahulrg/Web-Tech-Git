const box = document.getElementById("box");
let lSide = 100;
let tSide = 100;

window.addEventListener("keydown",(e)=> {
    let move =50;
    switch(e.key){
        case "w":
            tSide =tSide-move;
            break;
        case "s":
            tSide =tSide-move;
            break;
        case "a":
            tSide =tSide-move;
            break;
        case "d":
            tSide =tSide-move;
            break;
        default:
            break;
    }
    box.style.left=lSide+"px"
    box.style.top=tSide+"px"

})