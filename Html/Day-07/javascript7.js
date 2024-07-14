 alert("JavaScript is Working Properly!!")

var acc = document.getElementsByClassName("accordion");
// console.log("acc"+acc)
alert(acc)
var i;

for (i = 0; i < acc.length; i++) {
  alert("JavaScript is Working Properly!!")
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      alert("JavaScript is Working Properly!!")
      panel.style.maxHeight = null;
    } else {
      alert("JavaScript is Working Properly!!")
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
