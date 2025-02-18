var color=document.getElementById("color");
var text=document.getElementById("test");
var size=document.querySelector("#nb");
var font=document.querySelector("#font");
color.addEventListener("change",function(e){text.style.color=e.target.value});
size.addEventListener("change",function(e){text.style.fontSize=e.target.value + "px"});
font.addEventListener("change",function(e){text.style.fontFamily=e.target.value});
window.addEventListener("load", function () {
  color.value = "#000000";
  size.value = "30";
  font.value = "Arial";
  text.style.fontSize="30px";
});
console.log(color.style.height);