import { getAllTiles, resetBoard } from './game-board';

let currentPlayerIndex;

const players = [
    { name: 'crosses', character: 'X' },
    { name: 'noughts', character: 'O' },
];

export const tiles = document.querySelectorAll('.tile');
export const alertElement = document.querySelector('.alert-wrapper');
const turnHeader = document.querySelector('.turn-header');
const alertHeader = document.querySelector('.alert-header');

export const elementsToBlur = [
    document.querySelector('.header'),
    document.querySelector('.board-wrapper'),
    document.querySelector('.footer'),
];

export function checkDraw() {
    const allTiles = getAllTiles();
    return allTiles.every((row) => row.every((tile) => tile.mark !== 'none'));
}

export function changeTurn() {
    currentPlayerIndex = currentPlayerIndex ? 0 : 1;
    if (getCurrentPlayer().name === 'crosses') {
        turnHeader.textContent = 'Crosses move';
    } else {
        turnHeader.textContent = 'Noughts move';
    }
}

export function getCurrentPlayer() {
    return players[currentPlayerIndex];
}

export function beginGame() {
    currentPlayerIndex = 0;
    resetBoard();
    turnHeader.textContent = 'Crosses move';
    tiles.forEach((tile) => {
        tile.textContent = '';
    });
}

export function endGame(winner) {
    alertElement.classList.add('alert-wrapper-visible');
    if (winner === 'crosses') {
        alertHeader.textContent = 'Crosses have won!';
    } else if (winner === 'noughts') {
        alertHeader.textContent = 'Noughts have won!';
    } else {
        alertHeader.textContent = 'Draw.';
    }
    elementsToBlur.forEach((element) => {
        element.classList.add('blurred-element');
    });
}

export function checkGameState() {
    const allTiles = getAllTiles();

    if (checkDraw()) {
        endGame('draw');
    }

    for (let i = 0; i < 3; i++) {
        let startTile = allTiles[i][0];
        let isGameWon = true;
        for (let j = 0; j < 3; j++) {
            const cell = allTiles[i][j];
            if (cell.mark !== startTile.mark || startTile.mark === 'none') {
                isGameWon = false;
            }
        }
        if (isGameWon) {
            endGame(startTile.mark);
            return;
        }
    }

    for (let i = 0; i < 3; i++) {
        let startTile = allTiles[0][i];
        let isGameWon = true;
        for (let j = 0; j < 3; j++) {
            const cell = allTiles[j][i];
            if (cell.mark !== startTile.mark || startTile.mark === 'none') {
                isGameWon = false;
            }
        }
        if (isGameWon) {
            endGame(startTile.mark);
            return;
        }
    }

    if (
        allTiles[0][0].mark === allTiles[1][1].mark &&
        allTiles[0][0].mark === allTiles[2][2].mark &&
        allTiles[2][2].mark !== 'none'
    ) {
        endGame(allTiles[0][0].mark);
    }
    if (
        allTiles[0][2].mark === allTiles[1][1].mark &&
        allTiles[0][2].mark === allTiles[2][0].mark &&
        allTiles[0][2].mark !== 'none'
    ) {
        endGame(allTiles[0][2].mark);
    }
}
