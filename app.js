const p1btn = document.querySelector('.btn1');
const p2btn = document.querySelector('.btn2');
const p1curScr = document.querySelector('.p1score');
const p2curScr = document.querySelector('.p2score');
const resetbtn = document.querySelector('.btn3');
const winning = document.querySelector('#winningscr');
let p1scr = 0;
let p2scr = 0;
let win;
let gameOver = false;

p1btn.addEventListener('click', function () {
  if (!gameOver) {
    p1scr += 1;

    if (p1scr == win) {
      gameOver = true;
      p1curScr.classList.add('winnercolor');
      p2curScr.classList.add('losercolor');
    }
    p1curScr.textContent = p1scr;
  }
});
p2btn.addEventListener('click', function () {
  if (!gameOver) {
    p2scr += 1;
    if (p2scr == win) {
      gameOver = true;
      p2curScr.classList.add('winnercolor');
      p1curScr.classList.add('losercolor');
    }
    p2curScr.textContent = p2scr;
  }
});

winning.addEventListener('change', function () {
  win = parseInt(this.value);
  reset();
});

resetbtn.addEventListener('click', reset);

function reset() {
  gameOver = false;
  p1scr = 0;
  p2scr = 0;
  p1curScr.textContent = 0;
  p1curScr.classList.remove('winnercolor');
  p1curScr.classList.remove('losercolor');
  p2curScr.classList.remove('winnercolor');
  p2curScr.classList.remove('losercolor');
  p2curScr.textContent = 0;
}
