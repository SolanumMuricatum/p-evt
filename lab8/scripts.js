const buttons1 = document.querySelectorAll('#first-task-container > button');
const container1 = document.getElementById('grid-template-columns-container');

buttons1[0].classList.add('active');
buttons1.forEach(button => {
  button.addEventListener('click', () => {
    buttons1.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    container1.style.gridTemplateColumns = button.textContent;
  });
});

const buttons2 = document.querySelectorAll('#second-task-container > button');
const container2 = document.getElementById('grid-template-rows-container');

buttons2[0].classList.add('active');
buttons2.forEach(button => {
  button.addEventListener('click', () => {
    buttons2.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    container2.style.gridTemplateRows = button.textContent;
  });
});

const buttons3 = document.querySelectorAll('#third-task-container > button');
const container3 = document.getElementById('grid-template-areas-container');

buttons3[0].classList.add('active');
buttons3.forEach(button => {
  button.addEventListener('click', () => {
    buttons3.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    container3.style.gridTemplateAreas = button.textContent;
  });
});

const buttons4 = document.querySelectorAll('#forth-task-container > button');
const container4 = document.getElementById('gap-container');

buttons4[0].classList.add('active');
buttons4.forEach(button => {
  button.addEventListener('click', () => {
    buttons4.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    container4.style.gap = button.textContent;
  });
});