//display current date and time
//still need to figure out how to make the time increase - using moments.js should work but its not loading
const now = new Date();
var dateNoTime = (now.getMonth()+1)+'/'+now.getDate()+'/'+now.getFullYear();
let displayDate = dateNoTime.toString();
document.getElementById(currentDay);
currentDay.innerHTML = displayDate;

// onclick function that enables text input for each field
// refer to taskinator for adding events/saving in local storage
// change color for past/future events (if/else if/else statements for past, present, and future)







