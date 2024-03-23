let latestNum;
const btn = document.querySelector("#btn");
const content = document.querySelector("#content");
console.log(btn);
const URL = "https://cat-fact.herokuapp.com/facts";
const loader = document.querySelector("#loader");
console.log(loader);
function showLoader() {
  loader.classList.add("show");
}
function removeLoader() {
  loader.classList.remove("show");
}

btn.addEventListener("click", getFact);

window.onload = function () {
  getFact();
};

async function getFact() {
  content.innerText = "";
  showLoader();

  let response = await fetch(URL);
  let data = await response.json();
  console.log("got the data", data[0].type);
  if (data) {
    removeLoader();
    let randomNum = getRandomNum(data.length);
    if (randomNum === latestNum) {
      randomNum = getRandomNum(data.length);
    }
    latestNum = randomNum;
    content.innerText = data[randomNum].text;
  }
}

function getRandomNum(length) {
  let number = Math.floor(Math.random() * length);
  console.log(number);
  return number;
}
