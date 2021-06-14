"use strict";

/*Нажимаешь на кнопку - цвет у квадрата меняется */
const dv = document.querySelector("#dv");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (dv.style.backgroundColor === "green") {
    dv.style.backgroundColor = "blue";
  } else if ((dv.style.backgroundColor = "blue")) {
    dv.style.backgroundColor = "green";
  }
});

let count = 0;
btn.addEventListener("click", () => {
  count += 1;
  document.getElementById("btn").innerHTML = count;
  console.log(count);
  return count;
});

const buttonRun = document.getElementById("buttnR");
const buttonStop = document.getElementById("buttnS");
const timerShow = document.getElementById("timer");

let id ;

buttonRun.addEventListener("click", () => {
  if (id) {
    return;
  }
  id = setInterval(() => {
    timerShow.innerHTML = new Date().toISOString();
  }, 1000);
  console.log(id);
});

buttonStop.addEventListener("click", () => {
  clearInterval(id);
  id = null;
});
