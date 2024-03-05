var ozToMl= document.getElementById("ozToMl");
    var mlToOz= document.getElementById("mlToOz");
    var ltToMl= document.getElementById("ltToMl");
    var mlTolt= document.getElementById("mlTolt");
    var inToCm= document.getElementById("inToCm");
    var cmToIn= document.getElementById("cmToIn");
    var lbToKg= document.getElementById("lbToKg");
    var kgToLb= document.getElementById("kgToLb");
    var f = document.getElementById("value1").focus();

    var submit= document.getElementById("submit");
    var p= document.getElementById("result");
    
 
ozToMl.onclick=function(){   //Ounce to Milliliter 
submit.onclick=function()
 {
    var number = document.getElementById("value1").value
    var result = number * 28.41;
    var result = result.toFixed(2);
    p.innerHTML= result + " Milliliter";
    p.style.color="blue";
 }
}
mlToOz.onclick=function(){  //Milliliter to Ounce 
submit.onclick=function()
 {
     var number = document.getElementById("value1").value
     var result = number / 28.41;
     var result = result.toFixed(2);
     p.innerHTML= result + " Ounce";
     p.style.color="purple";
 }
}
ltToMl.onclick=function(){   //Liter to Milliliter 
submit.onclick=function()
 {
     var number = document.getElementById("value1").value
     var result = number * 1000;
     var result = result.toFixed(2);
     p.innerHTML= result + " Milliliter";
     p.style.color="green";
 }
}
mlTolt.onclick=function(){  //Milliliter to Liter
submit.onclick=function()
 {
     var number = document.getElementById("value1").value
     var result = number / 1000;
     var result = result.toFixed(2);
     p.innerHTML= result + " Liter";
     p.style.color="yellow";
 }
}
inToCm.onclick=function(){   //Inches to Centimeters 
submit.onclick=function()
 {
     var number = document.getElementById("value1").value
     var result = number * 2.54;
     var result = result.toFixed(2);
    p.innerHTML= result + " Centimeter";
    p.style.color="pink";
 }
}
cmToIn.onclick=function(){  //Centimeters to Inches
submit.onclick=function()
 {
     var number = document.getElementById("value1").value
     var result = number / 2.54;
     var result = result.toFixed(2);
     p.innerHTML= result + " Inch";
     p.style.color="brown";
 }
}
lbToKg.onclick=function(){   //Pounds to Kilograms 
submit.onclick=function()
 {
     var number = document.getElementById("value1").value
     var result = number * 0.45;
     var result = result.toFixed(2);
     p.innerHTML= result + " Kilogram";
     p.style.color="white";
 }
}
kgToLb.onclick=function(){  //Kilograms to Pounds
submit.onclick=function()
 {
     var number = document.getElementById("value1").value
     var result = number / 0.45;
     var result = result.toFixed(2);
     p.innerHTML= result + " Pound";
     p.style.color="orange";
 }
}
function resetFunction(){
    document.getElementById("value1").clear();
    result.innerHTML = "Answer";
}