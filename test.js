const the_number_of_elements_in_div = 6,
  position_of_result_in_the_div = 9,
  position_of_operation_in_the_div = 3,
  position_of_first_input = 1,
  position_of_second_input = 5;

let operation = "";
let alert_check = false;
let array_of_result = [];
let container_counter = 0;
let element_of_div;
let Btn = document.getElementById("btn");

/*.............Program start......................*/
(function Start() {
  array_of_result[container_counter] = new Array();
  Monitor();
  OperationChoose();
})();

function OperationChoose() {
  while (
    operation != "+" &&
    operation != "*" &&
    operation != "-" &&
    operation != "/" &&
    operation != "%"
  ) {
    if (alert_check) alert("Please check the input !!");
    operation = prompt(
      "pleas chose the operation:  * ,  +  ,  -  ,  /  ,  %",
      operation
    );

    alert_check = true;
  }

  document.getElementById("container" + container_counter).childNodes[
    position_of_operation_in_the_div
  ].innerHTML = operation;
}

/*..............oninput Monitor.........................*/
function Monitor() {
  for (
    let container_number = 0;
    container_number <= container_counter;
    container_number++
  ) {
    element_of_div = document.getElementById(
      "container" + container_number
    ).childNodes;


    for (let i = 1; i < element_of_div.length; i++) {
      element_of_div[i].oninput = function () {
        array_of_result[container_number][i] = this.value;
        ResultCalculate(container_number);
      };
    }
  }
}

Btn.onclick = () => {
  container_counter++;
  array_of_result[container_counter] = new Array();
  CreateOneMoreDiv();
  operation = "";
  alert_check = false;
  OperationChoose();
};

function CreateOneMoreDiv() {
  let div = document.createElement("div");
  element_of_div = document.getElementById("container0");
  div.innerHTML = element_of_div.innerHTML;
  div.childNodes[position_of_result_in_the_div].innerHTML = "";
  div.id = "container" + container_counter;
  document.body.appendChild(div);
  Monitor();
}

function ResultCalculate(container_number) {
  var res;

  x = new Number(array_of_result[container_number][position_of_first_input]);
  y = new Number(array_of_result[container_number][position_of_second_input]);

  element_of_div = document.getElementById("container" + container_number);

  operation =
    element_of_div.childNodes[position_of_operation_in_the_div].innerHTML;

  if (operation == "*") res = x * y;
  else if (operation == "+") res = x + y;
  else if (operation == "-") res = x - y;
  else if (operation == "/") res = x / y;
  else if (operation == "%") res = x % y;

  element_of_div.childNodes[position_of_result_in_the_div].innerHTML = res;
}
