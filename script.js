const colors = ["red", "green", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
