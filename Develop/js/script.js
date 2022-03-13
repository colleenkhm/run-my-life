//display current date and time
//still need to figure out how to make the time increase - using moments.js should work but its not loading
const now = new Date();
var dateNoTime = (now.getMonth()+1)+'/'+now.getDate()+'/'+now.getFullYear();
let displayDate = dateNoTime.toString();
document.getElementById(currentDay);
currentDay.innerHTML = displayDate;

// const now = moment().format('dddd')+moment().format('MMMM Do YYYY')
// let displayDate = now.toString();
// document.getElementById(currentDay)
// currentDay.innerHTML = displayDate;

// need to have number of hours as separate div or maybe undisplayed id that corresponds to time in format that javascript can read
// need to account for am vs pm
// if/else statements that set current time = hour fetched from new date
// if/else must also contain addClass="hidden" and removeClass "hidden" for past, present, and future CSS styles
// create textboxes that take up certain width of page, need to have container so that display flex doesn't set all p tags next to each other and textboxes below

// onclick function that enables text input for each field
// refer to taskinator for adding events/saving in local storage
// change color for past/future events (if/else if/else statements for past, present, and future)

// create a table for the different times and events





