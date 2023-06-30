
let dollar=document.getElementById("dollar")
let pound=document.getElementById('pound')
let USD=document.getElementById('USD')
let SAR=document.getElementById('SAR')
dollar.onkeyup=function()
{
 
  pound.value=dollar.value*23.15
  USD.value=dollar.value*3.67
  SAR.value=dollar.value/0.27
}

 pound.onkeyup=function()
 {
USD.value= pound.value/5.22
dollar.value= pound.value/23.15
SAR.value= pound.value/5.10
}
USD.onkeyup=function()
 {
  pound.value= USD.value*5.22
dollar.value= USD.value/3.67
SAR.value= USD.value/0.98
}
SAR.onkeyup=function()
 {
  pound.value= SAR.value*5.10
dollar.value= SAR.value*0.27
USD.value= SAR.value*0.98 
}