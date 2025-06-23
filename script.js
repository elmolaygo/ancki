var alphiButton = document.getElementById('alphiButton');
var marckButton = document.getElementById('marckButton');
var marcButton = document.getElementById('marcButton');

var alphiModal = document.getElementById('alphiModal');
var marckModal = document.getElementById('marckModal');
var marcModal = document.getElementById('marcModal');
var closeButton = document.getElementById('closeButton');

document.addEventListener('DOMContentLoaded', function() {
    alphiButton.addEventListener('click', function() {
        alphiModal.classList.add('active');
    })
    marckButton.addEventListener('click', function() {
        marckModal.classList.add('active');
    })
    marcButton.addEventListener('click', function() {
        marcModal.classList.add('active');
    })
    closeButtonA.addEventListener('click', function() {
        alphiModal.classList.remove('active');
    })
    closeButtonB.addEventListener('click', function() {
        marckModal.classList.remove('active');
    })
    closeButtonC.addEventListener('click', function() {
        marcModal.classList.remove('active');
    })
});

console.log("Don't judge my code please :>")