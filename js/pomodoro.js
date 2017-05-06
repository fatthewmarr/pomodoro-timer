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
  
  // Get reference to alarm timer sound
  audio = $('audio')[0];
  
  // Set interface component texts
  $('#work-display').text(workTime);
  $('#break-display').text(breakTime);
  $('#session-display').text('WORK');
  setClockSeconds(countSec);
  $('#timer-button').text('START');
  $('#timer-button').addClass('start');
});

/* Function which is called on every second by setInterval.
 * Handles countdown behavior for work and break period, switching between them when the counter reaches zero.
 */
function countdown() {
  // Handle switch between the work period and the break period
  if(countSec === 0) {
	work = !work;
	if (work) {
	  $('#session-display').text('WORK');
      countSec = workTime * 60;
	} else {
	  $('#session-display').text('BREAK');
      countSec = breakTime * 60;
	}
  } else {
	if (countSec === 1) {audio.play();}
	countSec--;
  }
  setClockSeconds(countSec);
}

/* Function for handling behavior of the timer button, which will serve as either a start or a stop button, depending
 * on if the timer is currently counting down.
 * When pressed while application is paused, starts the timer and turns the button into a stop button.
 * When pressed while application is not paused, stops the timer and turns the button into a start button.
 */ 
function timerButton() {
  // Start button handling
  if (pause) {
	timer = setInterval(countdown, 1000);
	pause = false;
	$('#timer-button').text('STOP');
	$('#timer-button').removeClass('start');
	$('#timer-button').addClass('stop');
  }
  // Stop button handling
  else {
	clearInterval(timer);
	pause = true;
	$('#timer-button').text('START');
	$('#timer-button').removeClass('stop');
	$('#timer-button').addClass('start');
  }
}

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
