let timer = document.querySelector('#timer');

let seconds = 0;
let minutes = 0;
let hours = 0;

let twoDigitSec = 0;
let twoDigitMin = 0;
let twoDigitHr = 0;

let playStopBtn = document.querySelector('#play');
let timeInterval = null;
let timerStatus = 'stopped';

function time() {
    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }

    function setFormat() {
        if (seconds < 10) {
            twoDigitSec = '0' + seconds.toString();
        } else {
            twoDigitSec = seconds;
        }

        if (minutes < 10) {
            twoDigitMin = '0' + minutes.toString();
        } else {
            twoDigitMin = minutes;
        }

        if (hours < 10) {
            twoDigitHr = '0' + hours.toString();
        } else {
            twoDigitHr = hours
        }
    }

    setFormat()
    timer.innerText = twoDigitHr + ':' + twoDigitMin + ':' + twoDigitSec;
}


// FIX BUTTON RENDERING

playStopBtn.addEventListener('click', () => renderButtons());

function renderButtons() {
    if (timerStatus === 'stoppped') {
        timeInterval = window.setInterval(time, 1000);
        timerStatus = 'started'
    } else {
        window.clearInterval(timeInterval)
        timerStatus = 'stopped'
    }
}







