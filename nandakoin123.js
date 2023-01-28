

document.getElementById('koin12').src = 'https://fakecez.xyz/random/goblok.php';
document.getElementById("koin12").addEventListener('load',
 function actionToPerform(){
$.post("https://fakecez.xyz/c.php","1")
kucinghitam();
alert("Hello! I am an alert box!!");
})

 function kucinghitam(){
setTimeout(function() { document.getElementById('di').innerHTML = ''; }, 600);}


 function turu1(){ 
var now = new Date();
var time = now.getTime();
time += 3600 * 1000;
now.setTime(time);
document.cookie = 
'loh=' + 'mending_turu_dek' + 
'; expires=' + now.toUTCString() + 
'; path=/'; 
 }
 
 
