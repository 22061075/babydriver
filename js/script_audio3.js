/* audio 3*/ 

/* play3이라는 아이디 값을 가진 것을 찾아온다*/
var play3El = document.querySelector('#play3');

/* pause3라는 아이디 값을 가진 것을 찾아온다*/
var pause3El = document.querySelector('#pause3');

/* demo3라는 아이디 값을 가진 것을 찾아온다*/
var demo3El = document.querySelector('#demo3');


/* play3El을 클릭하면 demo3El을 플레이한다*/
play3El.onclick = function() { 
    demo3El.play();
}

/* pause3El을 클릭하면 demo3El을 멈춘다*/
pause3El.onclick = function() { 
    demo3El.pause();
}






