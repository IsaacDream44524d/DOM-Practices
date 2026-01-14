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

let resetBtn = document.querySelector('#reset')

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

playStopBtn.addEventListener('click', () => renderButtons());

function renderButtons() {
    if (timerStatus === 'stopped') {
        timeInterval = window.setInterval(time, 1000);
        playStopBtn.src = 'icons/pause.png';
        timerStatus = 'started'
    } else {
        window.clearInterval(timeInterval)
        playStopBtn.src = 'icons/play-button.png'
        timerStatus = 'stopped'
    }
}

resetBtn.addEventListener('click', () => resetButton());

// FIX BUTTON FUNCTIONALITY, RESET SHOULD NOT RESTART THE TIME ITSELF

function resetButton() {
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.textContent = '00:00:00'
    renderButtons()

}







