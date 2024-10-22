var newElement= document.createElement("p");
var newElement= document.createElement("h2");
var newText= document.createTextNode("this is just text");
var newComment= document.createComment("this is Comment");
newElement.appendChild(newText);
document.getElementById('test').appendChild(newElement)
document.getElementById('test').appendChild(newComment)
var target=document.getElementById('test')
target.insertBefore(newElement,target.childNodes[0])
console.log(newElement)
console.log(newText)
console.log(newComment)
//DOM Append methods..appendChild

