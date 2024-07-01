"use strict";
const flip = document.querySelectorAll(".box");
const O = document.querySelectorAll(".choice--o");
const X = document.querySelectorAll(".choice--x");
const reset = document.querySelector(".replay");
const message = document.querySelector(".message");
let turn;
let count;

// const box = document.querySelector(".box");
// O.forEach((O) => {
//   O.classList.add("hidden");
// });
// X.forEach((X) => {
//   X.classList.add("hidden");
// });
// X.classList.add("hidden");

let playerX;
let playerO;
//starting
const start = function () {
  // console.log("enter");
  playerO = [];
  playerX = [];

  turn = O;
  count = 0;

  O.forEach((O) => {
    O.classList.add("hidden");
  });
  X.forEach((X) => {
    X.classList.add("hidden");
  });

  message.textContent = "Start the game";
};

start();

const victory = function (array) {
  if (
    (array.includes(0) && array.includes(1) && array.includes(2)) ||
    (array.includes(3) && array.includes(4) && array.includes(5)) ||
    (array.includes(6) && array.includes(7) && array.includes(9)) ||
    (array.includes(0) && array.includes(3) && array.includes(6)) ||
    (array.includes(1) && array.includes(4) && array.includes(7)) ||
    (array.includes(2) && array.includes(5) && array.includes(8)) ||
    (array.includes(0) && array.includes(4) && array.includes(8)) ||
    (array.includes(2) && array.includes(4) && array.includes(6))
  ) {
    return true;
  }
  return false;
};

for (let i = 0; i < flip.length; i++) {
  flip[i].addEventListener("click", function () {
    //ith box s clicked
    console.log("button clicked");
    // turn.classList.remove("hidden");
    // O.forEach((O) => {
    //   O.classList.remove("hidden");
    // });
    // const arr = [0, 4, 8];
    // if (playerO.includes(0) && playerO.includes(4) && playerO.includes(8)) {
    //   // if (playerO.includes(arr)) {
    //   console.log("o");
    //   console.log(playerO, playerX);
    //   document.querySelector(".message").textContent = "O one won";
    // }
    if (victory(playerO)) {
      message.textContent = "O won🎉🎊";
    } else if (victory(playerX)) {
      message.textContent = "X won🎉🎊";
    } else if (count === 9) {
      message.textContent = "no one win";
      // console.log(playerO, playerX);
    }

    // should be executed if empty
    else if (
      O[i].classList.contains("hidden") &&
      X[i].classList.contains("hidden")
    ) {
      count++;
      //if either o or x class cointains hidden then enter the block
      // console.log("yes");
      turn[i].classList.remove("hidden"); //remove the hidden class from the same box which is clicked

      //add box in the player's array
      // `player${turn}`.push(i);
      turn === O ? playerO.push(i) : playerX.push(i);

      //change turn
      turn = turn === O ? X : O;
    }
    // X[i].classList.remove("hidden");
    //   document.querySelector(".choice").classList.remove("choices");
  });
}
// document.querySelector(".box").addEventListener("click", function () {
//   turn.classList.remove("choices");
//   X.classList.remove("choices");
// });

reset.addEventListener("click", start);
