// var newElement= document.createElement('h2');
// var newText=document.createTextNode('this is a text');
// newElement.appendChild(newText);
var target= document.getElementById('test');
var newElement='<h1>This is Heading</h1>'
var newText='This is Heading'


// target.insertAdjacentElement('beforebegin',newElement)
target.insertAdjacentHTML('afterbegin',newElement)
target.insertAdjacentHTML('afterend',newElement)
target.insertAdjacentText('afterend',newText)
target.insertAdjacentText('afterbegin',newText)


