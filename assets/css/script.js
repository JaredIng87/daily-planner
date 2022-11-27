var today = moment().format('[Today is ]MMM Do YYYY');
var now = moment().hour();
var timeBlock = document.querySelectorAll(".time-block");



$("#currentDay").text(today);


for (var i = 0; i < timeBlock.length; i++) {
    var state = timeBlock[i].getAttribute("data-number");
        console.log(state);
    if (state < now) {
        timeBlock[i].classList.add("past");
    }
    else if (state == now) {
        timeBlock[i].classList.add("present");
    }
    else {
        timeBlock[i].classList.add("future");
    }
}


