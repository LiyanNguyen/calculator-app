let numberKeys = document.querySelectorAll<HTMLDivElement>(".key.number")!;
let decimalKey = document.querySelector<HTMLDivElement>(".key.decimal")!;
let deleteKey = document.querySelector<HTMLDivElement>(".key.delete")!;
let resetKey = document.querySelector<HTMLDivElement>(".key.reset")!;
let equalKey = document.querySelector<HTMLDivElement>(".key.equal")!;
let addKey = document.querySelector<HTMLDivElement>(".key.add")!;
let minusKey = document.querySelector<HTMLDivElement>(".key.minus")!;
let multiplyKey = document.querySelector<HTMLDivElement>(".key.multiply")!;
let divideKey = document.querySelector<HTMLDivElement>(".key.divide")!;
let display = document.querySelector<HTMLHeadingElement>("#display")!;
let currentOperation = document.querySelector<HTMLParagraphElement>("#currentOperation")!;
let currentNumber:string = "399981";
let hasDecimalPoint:boolean = false;
let operand1:number;
let operand2:number;
let hasOperand1:boolean = false

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

let tempNumber:number;
equalKey.onclick = () => {
	if (hasOperand1 == true && currentNumber != "") {
		operand2 = Number(currentNumber);
		currentOperation.innerText += " " + operand2;

		//addition
		if (currentOperation.innerText.includes("+")) {
			tempNumber = operand1 + operand2;
			currentNumber = tempNumber.toString();
    }

    //minus
		else if (currentOperation.innerText.includes("-")) {
			tempNumber = operand1 - operand2;
			currentNumber = tempNumber.toString();
    }

    //multiply
    else if (currentOperation.innerText.includes("x")) {
			tempNumber = operand1 * operand2;
			currentNumber = tempNumber.toString();
    }

    //divide
    else if (currentOperation.innerText.includes("/")) {
			tempNumber = operand1 / operand2;
			currentNumber = tempNumber.toString();
    }

		displayResult();
	}
}

let themeToggler = document.querySelector<HTMLDivElement>(".toggler")!;
let rootElement = document.querySelector<HTMLElement>(":root")!;
let currentTheme:number = 0

themeToggler.onclick = () => {
	currentTheme++
	
	if (currentTheme == 1) {
		rootElement.classList.add("theme2");
	}

	else if (currentTheme == 2) {
		rootElement.classList.remove("theme2");
    rootElement.classList.add("theme3");
	}
	
	else if (currentTheme == 3) {
		rootElement.classList.remove("theme2");
		rootElement.classList.remove("theme3");
		currentTheme = 0;
  }
}