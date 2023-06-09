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
      } else if (calcDisplay.innerText.length < 11) {
        calcDisplay.innerText += e.target.innerText;
      }
    });
  });
}

watch();

// Main Operations

plus.addEventListener("click", () => {
  firstOperand = calcDisplay.innerText;
  operator = "+";
  calcDisplay.innerText = 0;
  resultDisplay.innerText += `${firstOperand} + `;
});
minus.addEventListener("click", () => {
  firstOperand = calcDisplay.innerText;
  operator = "-";
  calcDisplay.innerText = 0;
  resultDisplay.innerText += `${firstOperand} - `;
});
multiply.addEventListener("click", () => {
  firstOperand = calcDisplay.innerText;
  operator = "x";
  calcDisplay.innerText = 0;
  resultDisplay.innerText += `${firstOperand} x `;
});
divide.addEventListener("click", () => {
  firstOperand = calcDisplay.innerText;
  operator = "/";
  calcDisplay.innerText = 0;
  resultDisplay.innerText += `${firstOperand} / `;
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
  operate(operator, firstOperand, secondOperand);
  operator = "";
  firstOperand = "";
  secondOperand = "";
  resultDisplay.innerText = "";
});

// Operations Module

function addAll(firstOperand, secondOperand) {
  return +firstOperand + +secondOperand;
}

function subtractAll(firstOperand, secondOperand) {
  return +firstOperand - +secondOperand;
}

function multiplyAll(firstOperand, secondOperand) {
  return +firstOperand * +secondOperand;
}

function divideAll(firstOperand, secondOperand) {
  return +firstOperand / +secondOperand;
}
