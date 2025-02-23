const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

btnYes.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnYes.getBoundingClientRect().height;
  const btnWidth = btnYes.getBoundingClientRect().width;
  const btnTop = btnYes.getBoundingClientRect().top;
  const btnLeft = btnYes.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnYes.style.top = Math.floor(newTop) + "px";
  btnYes.style.left = Math.floor(newLeft) + "px";
});

btnNo.addEventListener("click", (e) => {
  btnYes.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});