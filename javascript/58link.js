// DOM CSS styling>> three methods
//1  Style
//2  classname
//3  classList
var element
//STYLE
// document.querySelector('#header').style.backgroundColor='red';
// element=document.querySelector('#header').style.color='blue';
//CLASSNAME
// document.querySelector('#header').className='abc xyz';
// element=document.querySelector('#header').className;
//CLASS LIST
// document.querySelector('#header').classList='abc xyz';
// element=document.querySelector('#header').classList
//add class by javaScript
// document.querySelector('#header').classList.add('xyz','pqr');
document.querySelector('#header').classList.remove('xyz','pqr');
element=document.querySelector('#header').classList
console.log(element)