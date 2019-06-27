// Game values
let min =4,
    max =10,
    winningNum =2,
    guessLeft =3;

const game =document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// assign the dynamic values 
minNum.textContent = min;
maxNum.textContent = max;