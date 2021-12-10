/* accordion이라는 아이디 값을 가진 것을 찾아온다*/
var accordionEl = document.querySelector('#accordion');

/* view-item이라는 아이디 값을 가진 모든 것을 찾아온다*/
var viewItemEls = accordionEl.querySelectorAll('.view-item');

/* 변수 _cuId에 null값을 넣어준다. */
var _cuId = null;     

/* 변수 _exId에 _cuId값을 넣어준다. */
var _exId = _cuId;      


// 클릭될 때 나타날 이벤트
function onClickViewItem(idx, e) {
    e.preventDefault();     /* 클릭이벤트 외 별도의 행동을 막기 위해 사용 */
    console.log('click :: .view-item');
    var el = e.currentTarget;   /*현재 클릭된 요소를 찾을 수 있음*/
    if(!el.classList.contains('selected')) {    /* 클릭된 요소가 없는 상태일 때를 찾아서 체크함*/
        _cuId = idx;        /* 클릭된 요소가 없으면 _cuId를 idx값으로 교체한다. */
        if(_exId !== null) {        /* 어떠한 것이 선택되어 있다면(_exId가 비어있지 않다면) */
            viewItemEls[_exId].classList.remove('selected');    /* viewItemEls의 _exId 상태를 찾아 'selected'를 삭제한다. (그럼 원래 열려았던 것이 닫히게 된다) */
        }
        el.classList.add('selected');   /* el의 classList를 찾아서 'selected'를 줘서 열릴 수 있게 만들어 준다. */
        _exId = _cuId;                  /* 이후 _exId에 _cuId을 넣어주면 원래 열려있던게 무엇인지 알 수 있다*/
    }
}


// 이벤트 추가 함수.
function addEvent() {
    /* viewItemEls의 항목이 여러개라 반복문 사용*/
    for(var i = 0; i < viewItemEls.length; i++) {
        /* viewItemEls에 클릭이벤트 생성*/
        viewItemEls[i].addEventListener('click', onClickViewItem.bind(null, i));
    }
}

// 초기화 함수
function init() {
    addEvent();
}

// 함수 선언
init();