var time = 0;
var running = 0;

function startPause() {
    if (running == 0) {
        running = 1;
        increment();
        document.getElementsByClassName("Start").innerHTML = "Pause"
    }
    else {
        running = 0;
        document.getElementsByClassName("Start").innerHTML = "Resume"
    }
}

function reset() {
    running = 0;
    time = 0;
    document.getElementsByClassName("Start").innerHTML = "Start"
}

function increment() {
    if (running == 1) { }
    setTimeout(function () {
        time++;
        var mins = Math.floor(time / 10 / 60);
        var secs = Math.floor(time / 10);
        var tenths = time % 10;
        document.getElementsByClassName("output").innerHTML = mins + ":" + secs + ":" + tenths;
        increment();
    }, 100);
}







