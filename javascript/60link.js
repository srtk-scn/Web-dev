document.querySelector('#inner').addEventListener('click',function(){
    alert('inner div');
},true);
document.querySelector('#outer').addEventListener('click',function(){
    alert('outer div');
},true); //true>>first outer then inner and for false viceversa.

