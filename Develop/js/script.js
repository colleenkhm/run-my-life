//display current date and time
var displayDate = moment().format('dddd MMMM Do');
currentDay.innerHTML = displayDate;

const timeBlockArr = document.getElementsByClassName("time-block");
let currentHour = parseInt(moment().format("H"));
console.log(timeBlockArr);
// change color depending on whether event is in past, present, or future
var changeColor = function() {
    var count = 0;
for (i = 8; i < 18; i++) {
    console.log(timeBlockArr[count].id)
    if (parseInt(timeBlockArr[count].id) < currentHour) {
        Element.classList.add("past");
    } else if (parseInt(timeBlockArr[count].id) === currentHour) {
        Element.classList.add("present");
    } else if (parseInt(timeBlockArr[count].id) > currentHour) {
        Element.classList.add("future");
    }
    count ++;
}};

changeColor();

// timeBlockArr.forEach(changeColor);
// change color depending on whether event is in past, present, or future
// other format (after if and else/if statements):
// ("timeBlock").css("background-color", "green");

// Array.from(timeBlocks).forEach(timeBlock => {
//     // still need to set timeBlock id equal to timeBlock - maybe I'm overcomplicating this and can do it in less code?
//     let
//         timeBlockIdString = timeBlock.id,
//         timeBlockHour;
//     if (timeBlockIdString) {
//         timeBlockHour = parseInt(timeBlockIdString);
//     }
//     if (timeBlockHour) {
//     //compares id to current hour and changes color
//         if (currentHour === timeBlockHour) {
//             timeBlock.classList.add("present");
//         } else if (currentHour < timeBlockHour){
//             timeBlock.classList.add("future");
//         } else if (currentHour > timeBlockHour) {
//             timeBlock.classList.add("future")
//         }
    
//     }});


// save events to local storage






