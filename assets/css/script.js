var today = moment().format('[Today is ]MMM Do YYYY');
var now = moment().hour();
var timeBlock = document.querySelectorAll(".time-block");

$("#currentDay").text(today);

renderToBeDone();


for (var i = 0; i < timeBlock.length; i++) {
    var block = timeBlock[i].getAttribute("data-number");
    if (block < now) {
        timeBlock[i].classList.add("past");
    }
    else if (block == now) {
        timeBlock[i].classList.add("present");
    }
    else {
        timeBlock[i].classList.add("future");
    }
};

var nineBtn = document.querySelector("#nineBtn");
var txtNine = document.querySelector("#txtNine");

nineBtn.addEventListener("click", function() {
    var toBeDone = txtNine.value;

    localStorage.setItem("toBeDone", toBeDone);

    renderToBeDone();
  });

  function renderToBeDone() {
    var storedTBD = localStorage.getItem("toBeDone");

    if (!storedTBD) {
        return;
      }

    var txtNine = document.querySelector("#txtNine");
    console.log(storedTBD);

    txtNine.value = storedTBD;
};



