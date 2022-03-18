import './style.css';
import {
    elementsToBlur,
    alertElement,
    tiles,
    beginGame,
    changeTurn,
    checkGameState,
    getCurrentPlayer,
} from './state/game';
import { updateBoard } from './state/game-board';

alertElement.addEventListener('click', () => {
    alertElement.classList.remove('alert-wrapper-visible');
    elementsToBlur.forEach((element) => {
        element.classList.remove('blurred-element');
    });
    beginGame();
});

tiles.forEach((tile) => {
    tile.addEventListener('click', (event) => {
        if (tile.textContent !== '') {
            return;
        }
        const currentPlayer = getCurrentPlayer();
        const selectedTile = event.target.id;
        tile.textContent = currentPlayer.character;
        updateBoard({ tilePosition: selectedTile, turn: currentPlayer.name });
        checkGameState();
        changeTurn();
    });
});

beginGame();
