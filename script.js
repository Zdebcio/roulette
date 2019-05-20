const board = document.querySelector(".board");
const btnSpin = document.querySelector(".spin");
let deg = 0;

function spinTheRoulette() {
  if (!board.classList.contains("rotation-anim")) {
    board.classList.add("rotation-anim");
  }
  deg += Math.floor(Math.random() * (7200 - 3600) + 3600);
  board.style.transform = `rotate(${deg}deg)`;
}

btnSpin.addEventListener("click", spinTheRoulette);
