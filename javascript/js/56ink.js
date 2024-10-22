var element;
// targeting methods--how we targets the html elementswith the help of javascript
// element=document.all[6];
// element=document.head;
// element=document.title;
// element=document.body;
// element=document.links;
// element=document.links[0];
// element=document.links[3];
// element=document.images;
// element=document.images[0];
// element=document.images[5];
// element=document.forms;
// element=document.doctype;
// element=document.URL;
// element=document.domain;
// element=document.baseURI;
// element=document.getElementById('header');
// element=document.getElementById('footer');
// element=document.getElementsByClassName('list');
// element=document.getElementsByClassName('list')[1];
// element=document.getElementsByTagName('ul');
// element=document.getElementsByTagName('ul')[2];



//next tutorial--how to get the values or content
element=document.getElementById('header').innerText;  //this will return content without html
element=document.getElementById('content').innerText;  //this will return content without html
element=document.getElementById('header').innerHTML;  //this will return content with html
element=document.getElementById('content').innerHTML;  //this will return content with html
//how to get attributes there are three methods for that
element=document.getElementById('header').getAttribute('class')
element=document.getElementById('header').getAttribute('id')
element=document.getElementById('header').getAttribute('style')
element=document.getElementById('header').getAttribute('onClick')
element=document.getElementById('header').attributes;
element=document.getElementById('header').attributes[0];
element=document.getElementById('header').attributes[2].name;
element=document.getElementById('header').attributes[2].value;
//how to set the values with the help of DOM
element=document.getElementById('header').innerText;
// console.log(element)

element=document.getElementById('header').innerText= '<h1>!! Sachan !!</h1>';

elemen=document.getElementById('header').innerHTML;
element=document.getElementById('header').innerText;
element=document.getElementById('header').innerHTML= '<h1>!! Sachan !!</h1>';
element=document.getElementById('header').innerHTML;
element=document.getElementById('header').setAttribute('class','xyz');
// element=document.getElementById('header').setAttribute('style','border:10px dotted yellow');
element=document.getElementById('header').attributes[1].value='xy1';
element=document.getElementById('header').getAttribute('class');
element=document.getElementById('header').removeAttribute('style');
element=document.getElementById('header').removeAttribute('class');
element=document.getElementById('header').getAttribute('class');


console.log(element)
