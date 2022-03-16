$(document).ready(function(){
    //display current date and time
    var displayDate = moment().format('dddd MMMM Do');
    currentDay.innerHTML = displayDate;
    // get save buttons to save content to text area when clicked
    $(".saveBtn").on("click", function(){
        // capture values inside text area and corresponding time
        var task = $(this).siblings("textarea").val();
        console.log(task)
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time, task)
    })
    // grab items from local storage to put into text areas
    $("#8 .description").val(localStorage.getItem("8"))
    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))
    
    // change color depending on whether event is in past, present, or future
    let currentHour = parseInt(moment().format("H"));

    $(".description").each(function(){
        var timeEl = $(this).parent().attr("id");
        console.log(timeEl)
        if (timeEl < currentHour) {
            $(this).addClass("past")
        } else if (timeEl === currentHour) {
            $(this).addClass("present")
        } else if (timeEl > currentHour) {
            $(this).addClass("future")
        }

    })
});

