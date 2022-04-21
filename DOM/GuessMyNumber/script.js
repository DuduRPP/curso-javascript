"use strict";

const secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 100;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (score > 0) {
    if (!guess) {
      document.querySelector(".message").textContent = "🚫 No Number!";
    } else if (guess == secretNumber) {
      document.querySelector(".message").textContent = "🎉 Correct Number!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.fontSize = "80px";
    } else if (guess > secretNumber) {
      document.querySelector(".message").textContent = "⏬ Too High!";
      score--;
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "⏫ Too Low!";
      score--;
    }
  } else {
    document.querySelector(".message").textContent = "💥 You Lost The Game!";
  }

  document.querySelector(".score").textContent = score;
});
