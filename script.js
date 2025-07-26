let cp = document.querySelector(".circular-progress"),
  pv = document.querySelector(".progress-value");

let progressStartValue = 0,
  progressEndtValue = 90,
  speed = 100;

let progres = setInterval(() => {
  progressStartValue++;
  pv.textContent = `${progressStartValue}%`;
  cp.style.background= `conic-gradient(purple ${progressStartValue * 3.6}deg, #ededed 0deg)`;
  if (progressStartValue == progressEndtValue) {
    clearInterval(progres);
  }

}, speed);
