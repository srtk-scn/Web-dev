//   PARENT ELEMENT AND PARENT NODES
// var element= document.getElementById('inner').parentElement;
// var element= document.getElementById('inner').parentElement;
// var element= document.getElementById('inner').parentNode.style.background='purple';
// var element= document.body.parentElement;
var a=document.getElementById('child-C').parentElement;
a=document.body.parentNode;
a=document.getElementById('main').parentNode;
a=document.getElementById('main').parentElement;
// document.getElementById('inner').parentElement.style.background='red';;
// document.getElementById('child-C').parentElement.style.background='red';
// element= document.getElementById('outer').parentElement;
// console.log(element)
// console.log(a)

//  CHILDREN AND CHILDREN NODES
document.getElementById('inner').children[1].style.background='red';
// var b= document.getElementById('outer').children;//targets only tags
// var b= document.getElementById('inner').children[1];
var b= document.getElementById('inner').children[0].innerHTML;
var b= document.getElementById('inner').childNodes[1].innerHTML;// targets all spaces,enters,comments,etc.
// console.log(b)

// FIRSTCHILD,LASTCHILD,FIRSTELEMENTCHILD,LASTELEMENTCHILD
document.getElementById('inner').lastElementChild.style.background='red';
document.getElementById('outer').firstElementChild.style.background='brown';

var c= document.getElementById('inner').firstElementChild;
var c= document.getElementById('inner').lastElementChild;
var c= document.getElementById('inner').lastElementChild.innerHTML;
var c= document.getElementById('inner').firstChild;
var c= document.getElementById('inner').lastChild;
var d= document.getElementById('inner').childNodes;
var d= document.getElementById('child-C').firstChild;
var d= document.getElementById('child-C').lastChild;
// console.log(c)
// console.log(d)
// NEXTSIBLING,PREVIOUSSIBLINGS,NEXTELEMENTSIBLING,PREVIOUSELEMENTSIBLINGS
document.getElementById("child-C").previousElementSibling.style.background='purple';
document.getElementById("child-C").nextElementSibling.style.background='white';

var e=document.getElementById("child-C").nextElementSibling;
var f=document.getElementById("child-E").nextElementSibling;
var f=document.getElementById("child-head").previousElementSibling;
var e=document.getElementById("child-C").previousElementSibling.innerHTML;
var e=document.getElementById("child-C").previousSibling.innerHTML;
// var e=document.getElementById("child-C").previousSibling;
// var e=document.getElementById("child-E").nextSibling;
console.log(e)

