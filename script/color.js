var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var gradient=document.getElementById("gradient");
var btn=document.getElementById("btn");



btn.addEventListener("click",()=>{
    //alert(color1.value);
  //  alert(color2.value);
    document.body.style.backgroundImage="linear-gradient(to right, "+ color1.value + ", "+ color2.value + ")";
   // =  "linear-gradient(to right, "+ color1.value + ", "+ color2.value + ")";
  

});
  
