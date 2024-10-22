// element=document.getElementById('header').innerText
// console.log(element)
// element=document.getElementById('header').innerHTML='<h1>SHASHWAT</h1>'
// console.log(element)
// we know that we have to learn three seprate methods in order to get the elements
// getElementById(id)
// getElementsByClassname(name)
// getElementsByTagname(name) are replace by two selecter 
// querySelector>>>>document.querySelector(CSS Selector)  targets first
// querySelectorAll>>>>document.querySelectorAll(CSS Selector) targets all

var element;
// element=document.querySelector('#header').innerHTML="<h1>SHASHWAT SAchan</h1>";
element=document.querySelector('#header').getAttribute('class');//id
element=document.querySelector('.list');
element=document.querySelectorAll('.list')[0].innerHTML;//classname
element=document.querySelectorAll('ul')[2].innerHTML;    //tagname
// element=document.getElementsByClassName('list')[0];
element=document.querySelectorAll('#header h1')
console.log(element);
