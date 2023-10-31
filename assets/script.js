// Uses dayjs API to get todays date
var currentDate = dayjs().format("dddd, MMM D YYYY");
$ ("#currentDay").html(currentDate);
var currentHour = dayjs().hour();
$ ("#currentHour").html(currentHour);

$(function () {
// On saveBtn click, sets id and description of respective time block to local storage
    $ (".saveBtn") .click (function() {
        var id = $ (this) .parent() .attr("id");
        var task = $ (this) .siblings(".description") .val();
        localStorage.setItem(id, task);
        console.log(task)
    })

// Compares the current hour to the hour of each time block to determine which class should be attributed to it.
// Past, present, and future classes change the color of the time block.
    $ (".time-block") .each (function() {
        var blockHour = parseInt($ (this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
            $ (this) .addClass ("past");
        } else if (blockHour === currentHour) {
            $ (this) .addClass ("present");
        } else {
            $ (this) .addClass ("future");
        }
    })

// Iterates through each time block, and allows user inputed task to remain on page using local storage.
    for (var i = 9; i < 18; i++) {
        $ ("#hour-" + i + " .description") .val (localStorage.getItem("hour-" + i));
    }
  });
