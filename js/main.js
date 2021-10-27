/*phone- input */

$(function(){
$('#datepicker').datepicker();

})
var input = document.querySelector("#phone");
window.intlTelInput(input, {
    initialCountry:"id",
    nationalMode:true,
    // excludeCountries: ["uk"],
    // hiddenInput: "full_number",
    //   initialCountry: "auto",
    //   localizedCountries: { 'de': 'Deutschland' },
    //   nationalMode: false,
  
    //   placeholderNumberType: "MOBILE",
    //   preferredCountries: ['cn', 'jp'],                     
      separateDialCode: true,
    utilsScript: "../js/utils.js",
})

/*password- input */
var state = false;
function toggle(){
    if(state){
document.getElementById("password").setAttribute("type", "password");
state = false;
    }else{
        document.getElementById("password").setAttribute("type", "text");
        state = true;
    }
}

/*multi-select*/
$(document).ready(function(){
    $('.sel').chosen();
})

/*stepper -input*/
var numbers = document.getElementById('box');
for(i=0;i<100;i++){
var span = document.createElement('span');
span.textContent = i;
numbers.appendChild(span);
}
var num = numbers.getElementsByTagName('span');
var index = 0;
function nextNum(){
    num[index].style.display = 'none',
    index = (index+1) % num.length
    num[index].style.display = 'initial'
}
function prevNum(){
    num[index].style.display = 'none',
    index = (index-1 + num.length) % num.length;
    num[index].style.display = 'initial'
}