import { resetBoard, updateBoard, getAllTiles } from '../src/state/game-board';
import { checkDraw, checkGameState } from '../src/state/game';

beforeEach(() => {
    resetBoard();
});

afterEach(() => {
    resetBoard();
});

test('Can check for draw', () => {
    updateBoard({ tilePosition: 'top-left-tile', turn: 'crosses' });
    updateBoard({ tilePosition: 'top-center-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'top-right-tile', turn: 'crosses' });
    updateBoard({ tilePosition: 'middle-center-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'middle-right-tile', turn: 'crosses' });
    updateBoard({ tilePosition: 'middle-left-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'bottom-center-tile', turn: 'crosses' });
    updateBoard({ tilePosition: 'bottom-right-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'bottom-left-tile', turn: 'crosses' });

    expect(checkDraw()).toBe(true);
});

test('Can check win by row', () => {
    updateBoard({ tilePosition: 'top-left-tile', turn: 'crosses' });
    updateBoard({ tilePosition: 'bottom-center-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'top-right-tile', turn: 'crosses' });
    updateBoard({ tilePosition: 'middle-left-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'top-center-tile', turn: 'crosses' });

    expect(checkGameState()).toBe('crosses');
});

test('Can check win by column', () => {
    updateBoard({ tilePosition: 'top-center-tile', turn: 'crosses' });
    updateBoard({ tilePosition: 'top-left-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'top-right-tile', turn: 'crosses' });
    updateBoard({ tilePosition: 'middle-left-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'middle-center-tile', turn: 'crosses' });
    updateBoard({ tilePosition: 'bottom-left-tile', turn: 'noughts' });

    expect(checkGameState()).toBe('noughts');
});

test('Can check win by diagonal', () => {
    updateBoard({ tilePosition: 'top-left-tile', turn: 'crosses' });
    updateBoard({ tilePosition: 'top-right-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'top-center-tile', turn: 'crosses' });
    updateBoard({ tilePosition: 'middle-center-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'middle-left-tile', turn: 'crosses' });
    updateBoard({ tilePosition: 'bottom-left-tile', turn: 'noughts' });

    expect(checkGameState()).toBe('noughts');
});
