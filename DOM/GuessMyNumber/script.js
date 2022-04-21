"use strict";

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;

let finished = 0;

document.querySelector(".again").addEventListener("click", () => {
  finished = 0;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector(".score").textContent = "20";
  document.querySelector("body").style.backgroundColor = "aqua";
  document.querySelector(".number").style.fontSize = "50px";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "Guess";
});

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (finished == 0) {
    if (score > 0) {
      if (!guess) {
        document.querySelector(".message").textContent = "🚫 No Number!";
      } else if (guess == secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.fontSize = "80px";
        finished = 1;

        if (score > highscore) {
          highscore = score;
          document.querySelector(".highscore").textContent = highscore;
        }
      } else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "⏬ Too High!";
        score--;
      } else if (guess < secretNumber) {
        document.querySelector(".message").textContent = "⏫ Too Low!";
        score--;
      }
    } else {
      document.querySelector(".message").textContent = "💥 You Lost The Game!";
      document.querySelector("body").style.backgroundColor = "red";
      finished = 1;
    }
    document.querySelector(".score").textContent = score;
  }
});

if (finished == 1) {
  document.querySelector(".check").style.cursor = "not-allowed";
}
