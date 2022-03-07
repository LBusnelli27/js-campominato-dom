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
    const bombs = genBombs(16, nBox);
    console.log(bombs);

    let points = 0;

    for(let i = 0; i < nBox; i++) {
        const currentSquare = createGridSquare();
        currentSquare.innerHTML = `${i + 1}`;

        

        currentSquare.addEventListener('click', function() {
            if(!bombs.includes(i + 1)) {
                currentSquare.classList.add('clicked');
                points++;
            } else {
                currentSquare.classList.add('clicked-bomb');
                endGamePhrase.innerHTML = `Hai perso. Il tuo punteggio: ${points}`
            }
        })

        playGround.appendChild(currentSquare);
    }
}

/**
 * This function reset the play ground
 */
function resetNewGame() {
    document.getElementById('my-play-ground').innerHTML = "";
    endGamePhrase.innerHTML = "";
}

/**
 * 
 * @param {*} bombs Number of bombs
 * @param {*} numberMaxCells Total namber of cells
 * @returns Array of numbers (bombs)
 */
function genBombs(bombs, numberMaxCells) {
    const bombsArray = [];

    for(let i = 0; i < bombs; i++) {
        bombsArray.push(generateUniqueRandomNumber(bombsArray, 1, numberMaxCells));
    }

    return bombsArray;
}

/**
 * This function generate unique number so it don't generate a number twice
 * 
 * @param {*} numsBlacklist The blacklist of numbers to check
 * @param {*} min Minimum value
 * @param {*} max Maximum value
 * @returns A random generated integer which is not present in the blacklist
 */
function generateUniqueRandomNumber( numsBlacklist, min, max){
    let check = false;
    let randomInt;

    while ( !check ){
        randomInt  =  Math.floor(Math.random() * ((max + 1) - min) + min);
        if ( !numsBlacklist.includes(randomInt)  ){
            check = true;
        }
    }

    return randomInt;
}

// ********** END FUNCTION **********


const playGround = document.getElementById('my-play-ground');

const endGamePhrase = document.getElementById('points-end');

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