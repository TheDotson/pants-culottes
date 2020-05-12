console.log("is this thing on?")

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const clickEvents = () => {

}

const init = () => {
  clickEvents();
}

init();
