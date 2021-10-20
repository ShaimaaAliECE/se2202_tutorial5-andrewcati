let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var startBTN = document.createElement('button');
startBTN.innerText = 'Click Button to Start Game, first player is O. Game is over once all squares have an "X" or "O"';
document.getElementById('game-over-lbl').appendChild(startBTN);
startBTN.addEventListener('click', (startEvent) => {startEvent.target.hidden = true;});


//use the value stored in the nextPlayer variable to indicate who the next player is
let playerText = document.getElementById('next-lbl');
playerText.innerHTML = 'O';


//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   let cList = document.querySelectorAll("td");
   for(i=0;i<cList.length;i++){
       let btn = document.createElement("button");
       btn.innerHTML = "[ ]";
       cList[i].appendChild(btn);
       
   }
}
// Programatically add 'takeCell' as an event listener to all the buttons on the board

let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    let cBtn = event.target;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    cBtn.textContent = '[' + nextPlayer + ']';    
    if (nextPlayer === 'X'){
        nextPlayer = 'O'
    }
    else{
        nextPlayer = 'X';
    }

    let playerText = document.getElementById('next-lbl');
    playerText.innerHTML = nextPlayer;
    
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    event.target.disabled = 'disabled';
    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let label = document.getElementById('game-over-lbl');
        let nH = document.createElement('h1');
        nH.innerText = 'Game Over, the winner is the player which connected 3 symbols in a row, column or diagonal';
        label.appendChild(nH);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   let cButtons = true;
   for(let i = 0;i<btns.length;i++){
       if(!btns[i].disabled){
           cButtons = false;
       }
   }
   return cButtons;
}
