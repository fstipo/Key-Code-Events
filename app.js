'use strict';

window.addEventListener('keydown', (e) => {
  const key = e.key === ' ' ? 'Space' : e.key;
  const code = e.code;
  const keyCode = e.keyCode;
  const container = document.querySelector('.container');
  container.innerHTML = `<div class="key">${key}<small>event.key</small></div>
  <div class="key">${code}<small>event.code</small></div>
  <div class="key">${keyCode}<small>event.keyCode</small></div>`;
});
