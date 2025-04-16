let score = JSON.parse(localStorage.getItem('score'))||{
    wins: 0,
    losses: 0,
    ties: 0
  };
    updateScore();
    resetGame();

  /*this is the optional way to use like the above's or operator.
  if(!score){ 
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }*/

function playGame(playerMove) {
    const move = pickComputerMove();
    let result = '';

    if (playerMove === 'rock') {
        if(move === 'rock'){
            result = 'tie';
        }else if (move === 'paper'){
            result = 'you lose';
        }else if (move === 'scissors'){
            result = 'you win';
        }else if (move === 'lizard'){
            result = 'you win';
        }else if (move === 'spock'){
            result = 'you lose';
        }
    }else if (playerMove === 'paper') {
        if(move === 'rock'){
            result = 'you win';
        }else if (move === 'paper'){
            result = 'tie';
        }else if (move === 'scissors'){
            result = 'you lose';
        }else if (move === 'lizard'){
            result = 'you lose';
        }else if (move === 'spock'){
            result = 'you win';
        }
    }else if (playerMove === 'scissors') {
        if(move === 'rock'){
            result = 'you lose';
        }else if (move === 'paper'){
            result = 'you win';
        }else if (move === 'scissors'){
            result = 'tie';
        }else if (move === 'lizard'){
            result = 'you win';
        }else if (move === 'spock'){
            result = 'you lose';
        }
    }else if (playerMove === 'lizard') {
        if(move === 'rock'){
            result = 'you lose';
        }else if (move === 'paper'){
            result = 'you win';
        }else if (move === 'scissors'){
            result = 'you lose';
        }else if (move === 'lizard'){
            result = 'tie';
        }else if (move === 'spock'){
            result = 'you win';
        }
    }else if (playerMove === 'spock') {
        if(move === 'rock'){
            result = 'you win';
        }else if (move === 'paper'){
            result = 'you lose';
        }else if (move === 'scissors'){
            result = 'you win';
        }else if (move === 'lizard'){
            result = 'you lose';
        }else if (move === 'spock'){
            result = 'tie';
        }
    }

    //updating the score
    if (result === 'you win') {
      score.wins+=1;
    }else if (result === 'you lose') {
      score.losses+=1;
    }else if (result === 'tie'){
      score.ties+=1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();
    resetGame();
    
    //store the icons in the variable
    const playerChoice = getMove(playerMove);
    const computerChoice = getMove(move);
    const resultIcon = getResult(result);

    //manipulate the HTML using dom
    document.querySelector('.js_you').innerHTML = playerChoice;
    document.querySelector('.js_computer').innerHTML = computerChoice;
    document.querySelector('#result').innerHTML = resultIcon;

    // //displaying the result in the popup
    /*alert(` you played ${playerMove} and the computer played ${move}. Result: ${result} \n wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties} `);*/
    
    document.querySelector('.js-wins').innerHTML = score.wins;
    document.querySelector('.js-losses').innerHTML = score.losses;
    document.querySelector('.js-ties').innerHTML = score.ties;

}
function getMove(move){
  return `<i class="fa-lg fas fa-hand-${move} fa" style="color: gold"></i>`;
}

function getResult(result){
  if (result === 'you win'){
    return `<i class="fas fa-crown fa-lg" style="color: gold"></i> you win `;
  }else if (result === 'you lose'){
    return `<i class="fas fa-frown fa-lg" style="color: black"></i> you lose `;
  }else if (result === 'tie'){
    return `<i class="fas fa-handshake fa-lg" style="color: rgb(116, 77, 26)"></i> It's tie `;
  }
}
    
function updateScore(){
    document.querySelector('.js_score')
    .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
    
}

function pickComputerMove() {
    const num = Math.random();
    let move = '';
    if(num>=0 && num<0.2) {
        move = 'rock';
    }else if (num>=0.2 && num<0.4) {
        move = 'paper';
    }else if (num>=0.4 && num<0.6) {
        move = 'scissors';
    }else if (num>=0.6 && num<0.8) {
        move = 'lizard';
    }else if (num>=0.8 && num<1) {
        move = 'spock';
    }
    return move;
}
function resetScore(){
    score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScore();
      resetGame();
}


function resetGame() {
  document.querySelector('.js_you').innerHTML = '';
  document.querySelector('.js_computer').innerHTML = '';
  
  // Clear result icon/message
  document.querySelector('#result').innerHTML = '';
}