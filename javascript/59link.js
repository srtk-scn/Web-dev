//javascript basic events  ex>> <button onCliick='abc()'></button>
var element;
// document.getElementById('header').onclick=abc;
// document.getElementById('header').onmouseenter=abc;
// document.getElementById('header').addEventListener('mouseenter',abc);
// document.getElementById('header').addEventListener('click',abc);
// document.getElementById('header').addEventListener('click',function(){
    // document.getElementById('header').style.border='10px dotted pink'});
    // this.style.border='10px dotted pink'});

// function abc(){
//     document.getElementById('header').style.background='green';
// }
//console.log(element)
//removeEventListener method
document.querySelector('#header').addEventListener('mouseleave',abc);
document.querySelector('#header').addEventListener('click',xyz);
function abc(){
document.getElementById('header').style.background='green'    
}
function xyz(){
    document.getElementById('header').removeEventListener('mouseleave',abc)    
    }