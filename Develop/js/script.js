//display current date and time
var displayDate = moment().format('dddd MMMM Do');
currentDay.innerHTML = displayDate;

const timeBlocks = document.getElementsByClassName("timeBlock");
let currentHour = parseInt(moment().format("HH"));
var timeBlockHour = 8;

var addTimeBlockId = function() {
    timeBlock.setAttribute("timeBlock.id", timeBlockCounter);
    timeBlockCounter++;
};

Array.from(timeBlocks).forEach(timeBlock => {
    // still need to set timeBlock id equal to timeBlock - maybe I'm overcomplicating this and can do it in less code?
    let
        timeBlockIdString = timeBlock.id,
        timeBlockHour;
    if (timeBlockIdString) {
        timeBlockHour = parseInt(timeBlockIdString);
    }
    if (timeBlockHour) {
    //compares id to current hour and changes color
        if (currentHour === timeBlockHour) {
            timeBlock.classList.add("present");
        } else if (currentHour < timeBlockHour){
            timeBlock.classList.add("future");
        } else if (currentHour > timeBlockHour) {
            timeBlock.classList.add("future")
        }
    
    }});

// change color depending on whether event is in past, present, or future

// save events to local storage






