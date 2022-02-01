var mathOperation = {
  "+":function(num1, num2) {return num1 + num2},
  "-":function(num1, num2) {return num1 - num2},
  "*":function(num1, num2) {return num1 * num2},
  "/":function(num1, num2) {return num1 / num2},
}

for (i = 0; i <= 9; i++){
  document.getElementById(i).addEventListener("click", input(i));
}

function operate(num1, num2, operator) {
  return mathOperation[operator](num1,num2);
}

function input(numSelected) {
  let numString = document.getElementById("mainbody1-screen").innerHTML
  document.getElementById("mainbody1-screen").innerHTML = parseInt(numString + numSelected);
}

