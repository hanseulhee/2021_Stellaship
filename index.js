const open = document.querySelector('.python');
const open1 = document.querySelector('.likelion');
const open2 = document.querySelector('.DB');
const open3 = document.querySelector('.Java');

// Toggle nav
open.addEventListener('click', () =>
  document.body.classList.toggle('show-open')
);

open1.addEventListener('click', () =>
  document.body.classList.toggle('show-open1')
);

open2.addEventListener('click', () =>
  document.body.classList.toggle('show-open2')
);

open3.addEventListener('click', () =>
  document.body.classList.toggle('show-open3')
);
