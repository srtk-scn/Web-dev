var parentElement= document.getElementById('test');
var target= document.getElementById('abc');

var find= parentElement.contains(target)//this will search inner to ininner if find result is true
console.log(find)

//hasAttribute  and hasChildNodes

var check=parentElement.hasAttribute('class');
console.log(check)
var check1=parentElement.hasChildNodes();
console.log(check1)
var parentElement1= document.getElementById('test1');
var check3=parentElement1.hasChildNodes()
console.log(check3)