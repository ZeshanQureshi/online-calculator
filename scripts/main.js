let numberOne = null;
let numberTwo = null;
let operator = null;

/*
var mathOperation = {
  "+":function(num1, num2) {return num1 + num2},
  "-":function(num1, num2) {return num1 - num2},
  "*":function(num1, num2) {return num1 * num2},
  "/":function(num1, num2) {return num1 / num2},
}

function operate(num1, num2, operator) {
  return mathOperation[operator](num1,num2);
}
*/

function input(numSelected) {
  let currentDisplay = document.getElementById("mainbody1-screen").innerHTML;

  if (currentDisplay == "0") {
    currentDisplay = "";
  }

  if (currentDisplay.length < 16)
  document.getElementById("mainbody1-screen").innerHTML = currentDisplay + numSelected;
  //document.getElementById("mainbody1-screen").innerHTML = parseInt(currentDisplay + numSelected);
    
}

function clearBoard() {
  document.getElementById("mainbody1-screen").innerHTML = 0;

  numberOne = null;
  numberTwo = null;
  calculatorOperator = null;
}

/*
function calculateDisplay(oper) {

  if (numberOne == null && numberTwo == null) {
    numberOne = document.getElementById("mainbody1-screen").innerHTML;
    document.getElementById("mainbody1-screen").innerHTML = 0;
    operator = oper;
  } else if (oper == '='){
    numberTwo = document.getElementById("mainbody1-screen").innerHTML;
    display = numberOne + operator + numberTwo;
    document.getElementById("mainbody1-screen").innerHTML = new Function('return ' + display)()
    numberOne = null;
    numberTwo = null;
    operator = null;
  } else {
    numberTwo = document.getElementById("mainbody1-screen").innerHTML;
    display = numberOne + operator + numberTwo;
    document.getElementById("mainbody1-screen").innerHTML = new Function('return ' + display)()
    numberOne = null;
    numberTwo = null;
    operator = oper;
  }
}
*/

function calculateDisplay(oper) {
  if (numberOne == null) {
    numberOne = document.getElementById("mainbody1-screen").innerHTML;
    document.getElementById("mainbody1-screen").innerHTML = 0;
    operator = oper;
  } else if (oper == '=') {
    numberTwo = document.getElementById("mainbody1-screen").innerHTML;
    display = numberOne + operator + numberTwo;
    document.getElementById("mainbody1-screen").innerHTML = new Function('return ' + display)();
    numberOne = null;
    numberTwo = null;
    operator = null;
  } else {
    numberTwo = document.getElementById("mainbody1-screen").innerHTML;
    display = numberOne + operator + numberTwo;
    document.getElementById("mainbody1-screen").innerHTML = 0;
    numberOne = new Function('return ' + display)();
    numberTwo = null;
    operator = oper;
  }

}
