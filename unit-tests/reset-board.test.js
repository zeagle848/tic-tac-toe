import { updateBoard, resetBoard, getAllTiles } from '../src/state/game-board';

test('Can reset board', () => {
    resetBoard();

    updateBoard({ tilePosition: 'top-left-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'bottom-left-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'middle-left-tile', turn: 'noughts' });
    updateBoard({ tilePosition: 'top-right-tile', turn: 'noughts' });

    expect(getAllTiles().every((row) => row.some((tile) => tile.mark !== 'none'))).toBe(true);

    resetBoard();

    expect(getAllTiles().every((row) => row.every((tile) => tile.mark === 'none'))).toBe(true);
});
