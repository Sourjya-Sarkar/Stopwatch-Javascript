window.onload = function () {
var seconds = 0; 
var tens = 0; 
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var buttonStart = document.getElementById('button-start');
var buttonReset = document.getElementById('button-reset');
var Interval ;
var flag = 0;

buttonStart.addEventListener("click", function() {
    if(flag == 0) {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        flag = 1;
    } else {
        clearInterval(Interval);
        flag = 0;
    }
});

buttonReset.addEventListener("click", function() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
});

function startTimer() {
    tens++;
    
    if(tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }
    
    if(tens > 9) {
        appendTens.innerHTML = tens;
    }
    
    if(tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + tens;
    }
    
    if(seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}
}