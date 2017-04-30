var workTime;
var breakTime;
var countSec;

$(document).ready(function() {
  // Define variables used for keeping track of work and break sessions
  workTime = 25;
  breakTime = 5;
  countSec = workTime * 60;
  
  // Set interface component texts
  $('#work-display').text(workTime);
  $('#break-display').text(breakTime);
  $('#session-display').text('WORK');
  setClockSeconds(countSec);
  $('#timer-button').text('START');
});

/* Helper function which takes the countdown seconds used by the timer function and converts it into a human readable
 * hh:mm:ss format and displays it on the clock
 */
function setClockSeconds(seconds) {
  var hrs = Math.trunc(seconds/3600);
  if (hrs < 10)
	hrs = '0' + hrs;
  seconds %= 3600;
  var min = Math.trunc(seconds/60);
  if (min < 10)
	min = '0' + min;
  seconds %= 60;
  if (seconds < 10)
	seconds = '0' + seconds;
  $('#clock-display').text(hrs + ':' + min + ':' + seconds);
}