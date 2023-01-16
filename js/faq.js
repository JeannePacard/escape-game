const answerText = document.querySelectorAll(".answer");
const moreButtons = document.querySelectorAll(".icone-more");
const lessButtons = document.querySelectorAll(".icone-less");

moreButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    moreButtons[index].classList.add("remove");
    lessButtons[index].classList.add("block");
    answerText[index].classList.add("block");
  });
});

lessButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    moreButtons[index].classList.remove("remove");
    lessButtons[index].classList.remove("block");
    answerText[index].classList.remove("block");
  });
});
