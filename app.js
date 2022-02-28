'use strict';

document.addEventListener('keydown', (e) => {
  const key = e.key;
  const code = e.code;
  const keyCode = e.keyCode;
  const btn = document.querySelector('button');
  const output = document.querySelector('.output');
  btn.style.display = 'none';
  output.style.display = 'flex';
  const boxes = document.querySelectorAll('.box');

  for (let i = 0; i < boxes.length; i++) {
    boxes[0].innerText = e.key;
    boxes[1].innerText = e.code;
    boxes[2].innerText = e.keyCode;
  }

  console.log(e.key);
  console.log(e.code);
  console.log(e.keyCode);
});
