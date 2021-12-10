/* audio 1*/ 

/* play이라는 아이디 값을 가진 것을 찾아온다*/
var playEl = document.querySelector('#play');

/* pause라는 아이디 값을 가진 것을 찾아온다*/
var pauseEl = document.querySelector('#pause');

/* demo라는 아이디 값을 가진 것을 찾아온다*/
var demoEl = document.querySelector('#demo');


/* playEl을 클릭하면 demoEl을 플레이한다*/
playEl.onclick = function() { 
    demoEl.play();
}

/* pauseEl을 클릭하면 demoEl을 멈춘다*/
pauseEl.onclick = function() { 
    demoEl.pause();
}







