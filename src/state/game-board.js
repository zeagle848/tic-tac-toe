let gameBoardTiles = [[], [], []];

function tile({ position, mark }) {
    return {
        position,
        mark,
    };
}

export function getAllTiles() {
    return gameBoardTiles;
}

export function resetBoard() {
    gameBoardTiles = [[], [], []];

    gameBoardTiles[0].push(tile({ position: 'top-left', mark: 'none' }));
    gameBoardTiles[0].push(tile({ position: 'top-center', mark: 'none' }));
    gameBoardTiles[0].push(tile({ position: 'top-right', mark: 'none' }));

    gameBoardTiles[1].push(tile({ position: 'middle-left', mark: 'none' }));
    gameBoardTiles[1].push(tile({ position: 'middle-center', mark: 'none' }));
    gameBoardTiles[1].push(tile({ position: 'middle-right', mark: 'none' }));

    gameBoardTiles[2].push(tile({ position: 'bottom-left', mark: 'none' }));
    gameBoardTiles[2].push(tile({ position: 'bottom-center', mark: 'none' }));
    gameBoardTiles[2].push(tile({ position: 'bottom-right', mark: 'none' }));
}

export function updateBoard({ tilePosition, turn }) {
    switch (tilePosition) {
        case 'top-left-tile':
            gameBoardTiles[0][0].mark = `${turn}`;
            break;
        case 'top-center-tile':
            gameBoardTiles[0][1].mark = `${turn}`;
            break;
        case 'top-right-tile':
            gameBoardTiles[0][2].mark = `${turn}`;
            break;
        case 'middle-left-tile':
            gameBoardTiles[1][0].mark = `${turn}`;
            break;
        case 'middle-center-tile':
            gameBoardTiles[1][1].mark = `${turn}`;
            break;
        case 'middle-right-tile':
            gameBoardTiles[1][2].mark = `${turn}`;
            break;
        case 'bottom-left-tile':
            gameBoardTiles[2][0].mark = `${turn}`;
            break;
        case 'bottom-center-tile':
            gameBoardTiles[2][1].mark = `${turn}`;
            break;
        case 'bottom-right-tile':
            gameBoardTiles[2][2].mark = `${turn}`;
            break;
    }
}
