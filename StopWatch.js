'use strict';

/*HTMLの要素の取得する定数を定義*/
const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

/*変数を定義 開始した時刻、id、経過時間*/
let startTime;
let timeoutId;
let elapsedTime = 0 ;

/**/
function countUp (){
  const date = new Date(Date.now() - startTime + elapsedTime);
  const m = String(date.getMinutes()).padStart(2,'0');
  const s = String(date.getSeconds()).padStart(2,'0');
  const ms = String(date.getMilliseconds()).padStart(3,'0');
  
  /*表示*/
  timer.textContent = `${m}:${s}.${ms}`;
  
  timeoutId = setTimeout(function(){
    countUp();
  },10);
}

/*ボタン活性不活性*/
function setButtonStateInitial(){
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.add('inactive');
}

function setButtonStateRunning(){
  start.classList.add('inactive');
  stop.classList.remove('inactive');
  reset.classList.add('inactive');
}

function setButtonStateStopped(){
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.remove('inactive');
}


setButtonStateInitial();

/*スタート*/
start.addEventListener('click',function(){
  if(start.classList.contains('inactive') === true){
    return;
  }
  setButtonStateRunning();
  startTime = Date.now();
  countUp();
});

/*ストップ*/
stop.addEventListener('click',function(){
  if(stop.classList.contains('inactive') === true){
    return;
  }
  
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
});

/*リセット*/
reset.addEventListener('click',function(){
  if(reset.classList.contains('inactive') === true){
    return;
  }
  
  setButtonStateInitial();
  timer.textContent = '00:00.000';
  elapsedTime = 0;
});







