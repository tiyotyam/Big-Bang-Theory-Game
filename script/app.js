let score = JSON.parse(localStorage.getItem('score'))||{
    wins: 0,
    losses: 0,
    ties: 0
  };

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
        }
    }else if (playerMove === 'paper') {
        if(move === 'rock'){
            result = 'you win';
        }else if (move === 'paper'){
            result = 'tie';
        }else if (move === 'scissors'){
            result = 'you lose';
        }
    }else if (playerMove === 'scissors') {
        if(move === 'rock'){
            result = 'you lose';
        }else if (move === 'paper'){
            result = 'you win';
        }else if (move === 'scissors'){
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
    //store the icons in the variable
    const playerChoice = getMove(playerMove);
    const computerChoice = getMove(move);
    const resultIcon = getWutet(result);

    //manipulate the HTML using dom
    document.querySelector('#you').innerHTML = playerChoice;
    document.querySelector('#comp').innerHTML = computerChoice;
    document.querySelector('#result').innerHTML = resultIcon;

    // //displaying the result in the popup
    // alert(` you played ${playerMove} and the computer played ${move}. Result: ${result} \n wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties} `);
    
    document.querySelector('.js-wins').innerHTML = score.wins;
    document.querySelector('.js-losses').innerHTML = score.losses;
    document.querySelector('.js-ties').innerHTML = score.ties;

}
function getMove(move){
  return `<i class="fa-lg fas fa-hand-${move} fa" style="color: gold"></i>`;
}

function getWutet(result){
  if (result === 'you win'){
    return `<i class="fas fa-crown fa-lg" style="color: gold"></i>`;
  }else if (result === 'you lose'){
    return `<i class="fas fa-frown fa-lg" style="color: black"></i>`;
  }else if (result === 'tie'){
    return `<i class="fas fa-handshake fa-lg" style="color: rgb(116, 77, 26)"></i>`;
  }
}
    

function pickComputerMove() {
    const num = Math.random();
    let move = '';
    if(num>=0 && num<1/3) {
        move = 'rock';
    }else if (num>=1/3 && num<2/3) {
        move = 'paper';
    }else if (num>= 2/3 && num<1) {
        move = 'scissors';
    }
    return move;
}


