const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let minCount = 0;
let secCount = 0;
let millCount = 0;
let interval = null;  
let running = false;  

function timer() {
    millCount++;


    if (millCount > 99) {
        millCount = 0;
        secCount++;
    }

 
    if (secCount > 59) {
        secCount = 0;
        minCount++;
    }

 
    milliseconds.textContent = millCount.toString().padStart(2, '0');
    sec.textContent = secCount.toString().padStart(2, '0');
    min.textContent = minCount.toString().padStart(2, '0');
}


start.addEventListener("click", () => {
    if (!running) {              
        running = true;
        interval = setInterval(timer, 10);
    }
});


stop.addEventListener("click", () => {
    clearInterval(interval);
    running = false;
});


reset.addEventListener("click", () => {
    clearInterval(interval);
    running = false;
    minCount = 0;
    secCount = 0;
    millCount = 0;
    min.textContent = "00";
    sec.textContent = "00";
    milliseconds.textContent = "00";
});
