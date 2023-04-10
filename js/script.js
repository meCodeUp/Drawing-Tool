var el = document.getElementById('canvas');
var canvas = el.getContext('2d');
canvas.strokeStyle = "#000";
canvas.lineWidth = 2;
// Default Events fürs Zeichnen
drawLine();
// Button Event Listener
var el = document.getElementById('clearCanvas');
el.addEventListener("click", clearCanvas, false);

var el = document.getElementById('singleLine');
el.addEventListener("click", drawLine, false);

var el = document.getElementById('closedForm');
el.addEventListener("click", drawClosedForm, false);

var el = document.getElementById('biggerLine');
el.addEventListener("click", drawBiggerLine, false);

var el = document.getElementById('smallerLine');
el.addEventListener("click", drawSmallerLine, false);