const numbersDiv = document.querySelector(".numbers");
const draw = document.querySelector("#draw");
const reset = document.querySelector("#reset");

const lottoNumbers = [];
const colors = ["#CD0000", "#FF8200", "#006400", "#00008C", "#800080"];

function showNumber(num) {
  const eachDiv = document.createElement("div")
  let colorIndex = Math.floor(num / 10)
  eachDiv.classList.add('eachnum')
  eachDiv.style.backgroundColor = colors[colorIndex]
  eachDiv.textContent = num
  numbersDiv.appendChild(eachDiv)
}

draw.addEventListener("click", function () {
  while (lottoNumbers.length < 6) {
    let ran = Math.floor(Math.random() * 45) + 1
    if (lottoNumbers.indexOf(ran) === -1) {
      lottoNumbers.push(ran)
      showNumber(ran)
    }
  }
})

reset.addEventListener("click", function () {
  numbersDiv.innerHTML = ""
  lottoNumbers.splice(0, 6)
})