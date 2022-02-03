let numberOne = null;
let numberTwo = null;
let operator = null;

let memoryValue = null;

function memoryStore() {
  memoryValue = document.getElementById("mainbody1-screen").innerHTML;
  document.getElementById("mainbody1-screen").innerHTML = 0;
}

function memoryCall() {
  document.getElementById("mainbody1-screen").innerHTML = memoryValue;
}

function deleteNum() {
  let numberDigits = document.getElementById("mainbody1-screen").innerHTML;
  let displayValue = document.getElementById("mainbody1-screen").innerHTML;

  if (numberDigits <= 1) {
    document.getElementById("mainbody1-screen").innerHTML = 0;
  } else {
    document.getElementById("mainbody1-screen").innerHTML = displayValue.substring(0, numberDigits - 1);
  }
}

function input(numSelected) {
  let currentDisplay = document.getElementById("mainbody1-screen").innerHTML;

  if (currentDisplay == "0" && currentDisplay % 1 == 0) {
    currentDisplay = "";
  }

  if (currentDisplay.length < 16 && currentDisplay % 1 == 0)
  document.getElementById("mainbody1-screen").innerHTML = currentDisplay + numSelected;
}

function clearBoard() {
  document.getElementById("mainbody1-screen").innerHTML = 0;

  numberOne = null;
  numberTwo = null;
  calculatorOperator = null;
}

function calculateDisplay(oper) {
  if (numberOne == null) {
    numberOne = document.getElementById("mainbody1-screen").innerHTML;
    document.getElementById("mainbody1-screen").innerHTML = 0;
    operator = oper;
  } else if (oper == '=') {
    numberTwo = document.getElementById("mainbody1-screen").innerHTML;
    display = numberOne + operator + numberTwo;
    let answer = new Function('return ' + display)();
    answer = (answer*10)/10;
    document.getElementById("mainbody1-screen").innerHTML = answer;
    numberOne = null;
    numberTwo = null;
    operator = null;
  } else {
    numberTwo = document.getElementById("mainbody1-screen").innerHTML;
    display = numberOne + operator + numberTwo;
    let answer = new Function('return ' + display)();
    answer = (answer*10)/10;
    document.getElementById("mainbody1-screen").innerHTML = 0;
    numberOne = answer;
    numberTwo = null;
    operator = oper;
  }
}
