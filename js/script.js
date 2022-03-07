// ********** FUNCTION **********

/**
 * This function create a div with a class
 * 
 * @returns A div with class my-col
 */
function createGridSquare() {
    const currentElement = document.createElement('div')
    currentElement.classList.add('my-col')
    
    return currentElement;
}

/**
 * This function create n. boxes and add an eventListener
 * 
 * @param {*} nBox Number of boxes generated
 */
function createCol(nBox) {
    for(let i = 0; i < nBox; i++) {
        const currentSquare = createGridSquare();
        currentSquare.innerHTML = `${i + 1}`
        
        currentSquare.addEventListener('click', function() {
            this.classList.add('clicked')
        })
        
        playGround.appendChild(currentSquare);
    }
}

/**
 * This function reset the play ground
 */
function resetNewGame() {
    document.getElementById('my-play-ground').innerHTML = "";
}

// ********** END FUNCTION **********


const playGround = document.getElementById('my-play-ground');

const playBtn = document.getElementById('play-button');
playBtn.addEventListener('click', function() {
    console.log('Stai cliccando il bottone play!');
    const difficultyChoise = document.getElementById('inputGroupSelect');
    if (difficultyChoise.value == 1) {
        createCol(100);
    } else if (difficultyChoise.value == 2) {
        createCol(80);
    } else if (difficultyChoise.value == 3) {
        createCol(50);
    } else {
        console.warn('Non hai creato un bel nulla!!!')
    }
})


const resetBtn = document.getElementById('reset-button');
resetBtn.addEventListener('click', function() {
    resetNewGame();
})