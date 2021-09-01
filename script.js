'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current1EL = document.getElementById('current--0');
const current2EL = document.getElementById('current--1');

const diceEL= document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// ###################### STARTERS ####################################
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

const scores = [0,0];
let currentscore = 0;
let activePlayer = 0;
let playing = true;

// switching Players Function
const PlayerSwitch = function(){
    
    currentscore= 0;
    document.getElementById(`current--${activePlayer}`).textContent=currentscore;
    activePlayer= activePlayer == 0? 1:0 ;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

//############# ROLLING DICE FUNCTIONALITY ############33
btnRoll.addEventListener('click',function(){

// generating a random dice number
if (playing){
    const dice = Math.floor(Math.random()*6)+1;
    console.log(dice);

    // displaying the dice 
    diceEL.classList.remove('hidden');
    diceEL.src='dice-'+dice+'.png';

    // check if number is 1: true - switch to new player
    if (dice !== 1){
        currentscore += dice ;
        document.getElementById(`current--${activePlayer}`).textContent=currentscore;
    
    }
    else{
    //  switch to other player
    document.getElementById(`current--${activePlayer}`).textContent=0;
    PlayerSwitch();

    }
}
})


// ################################## Hold Function  ###################
btnHold.addEventListener('click',function(){
// add current score to the active player score
if(playing){
    scores[activePlayer]+= currentscore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // check if the players score is 100 or higher
    if (scores[activePlayer] >= 100){
        playing = false
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        
        
   
    }


// Switch to the next player
    PlayerSwitch();
   
}
})

// ######################## PLAY AGAIN FUNCTION ##########################
    btnNew.addEventListener('click',function(){
        activePlayer = activePlayer === 0 ? 1 : 0;
        console.log(activePlayer)
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
        playing = true
        current1EL.textContent = 0;
        current2EL.textContent = 0;
        currentscore = 0;
        scores[0] = 0;
        scores[1] = 0;
        score1EL.textContent = 0;
        score0EL.textContent = 0;
        



        
    })