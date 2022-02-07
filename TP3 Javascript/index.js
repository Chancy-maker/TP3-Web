

//
const globalGame = document.getElementById('game_selection');
//
const game1 = document.getElementById('game1');
//
const game2 = document.getElementById('game2');
//
const inputRestartButton = document.getElementById('restart_button1'); 
//

var computer_number;
//
const tryButton = document.getElementById('try_button');

//
const playerInput = document.getElementById('player_input');

const startGame1 = document.getElementById('start_game1');
console.log(startGame1);

const message1 = document.getElementById('message1');
new_game();
/**
 * 
 */
const start_player_guess_game = () => {
     computer_number = Math.floor(Math.random() *(100-0)+0);
    hide(globalGame);
    show(game1);
    hide(inputRestartButton);
    hide(game2);
}

/**
 * 
 * @param {*} element 
 */
function show(element) {
    element.style.display = '';
}

/**
 * 
 * @param {*} element 
 */
function hide(element) {
    element.style.display = 'none';
}

/**
 * 
 */
function new_game() { // fonction qui montre l’ ́ecran de s ́election du mode de jeu
    show(globalGame);
    hide(game1);
    hide(game2);
}

//
globalGame.addEventListener('click', start_player_guess_game);

tryButton.addEventListener('click', ()=>{
    const valeurRecuperer = parseInt(playerInput.value);
    if(valeurRecuperer < computer_number){
        message1.innerText = "Non , c'est plus grand"
    }
    if(valeurRecuperer > computer_number){
        message1.innerText = "non , c'est plus petit"
    }
    if(valeurRecuperer == computer_number){
        message1.innerText = "Bravo"
        show(inputRestartButton)
    }
    playerInput.innerText ='';
    console.log(computer_number)
})
inputRestartButton.addEventListener('click',new_game)
startGame1.addEventListener('click', start_player_guess_game)




