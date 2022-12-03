var today = moment().format('[Today is ]MMM Do YYYY');
var now = moment().hour();
var timeBlock = document.querySelectorAll(".time-block");
var saveButton = document.querySelectorAll(".btn");
var toBeDoneSpan = document.querySelectorAll(".text");


$("#currentDay").text(today);


for (var i = 0; i < timeBlock.length; i++) {
    var block = timeBlock[i].getAttribute("data-number");
        console.log(block);
    if (block < now) {
        timeBlock[i].classList.add("past");
    }
    else if (block == now) {
        timeBlock[i].classList.add("present");
    }
    else {
        timeBlock[i].classList.add("future");
    }
}

for (var i = 0; i < saveButton.length; i++) {
saveButton[i].addEventListener("click", function() {
    console.log("hello");
  });
};
