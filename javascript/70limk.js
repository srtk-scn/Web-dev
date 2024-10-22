// setInterval(AnimRepeat,1000);
// function AnimRepeat(){
//     console.log("Hello");
// }

// var a =0;
// setInterval(AnimRepeat,1000);

// function AnimRepeat(){
//     a=a+10;
//     console.log(a);
// }

// var a=0;
// var id=setInterval(AnimRepeat,100);
// function AnimRepeat(){
//     a=a+10;
//     if(a==200){
//         clearInterval(id)
//     }else{
//         var target=document.getElementById('test');
//         // target.style.marginLeft=a+'px';
//         target.style.width=a+'px';
//         }}



//setTimeOut  and clearTimeOut
// setTimeout(abc,2000);
// function abc(){
//     console.log('HEllo sarthak')
// }

var b= setTimeout(function(){
    var target=document.getElementById('test');
    target.style.width='500px'
},3000);
function stopAnim(){
    clearTimeout(b);
}