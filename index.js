const square = document.querySelectorAll('.box')
const playerX = document.querySelector('.currentplayerx')
const playerO = document.querySelector('.currentplayero')
const winnner = document.querySelector('.winningPlayer')
const popUp = document.querySelector('.restartPopUp')
const restart = document.querySelector('.restartButton')

let options= ['','','','','','','','','']
let currentPlayer = 'X'
let tie = false
const winningNumbers = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

startGame()
function startGame(){
    square.forEach(square => square.addEventListener('click', squareClicked))
    playerColor()
}

function playerColor(){
    if (currentPlayer == 'X'){
        playerX.style.backgroundColor = '#fd2c5c';
        playerO.style.backgroundColor = '#222832';
    }else{
        playerX.style.backgroundColor = '#222832';
        playerO.style.backgroundColor = '#fd2c5c';
    }
}

function squareClicked(){
    if(this.textContent == ''){
        const itemindex = this.getAttribute('itemindex')
        update(this, itemindex);
        switchPlayers()
    }
}

function switchPlayers(){
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X'
    playerColor()

}

function update(square, itemindex){
    options[itemindex] = currentPlayer
    square.textContent = currentPlayer;
    winOrNot()
}

function restarting(){
    square.forEach(square => square.textContent='')
    options= ['','','','','','','','','']
    popUp.style.visibility = 'hidden'
}


function winOrNot(){
    for(let i=0; i<winningNumbers.length; i++){
        let check1 = options[winningNumbers[i][0]]
        let check2 = options[winningNumbers[i][1]]
        let check3 = options[winningNumbers[i][2]]

        if(check1 == check2 && check1 == check3 && check1 != ''){
            winnner.textContent = currentPlayer;
            restart.addEventListener('click', restarting)
            popUp.style.visibility = 'visible'

        }else if(!options.includes('')){
            winnner.textContent = 'No one';
            restart.addEventListener('click', restarting)
            popUp.style.visibility = 'visible'        }

    }
}