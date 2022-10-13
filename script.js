let numberKeys = document.querySelectorAll(".key.number");
let decimalKey = document.querySelector(".key.decimal");
let display = document.querySelector("#display");
let currentNumber = ""
let hasDecimalPoint = false;
let operand1;
let operand2;
let operator;

numberKeys.forEach((el) => {
	el.addEventListener("click", () => {
	currentNumber += el.innerText;
	display.innerText = currentNumber;
	});
})

decimalKey.onclick = () => {
	if (currentNumber != "" && hasDecimalPoint == false) {
		hasDecimalPoint = true;
		currentNumber += "."
    display.innerText = currentNumber;
  }
}

// CONTINUE LATER, ADD THE OTHER BUTTON FUNCTIONS
	 