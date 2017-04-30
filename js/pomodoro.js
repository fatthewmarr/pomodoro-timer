// Timer period variables
var workTime;
var breakTime;
var countSec;

// Clock variables
var pause;
var work;
var timer;

$(document).ready(function() {
  // Initialize variables used for keeping track of work and break session lengths
  workTime = 25;
  breakTime = 5;
  countSec = workTime * 60;
  
  // Initialize variables used for clock interface
  pause = true;
  work = true;
  
  // Set interface component texts
  $('#work-display').text(workTime);
  $('#break-display').text(breakTime);
  $('#session-display').text('WORK');
  setClockSeconds(countSec);
  $('#timer-button').text('START');
});

function workPlus() {
  if(pause) {
	if(workTime < 720) {
      workTime++;
	  $('#work-display').text(workTime);
	  resetClock();
	}
  }
}

function workMinus() {
  if(pause) {
	if(workTime > 1) {
      workTime--;
	  $('#work-display').text(workTime);
	  resetClock();
	}
  }
}

function breakPlus() {
  if(pause) {
	if(breakTime < 60) {
	  breakTime++;
	  $('#break-display').text(breakTime);
	  resetClock();
	}
  }
}

function breakMinus() {
  if(pause) {
	if(breakTime > 1) {
	  breakTime--;
	  $('#break-display').text(breakTime);
	  resetClock();
	}
  }
}

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

/* Helper function which sets the clock to its initial configuration
 */
function resetClock() {
  countSec = workTime * 60;
  setClockSeconds(countSec);
  work = true;
  $('#session-display').text('WORK');
}
