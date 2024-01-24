var timeBegan = null; //did the clock start?
var timeStopped = null;
var stoppedDuration = 0;
var startInterval = null;
var flag = false;

const timerContainer = document.getElementsByClassName("timer-container")[0];

timerContainer.addEventListener("click", function () {
    if (!flag) {
        startTimer();
        flag = true;
    }
    else {
        stopTimer();
        flag = false;
    }
})

timerContainer.addEventListener("dbclick", function () {
    resetTimer();
})

function startTimer() {
    if (timeBegan === null)
        timeBegan = new Date();

    if (timeStopped !== null)
        stoppedDuration += (new Date() - timeStopped);

    startInterval = setInterval(clockRunning, 10);


}

function stopTimer() {
    timeStopped = new Date();
    clearInterval(startInterval);
}

function clockRunning() {
    var currentTime = new Date();
    var timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

    var minutes = timeElapsed.getUTCMinutes();
    var seconds = timeElapsed.getUTCSeconds();
    var milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds / 10);

    document.getElementById("timer-display").innerHTML = (minutes = minutes < 10 ? '0' + minutes : minutes)
        + ":" + (seconds = seconds < 10 ? '0' + seconds : seconds) + ":" + (milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds);
}

function resetTimer() {
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stoppedDuration = 0;
    document.getElementById("timer-display").innerHTML = "00:00:00";
    flag = false;
}




