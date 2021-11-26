let color = document.getElementById('colortest')
function changeColor() {
    color.style.background = "blue"
}
function resetColor() {
    color.style.background = "aquamarine"
}
  

function numberOneTriangle() {
let n = 5;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            document.writeln("1");
        }
        document.writeln("<br/>");
    }
}

function showClock() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = zeroFront(minutes);
    seconds = zeroFront(seconds);

    document.getElementById('clock').innerHTML =  hours + ":" + minutes + ":" + seconds;
    setTimeout(showClock, 1000);
}
function zeroFront(i) {
    if(i<10){
        i = "0" + i
    };
    return i;
}