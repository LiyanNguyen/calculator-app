let numberKeys = document.querySelectorAll(".key.number");
let decimalKey = document.querySelector(".key.decimal");
let deleteKey = document.querySelector(".key.delete");
let resetKey = document.querySelector(".key.reset");
let equalKey = document.querySelector(".key.equal");
let addKey = document.querySelector(".key.add");
let minusKey = document.querySelector(".key.minus");
let multiplyKey = document.querySelector(".key.multiply");
let divideKey = document.querySelector(".key.divide");
let display = document.querySelector("#display");
let currentOperation = document.querySelector("#currentOperation");
let currentNumber = "399981";
let hasDecimalPoint = false;
let operand1;
let operand2;
let hasOperand1 = false

numberKeys.forEach((el) => {
	el.addEventListener("click", () => {
		if (currentNumber.length < 10) {
			currentNumber += el.innerText;
			display.innerText = currentNumber;
		}
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
	currentNumber = currentNumber.toString().slice(0, -1);
	display.innerText = currentNumber;
}

resetKey.onclick = () => {
	currentOperation.innerText = "";
	currentNumber = "";
	display.innerText = currentNumber;
	hasOperand1 = false;
	hasDecimalPoint = false;
}

let takeOperand1 = () => {
	operand1 = Number(currentNumber);
	currentNumber = "";
	display.innerText = currentNumber;
	console.log(operand1);
	hasOperand1 = true;
	hasDecimalPoint = false;
}

addKey.onclick = () => {
	if (hasOperand1 == false && currentNumber != "") {
		currentOperation.innerText = currentNumber + " +";
		takeOperand1();
	}
}

minusKey.onclick = () => {
	if (hasOperand1 == false && currentNumber != "") {
		currentOperation.innerText = currentNumber + " -";
		takeOperand1();
	}
};

multiplyKey.onclick = () => {
	if (hasOperand1 == false && currentNumber != "") {
		currentOperation.innerText = currentNumber + " x";
		takeOperand1();
	}
};

divideKey.onclick = () => {
  if (hasOperand1 == false && currentNumber != "") {
    currentOperation.innerText = currentNumber + " /";
    takeOperand1();
  }
};

let displayResult = () => {
	display.innerText = currentNumber;
	hasOperand1 = false;
}

equalKey.onclick = () => {
	if (hasOperand1 == true && currentNumber != "") {
		operand2 = Number(currentNumber);
		currentOperation.innerText += " " + operand2;

		//addition
		if (currentOperation.innerText.includes("+")) {
      currentNumber = operand1 + operand2;
    }

    //minus
    else if (currentOperation.innerText.includes("-")) {
      currentNumber = operand1 - operand2;
    }

    //multiply
    else if (currentOperation.innerText.includes("x")) {
      currentNumber = operand1 * operand2;
    }

    //divide
    else if (currentOperation.innerText.includes("/")) {
      currentNumber = operand1 / operand2;
    }

		displayResult();
	}
}