// Funktinon fürs Script //
function touchStart(event) {
    startX = event.touches[0].pageX;
    startY = event.touches[0].pageY;
    canvas.moveTo(startX, startY);
}
function touchMove(event) {
    event.preventDefault();
    canvas.lineTo(event.touches[0].pageX, event.touches[0].pageY);
    canvas.stroke();
}
function touchEnd(event) {
    canvas.lineTo(startX, startY);
    canvas.stroke();  
}
function clearCanvas(event){
    var clearCanvas = document.getElementById('canvas');
    clearCanvas.width = clearCanvas.width;
}
function drawLine(event){
    var el = document.getElementById('canvas');
    el.addEventListener("touchstart", touchStart, false);
    el.addEventListener("touchmove", touchMove, false);
    el.removeEventListener("touchend", touchEnd, false);
}
function drawClosedForm(event){
    var el = document.getElementById('canvas');
    el.addEventListener("touchstart", touchStart, false);
    el.addEventListener("touchmove", touchMove, false);
    el.addEventListener("touchend", touchEnd, false);
}

function drawBiggerLine(event){
var el = document.getElementById('canvas');
    var canvas = el.getContext('2d');
    canvas.lineWidth =++
};

function drawSmallerLine(event){
var el = document.getElementById('canvas');
    var canvas = el.getContext('2d');
    canvas.lineWidth =--
};