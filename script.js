const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equalTo = document.querySelector(".equal");
let display = document.querySelector("#display")
const dot  = document.querySelector(".dot");
const clean = document.querySelector(".delete");

let currentNumber = "";
let currentOperation = "";
let previousNumber = "";

numbers.forEach((number) => {
    number.addEventListener("click" , () => {
        currentNumber += number.innerText;
        display.innerText = currentNumber;
        
    });
});
dot.addEventListener("click", () => {
  if (!currentNumber.includes(".")) {
      currentNumber += ".";
      display.innerText = currentNumber;
  }
});
operations.forEach((operation) => {
    operation.addEventListener("click" , () => {
        currentOperation = operation.innerText;
        previousNumber = currentNumber;
        currentNumber = "";
        display.innerText = currentOperation;

    });
});
equalTo.addEventListener("click" , () =>{
  if(currentNumber === "") {
    display.innerText = "Please Enter a Number";
    display.style.fontSize = "20px"; 
    display.style.textAlign = "center";
    display.style.color = "red";
    return;
  }
  let result = 0;
  switch (currentOperation) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      display.innerText = `${previousNumber} + ${currentNumber} = ${result}`
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      display.innerText = `${previousNumber} - ${currentNumber} = ${result}`
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      display.innerText = `${previousNumber} * ${currentNumber} = ${result}`
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      display.innerText = `${previousNumber} / ${currentNumber} = ${result}`
      break;
  
    default:
      break;
  }
  currentNumber = "";
  previousNumber = "";
  result = "";
});

clean.addEventListener ( "click" ,  () => {
  currentNumber = "";
  previousNumber = "";
  result = "";
  display.innerText = "";
});


