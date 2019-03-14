'use strit';

function times() {
  let time = new Date(),
    hour = time.getHours(),
    minute = time.getMinutes(),
    second = time.getSeconds();

  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;

  document.querySelector('#time').textContent = hour + ":" + minute + ":" + second;
    
}

setInterval(times, 1000);