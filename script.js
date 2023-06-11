// DOM
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const decimal = document.querySelector(".decimal");
const number = document.querySelectorAll(".number");
const calcDisplay = document.querySelector(".calcDisplay");
const resultDisplay = document.querySelector(".resultDisplay");

// Declerations
let operator = "";
let firstOperand = "";
let secondOperand = "";

// Script

function watch() {
  number.forEach((num) => {
    num.addEventListener("click", (e) => {
      if (calcDisplay.innerText === "0") {
        calcDisplay.innerText = e.target.innerText;
      } else if (
        !(e.target.innerText === "." && calcDisplay.innerText.includes("."))
      ) {
        calcDisplay.innerText += e.target.innerText;
      }
    });
  });
}

watch();

plus.addEventListener("click", () => {
  if (!operator) {
    // checks if the last input of the user is input or not
    firstOperand = calcDisplay.innerText;
    operator = "+";
    calcDisplay.innerText = 0;
    resultDisplay.innerText += `${firstOperand} + `;
  }
});
minus.addEventListener("click", () => {
  if (!operator) {
    // checks if the last input of the user is input or not
    firstOperand = calcDisplay.innerText;
    operator = "-";
    calcDisplay.innerText = 0;
    resultDisplay.innerText += `${firstOperand} - `;
  }
});
multiply.addEventListener("click", () => {
  if (!operator) {
    // checks if the last input of the user is input or not
    firstOperand = calcDisplay.innerText;
    operator = "x";
    calcDisplay.innerText = 0;
    resultDisplay.innerText += `${firstOperand} x `;
  }
});
divide.addEventListener("click", () => {
  if (!operator) {
    // checks if the last input of the user is input or not
    firstOperand = calcDisplay.innerText;
    operator = "/";
    calcDisplay.innerText = 0;
    resultDisplay.innerText += `${firstOperand} / `;
  }
});

// Special

clear.addEventListener("click", () => {
  operator = "";
  firstOperand = "";
  secondOperand = "";
  calcDisplay.innerText = 0;
  resultDisplay.innerText = "";
});

equal.addEventListener("click", () => {
  // Issues Regarding user input
  if (calcDisplay.innerText == decimal.innerText) {
    alert("Cannot add decimal after an operator");
    calcDisplay.innerText = 0;
  }

  if ((calcDisplay.innerText.match(/\./g) || []).length > 1) {
    alert("Invalid input: More than one decimal point.");
    calcDisplay.innerText = 0;
  }

  secondOperand = calcDisplay.innerText;
  resultDisplay.innerText += secondOperand;

  function operate(operator, firstOperand, secondOperand) {
    if (operator == "+") {
      calcDisplay.innerText = addAll(firstOperand, secondOperand);
    } else if (operator == "-") {
      calcDisplay.innerText = subtractAll(firstOperand, secondOperand);
    } else if (operator == "x") {
      calcDisplay.innerText = multiplyAll(firstOperand, secondOperand);
    } else if (operator == "/") {
      calcDisplay.innerText = divideAll(firstOperand, secondOperand);
    }
  }

  // operate function call
  operate(operator, firstOperand, secondOperand);
  operator = "";
  firstOperand = "";
  secondOperand = "";
  resultDisplay.innerText = "";
});
