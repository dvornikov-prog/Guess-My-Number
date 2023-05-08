'use strict';
// /*
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = `Correct number`;
// document.querySelector(`.number`).textContent = 9;
// document.querySelector(`.score`).textContent = 10;
// document.querySelector(`.guess`).value = 9;
// console.log(document.querySelector(`.guess`).value);
// */
// let sicretnumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;
// const displayMessage = function (message) {
//   document.querySelector(`.message`).textContent = message;
// };
// // document.querySelector(`.number`).textContent = sicretnumbe;
// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);
//   // document.querySelector('.message').textContent = `Correct number`;
//   console.log(guess, typeof guess);
//   if (!guess) {
//     displayMessage(`No number!`);
//   } else if (guess === sicretnumber) {
//     document.querySelector(`.number`).textContent = sicretnumber;
//     displayMessage(`Correct number`);
//     document.querySelector(`body`).style.backgroundColor = `#60b347`;
//     document.querySelector(`.number`).style.width = `30rem`;
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector(`.highscore`).textContent = highScore;
//     }
//   } else if (guess !== sicretnumber) {
//     if (score > 1) {
//       displayMessage(guess > sicretnumber ? `To high!` : `To low!`);
//       score--;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `You lost the game`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//   }
// });
// document.querySelector(`.again`).addEventListener(`click`, function () {
//   sicretnumber = Math.trunc(Math.random() * 20) + 1;
//   score = 20;
//   document.querySelector(`.score`).textContent = score;
//   document.querySelector('.message').textContent = `Start guessing...`;
//   document.querySelector(`body`).style.backgroundColor = `#222`;
//   document.querySelector(`.number`).style.width = `15rem`;
//   document.querySelector(`.number`).textContent = `?`;
//   document.querySelector(`.guess`).value = ``;
// });
let randomNumber;
let currentNumber;
let message = document.querySelector(`.message`);
let score;
let scoreEl = document.querySelector(`.score`);
let question = document.querySelector(`.number`);
let hightScore = 0;
let hightScoreEl = document.querySelector(`.highscore`);
let resetEl = document.querySelector(`.again`);
const reset = function () {
  question.textContent = `?`;
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  message.textContent = `Start guessing...`;
  scoreEl.textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
};
reset();
document.querySelector(`.check`).addEventListener(`click`, function () {
  if (score > 1) {
    currentNumber = Number(document.querySelector(`.guess`).value);
    console.log(currentNumber);
    if (currentNumber !== randomNumber) {
      if (typeof currentNumber !== Number) {
        message.textContent = `Not a number!`;
      }
      // if (currentNumber > randomNumber) {
      //   message.textContent = `To hight!`;
      // }
      // if (currentNumber < randomNumber) {
      //   message.textContent = `To low!`;
      // }
      message.textContent =
        currentNumber > randomNumber ? `To hight!` : `To low!`;
      score -= 1;
      scoreEl.textContent = score;
    } else {
      document.querySelector(`.number`).style.width = `30rem`;
      document.querySelector(`body`).style.backgroundColor = `#60b347`;
      question.textContent = randomNumber;
      message.textContent = `You win!`;
      if (score > hightScore) {
        hightScoreEl.textContent = score;
      }
    }
  } else {
    message.textContent = `Tou lost the game`;
    scoreEl.textContent = 0;
  }
});

resetEl.addEventListener(`click`, reset);
