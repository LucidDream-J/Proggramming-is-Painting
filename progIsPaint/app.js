// const imgs = document.getElementById("imgs");
// const leftBtn = document.getElementById("left");
// const rightBtn = document.getElementById("right");

// const img = document.querySelectorAll("#imgs img");

// let index = 0;

// let interval = setInterval(() => {
//   index++;
//   setTranslate();
// }, 3000);

// function setTranslate() {
//   if (index > img.length - 1) {
//     index = 0;
//   } else if (index < 0) {
//     index = img.length - 1;
//   }
//   imgs.style.transform = `translateX(${-index * 894}px)`;
// }

const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  let imgSize = +window.innerWidth;
  // console.log(imgSize);
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  // console.log( imgSize > 450)
  if (imgSize > 450) {
    imgs.style.transform = `translateX(${-idx * 600}px)`;
  } else {
    imgs.style.transform = `translateX(${-idx * 400}px)`;
  }
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});

const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "Programming is like Painting in multiple dimensions...";
let index = 1;
let speed = 300 / speedEl.value;

writeText();
function writeText() {
  textEl.textContent = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 1;
  }

  setTimeout(() => {
    writeText();
  }, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
