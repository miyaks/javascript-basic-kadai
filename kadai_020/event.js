const Btn = document.getElementById('btn');

const text = document.getElementById('text');

Btn.addEventListener('click',() => {
  const childList = document.createElement('h2');
  text.textContent = 'ボタンをクリックしました';
  
});
