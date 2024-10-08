const acc = document.getElementById(".accordionTab");

acc.addEventListener("click",()=>{
    const cross = document.querySelector('.accord1')
    cross.classList.toggle("show")
})

const actionbtn1 = document.getElementById('p');



actionbtn1.addEventListener("click",()=>{
    actionbtn1.style.appearance.hidden;
})




