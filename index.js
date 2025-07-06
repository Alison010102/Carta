const btn = document.getElementById("show-flower-btn");
const flower = document.getElementById("flower-container");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  flower.style.display = "block";
  btn.style.display = "none";
  
  startGifRain();

  setTimeout(() => {
    flower.classList.add("shrink");
    message.style.display = "block";
    message.style.animation = "fadeIn 2s forwards";
  }, 10000);
});

function startGifRain() {
  const totalGifs = 20;
  const gifSrc = "icons/rose.gif";

  for(let i = 0; i < totalGifs; i++) {
    const gif = document.createElement('img');
    gif.src = gifSrc;
    gif.classList.add('falling-gif');

    const size = 20 + Math.random() * 20;
    gif.style.width = `${size}px`;
    gif.style.height = 'auto';

    gif.style.left = `${Math.random() * 100}vw`;
    gif.style.animationDuration = `${6 + Math.random() * 6}s`;
    gif.style.animationDelay = `${Math.random() * 12}s`;

    document.body.appendChild(gif);
  }
}
const playBtn = document.getElementById('play-music-btn');
const audio = document.getElementById('background-music');

playBtn.addEventListener('click', () => {
  audio.play()
    .then(() => {
      playBtn.style.display = 'none';
    })
    .catch((error) => {
      console.error('Erro ao tentar tocar música:', error);
    });
});
