let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

const clock = () => {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  
  minute.innerText = m;
  hour.innerText = h;
  second.innerText = s;
};
setInterval(clock,1000);
