let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  if (!numTwo) {
    $result.value = "";
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};

const onClickOperator = (event) => {
  if (operator && event.target.textContent === "-") {
    numTwo += event.target.textContent;
    $result.value = "-";
    return;
  } else if (numOne) {
    if (operator) doCalculation();
    operator = event.target.textContent;
    $operator.value = event.target.textContent;
    return;
  }

  if (event.target.textContent === "-") {
    numOne += event.target.textContent;
    $result.value += "-";
  } else {
    alert("숫자를 먼저 입력하세요");
  }
};

const doCalculation = () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = numOne - numTwo;
        break;
      case "x":
        $result.value = numOne * numTwo;
        break;
      case "/":
        $result.value = numOne / numTwo;
        break;
    }
    $operator.value = "";
    operator = "";
    numOne = $result.value;
    numTwo = "";
  }
};
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);
document.querySelector("#plus").addEventListener("click", onClickOperator);
document.querySelector("#minus").addEventListener("click", onClickOperator);
document
  .querySelector("#divide")
  .addEventListener("click", onClickOperator);
document
  .querySelector("#multiply")
  .addEventListener("click", onClickOperator);
document
  .querySelector("#calculate")
  .addEventListener("click", doCalculation);
document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
});