const noButton = document.getElementById('no-btn');

noButton.addEventListener('mouseover', () => {

  noButton.style.position = 'absolute';
  moveButton(noButton);
});

function moveButton(button) {
  const container = document.querySelector('.container');
  const containerRect = container.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();

  // Calculate new position within the container bounds
  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
}


const yesButton = document.getElementById('yes-btn');
yesButton.addEventListener('click', () => {
  alert("Yay! I LOCE YOU!! 💖");
});