/* audio 2*/ 

/* play2이라는 아이디 값을 가진 것을 찾아온다*/
var play2El = document.querySelector('#play2');

/* pause2라는 아이디 값을 가진 것을 찾아온다*/
var pause2El = document.querySelector('#pause2');

/* demo2라는 아이디 값을 가진 것을 찾아온다*/
var demo2El = document.querySelector('#demo2');


/* play2El을 클릭하면 demo2El을 플레이한다*/
play2El.onclick = function() { 
    demo2El.play();
}

/* pause2El을 클릭하면 demo2El을 멈춘다*/
pause2El.onclick = function() { 
    demo2El.pause();
}






