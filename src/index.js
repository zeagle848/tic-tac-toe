import "./style.css";
const tiles = document.querySelectorAll(".tile");

const elementsToBlur = [];
elementsToBlur.push(document.querySelector(".header"));
elementsToBlur.push(document.querySelector(".board-wrapper"));
elementsToBlur.push(document.querySelector(".footer"));

const alertElement = document.querySelector(".alert-wrapper");
const alertHeader = document.querySelector(".alert-header");

const turnHeader = document.querySelector(".turn-header");

alertElement.addEventListener("click", () => {
  alertElement.classList.remove("alert-wrapper-visible");
  elementsToBlur.forEach((element) => {
    element.classList.remove("blurred-element");
  });
  game.beginGame();
});

tiles.forEach((tile) => {
  tile.addEventListener("click", (event) => {
    if (tile.textContent !== "") {
      return;
    }
    const currentPlayer = game.getCurrentPlayer();
    const selectedTile = event.target.id;
    tile.textContent = currentPlayer.character;
    gameBoard.updateBoard(selectedTile, currentPlayer.name);
    game.checkGameState();
    game.changeTurn();
  });
});

const game = (() => {
  let _currentPlayerIndex;

  const _players = [
    { name: "crosses", character: "X" },
    { name: "noughts", character: "O" },
  ];

  function checkDraw() {
    const allTiles = gameBoard.getAllTiles();
    return allTiles.every((row) => row.every((tile) => tile.mark !== "none"));
  }

  function changeTurn() {
    _currentPlayerIndex = _currentPlayerIndex ? 0 : 1;
    if (getCurrentPlayer().name === "crosses") {
      turnHeader.textContent = "Crosses move";
    } else {
      turnHeader.textContent = "Noughts move";
    }
  }

  function getCurrentPlayer() {
    return _players[_currentPlayerIndex];
  }
  function beginGame() {
    _currentPlayerIndex = 0;
    gameBoard.resetBoard();
    turnHeader.textContent = "Crosses move";
    tiles.forEach((tile) => {
      tile.textContent = "";
    });
  }
  function endGame(winner) {
    alertElement.classList.add("alert-wrapper-visible");
    if (winner === "crosses") {
      alertHeader.textContent = "Crosses have won!";
    } else if (winner === "noughts") {
      alertHeader.textContent = "Noughts have won!";
    } else {
      alertHeader.textContent = "Draw.";
    }
    elementsToBlur.forEach((element) => {
      element.classList.add("blurred-element");
    });
  }

  function checkGameState() {
    const allTiles = gameBoard.getAllTiles();

    if (checkDraw()) {
      //Check the board to see if the game is a draw
      endGame("draw");
    }

    for (let i = 0; i < 3; i++) {
      let startTile = allTiles[i][0];
      let isGameWon = true;
      for (let j = 0; j < 3; j++) {
        const cell = allTiles[i][j];
        if (cell.mark !== startTile.mark || startTile.mark === "none") {
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
        if (cell.mark !== startTile.mark || startTile.mark === "none") {
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
      allTiles[2][2].mark !== "none"
    ) {
      endGame(allTiles[0][0].mark);
    }
    if (
      allTiles[0][2].mark === allTiles[1][1].mark &&
      allTiles[0][2].mark === allTiles[2][0].mark &&
      allTiles[0][2].mark !== "none"
    ) {
      endGame(allTiles[0][2].mark);
    }
  }
  return { endGame, beginGame, checkGameState, getCurrentPlayer, changeTurn };
})();

const gameBoard = (() => {
  let _gameBoardTiles = [[], [], []];

  function _tile(position, mark) {
    return { position, mark };
  }

  function getAllTiles() {
    return _gameBoardTiles;
  }

  function resetBoard() {
    _gameBoardTiles = [[], [], []];

    _gameBoardTiles[0].push(_tile("top-left", "none"));
    _gameBoardTiles[0].push(_tile("top-center", "none"));
    _gameBoardTiles[0].push(_tile("top-right", "none"));

    _gameBoardTiles[1].push(_tile("middle-left", "none"));
    _gameBoardTiles[1].push(_tile("middle-center", "none"));
    _gameBoardTiles[1].push(_tile("middle-right", "none"));

    _gameBoardTiles[2].push(_tile("bottom-left", "none"));
    _gameBoardTiles[2].push(_tile("bottom-center", "none"));
    _gameBoardTiles[2].push(_tile("bottom-right", "none"));
  }

  function updateBoard(tilePosition, turn) {
    switch (tilePosition) {
      case "top-left-tile":
        _gameBoardTiles[0][0].mark = `${turn}`;
        break;
      case "top-center-tile":
        _gameBoardTiles[0][1].mark = `${turn}`;
        break;
      case "top-right-tile":
        _gameBoardTiles[0][2].mark = `${turn}`;
        break;
      case "middle-left-tile":
        _gameBoardTiles[1][0].mark = `${turn}`;
        break;
      case "middle-center-tile":
        _gameBoardTiles[1][1].mark = `${turn}`;
        break;
      case "middle-right-tile":
        _gameBoardTiles[1][2].mark = `${turn}`;
        break;
      case "bottom-left-tile":
        _gameBoardTiles[2][0].mark = `${turn}`;
        break;
      case "bottom-center-tile":
        _gameBoardTiles[2][1].mark = `${turn}`;
        break;
      case "bottom-right-tile":
        _gameBoardTiles[2][2].mark = `${turn}`;
        break;
    }
  }

  return {
    resetBoard,
    updateBoard,
    getAllTiles,
  };
})();

game.beginGame();
