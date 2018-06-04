var a1 = document.getElementById('a1');
var aud1 = document.getElementById('aud1');
a1.addEventListener('mouseover',(event)=>{
    
    aud1.play();
});

a1.addEventListener('mouseout',function(event) {
    console.log("ss");
    aud1.pause();
});

var a2 = document.getElementById('a2');
var aud2 = document.getElementById('aud2');
a2.addEventListener('mouseover',(event)=>{
    
    aud2.play();
});

a2.addEventListener('mouseout',function(event) {
    console.log("ss");
    aud2.pause();
});

var a3 = document.getElementById('a3');
var aud3 = document.getElementById('aud3');
a3.addEventListener('mouseover',(event)=>{
    
    aud3.play();
});

a3.addEventListener('mouseout',function(event) {
    console.log("ss");
    aud3.pause();
});

var a4 = document.getElementById('a4');
var aud4 = document.getElementById('aud4');
a4.addEventListener('mouseover',(event)=>{
    
    aud4.play();
});

a4.addEventListener('mouseout',function(event) {
    console.log("ss");
    aud4.pause();
});
