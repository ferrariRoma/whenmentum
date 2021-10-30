const images = [
  "sky.jpg",
  "winter.jpg",
  "dream.jpg",
  "bottle.jpg",
  "autumn.jpg",
];

const paper = document.querySelector(".wallpaper-box");

const randPick = images[Math.floor(Math.random() * images.length)];

// const tagMaker = document.createElement("img");
// tagMaker.src = `img/${randPick}`;
document.body.style.backgroundImage = `url(img/${randPick})`;
document.body.style.backgroundSize = `100vw 100vh`;
document.body.style.background.opacity = "0.5";

// document.body.style.backgroundSize = `100vh`;

paper.appendChild(tagMaker);
