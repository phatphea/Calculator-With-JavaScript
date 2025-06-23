let fValue = document.getElementById("firstValue");
let sValue = document.getElementById("secondValue");
let result = document.getElementById("result");

function calculation(option){
  let firstValue = parseFloat(fValue.value);
  let secondValue = parseFloat(sValue.value);

  if (fValue.value.trim() === '' || sValue.value.trim() === '') {
    result.textContent = "Please fill in both fields.";
    return;
  }

  if (isNaN(firstValue) || isNaN(secondValue)) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  option = option.toLowerCase();
  switch (option) {
    case 'sum':
      result.textContent = "The sum is: " + (firstValue + secondValue);
      break;
    case 'minus':
      result.textContent = "The minus is: " + (firstValue - secondValue);
      break;
    case 'multiply':
      result.textContent = "The multiply is: " + (firstValue * secondValue);
      break;
    case 'divide':
      if (secondValue === 0) {
        result.textContent = "Division by zero is not allowed.";
      } else {
        result.textContent = "The divide is: " + (firstValue / secondValue);
      }
      break;
    default:
      result.textContent = "Invalid operation.";
  }
}

function calculateSum() {
  calculation('sum');
}

function calculateMinus(){
  calculation('minus');
}

function calculateMultiply(){
  calculation('multiply');
}

function calculateDivide(){
  calculation('divide');
}

let sumButton = document.getElementById("sum");
sumButton.addEventListener("click", calculateSum);

let minusButton = document.getElementById("minus");
minusButton.addEventListener("click", calculateMinus);

let multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", calculateMultiply);

let divideButton = document.getElementById("divide");
divideButton.addEventListener("click", calculateDivide);


//========== Another method =================================

// function calculateSum() {
//   let firstValue = parseFloat(fValue.value);
//   let secondValue = parseFloat(sValue.value);
  
//   if (isNaN(firstValue) || isNaN(secondValue)) {
//     result.textContent = "Please enter valid numbers.";
//   } else {
//     let sum = firstValue + secondValue;
//     result.textContent = "The sum is: " + sum;
//   }
// }

// function calculateMinus() {
//   let firstValue = parseFloat(fValue.value);
//   let secondValue = parseFloat(sValue.value);
  
//   if (isNaN(firstValue) || isNaN(secondValue)) {
//     result.textContent = "Please enter valid numbers.";
//   } else {
//     let sum = firstValue - secondValue;
//     result.textContent = "The minus is: " + sum;
//   }
// }

// function calculateMultiply() {
//     let firstValue = parseFloat(fValue.value);
//     let secondValue = parseFloat(sValue.value);
    
//     if (isNaN(firstValue) || isNaN(secondValue)) {
//         result.textContent = "Please enter valid numbers.";
//     } else {
//         let sum = firstValue * secondValue;
//         result.textContent = "The multiply is: " + sum;
//     }
// }

// function calculateDivide() {
//     let firstValue = parseFloat(fValue.value);
//     let secondValue = parseFloat(sValue.value);
//     if (isNaN(firstValue) || isNaN(secondValue)) {
//         result.textContent = "Please enter valid numbers.";
//     } else if (secondValue === 0) {
//         result.textContent = "Division by zero is not allowed.";
//     } else {
//         let sum = firstValue / secondValue;
//         result.textContent = "The divide is: " + sum;
//     }
// }

// let calculateButton = document.getElementById("sum");
// calculateButton.addEventListener("click", calculateSum);

// let minusButton = document.getElementById("minus");
// minusButton.addEventListener("click", calculateMinus);

// let multiplyButton = document.getElementById("multiply");
// multiplyButton.addEventListener("click", calculateMultiply);

// let divideButton = document.getElementById("divide");
// divideButton.addEventListener("click", calculateDivide);

