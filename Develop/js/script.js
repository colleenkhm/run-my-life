const timeBlocks = document.getElementsByClassName("timeBlock");
let currentHour = parseInt(moment().format("HH"));
var timeBlockCounter = 8;

var addTimeBlockId = function() {
    timeBlock.setAttribute("timeBlock.id", timeBlockCounter);
    timeBlockCounter++;
};

Array.from(timeBlocks).forEach(timeBlock => {
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
        } else if ((currentHour < timeBlockHour) && (currentHour > timeBlockHour -6)) {
            timeBlock.classList.add("future");
        } else if ((currentHour > timeBlockHour) && (currentHour < timeBlockHour + 6)) {
            timeBlock.classList.add("future")
        }
    
    }});
//display current date and time
var displayDate = moment().format('dddd MMMM Do');
currentDay.innerHTML = displayDate;

// change color depending on whether event is in past, present, or future

// save events to local storage



// const now = moment().format('dddd')+moment().format('MMMM Do YYYY')
// let displayDate = now.toString();
// document.getElementById(currentDay)
// currentDay.innerHTML = displayDate;

// need to have number of hours as separate div or maybe undisplayed id that corresponds to time in format that javascript can read (hourIdCounter?)
// need to account for am vs pm
// if/else statements that set current time = hour fetched from new date
// if/else must also contain addClass="hidden" and removeClass "hidden" for past, present, and future CSS styles
// create textboxes that take up certain width of page, need to have container so that display flex doesn't set all p tags next to each other and textboxes below

// onclick function that enables text input for each field
// refer to taskinator for adding events/saving in local storage
// change color for past/future events (if/else if/else statements for past, present, and future)





