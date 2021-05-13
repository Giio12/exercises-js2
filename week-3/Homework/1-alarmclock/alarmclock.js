function secondsToHms(d) {
  d = Number(d);
  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  const s = Math.floor(d % 3600 % 60);

  return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`; 
}


function setAlarm() {
  const time=document.getElementById('timeRemaining')
  const valor=document.getElementById('alarmSet')
  let n = valor.value
  const interval = setInterval(function(){

  time.innerHTML=`Time Remaining: ${secondsToHms(n)}`;

  if (n == 0) {
    clearInterval(interval);
    playAlarm();
  }
  n--;

 },1000);
 
}




// DO NOT EDIT BELOW HERE

const audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
