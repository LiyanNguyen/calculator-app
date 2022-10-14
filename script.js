let numberKeys = document.querySelectorAll(".key.number");
let decimalKey = document.querySelector(".key.decimal");
let deleteKey = document.querySelector(".key.delete");
let resetKey = document.querySelector(".key.reset");
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

deleteKey.onclick = () => {
	currentNumber = currentNumber.slice(0, -1);
	display.innerText = currentNumber;
}

resetKey.onclick = () => {
	currentNumber = "";
	display.innerText = currentNumber;
}
