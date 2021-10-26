const tiles = document.querySelectorAll(".tile");

const elementsToBlur = [];
elementsToBlur.push(document.querySelector(".header"));
elementsToBlur.push(document.querySelector(".board-wrapper"));
elementsToBlur.push(document.querySelector(".footer"));

const alertElement = document.querySelector(".alert-wrapper");
const alertHeader = document.querySelector(".alert-header");

alertElement.addEventListener("click", () => {
  alertElement.classList.remove("alert-wrapper-visible");
  elementsToBlur.forEach((element) => {
    element.classList.remove("blurred-element");
  });
  game.beginGame();
});

tiles.forEach((tile) => {
  tile.addEventListener("click", (event) => {
    if (tile.textContent === "") {
      const currentTurn = game.getTurn();
      const selectedTile = event.target.id;
      if (currentTurn === "crosses") {
        tile.textContent = "X";
        gameBoard.updateBoard(selectedTile, currentTurn);
        game.checkGameState();
        game.changeTurn();
      } else {
        tile.textContent = "O";
        gameBoard.updateBoard(selectedTile, currentTurn);
        game.checkGameState();
        game.changeTurn();
      }
    }
  });
});

const game = (() => {
  let _turn;

  function checkDraw() {
    const allTiles = gameBoard.getAllTiles();
    function checkEmptyTiles(tile) {
      return tile.mark !== "none";
    }
    return allTiles.every(checkEmptyTiles);
  }

  function changeTurn() {
    if (_turn === "crosses") _turn = "noughts";
    else _turn = "crosses";
  }

  function getTurn() {
    return _turn;
  }
  function beginGame() {
    _turn = "crosses";
    gameBoard.resetBoard();
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
    const topRowTiles = gameBoard.getTopRow();
    const middleRowTiles = gameBoard.getMiddleRow();
    const bottomRowTiles = gameBoard.getBottomRow();

    if (checkDraw()) {
      endGame("draw");
    }

    if (
      topRowTiles[0].mark === topRowTiles[1].mark &&
      topRowTiles[0].mark === topRowTiles[2].mark &&
      topRowTiles[0].mark !== "none"
    ) {
      endGame(topRowTiles[0].mark);
    }
    if (
      middleRowTiles[0].mark === middleRowTiles[1].mark &&
      middleRowTiles[0].mark === middleRowTiles[2].mark &&
      middleRowTiles[0].mark !== "none"
    ) {
      endGame(middleRowTiles[0].mark);
    }
    if (
      bottomRowTiles[0].mark === bottomRowTiles[1].mark &&
      bottomRowTiles[0].mark === bottomRowTiles[2].mark &&
      bottomRowTiles[0].mark !== "none"
    ) {
      endGame(bottomRowTiles[0].mark);
    }

    if (
      topRowTiles[0].mark === middleRowTiles[0].mark &&
      topRowTiles[0].mark === bottomRowTiles[0].mark &&
      topRowTiles[0].mark !== "none"
    ) {
      endGame(topRowTiles[0].mark);
    }
    if (
      topRowTiles[1].mark === middleRowTiles[1].mark &&
      topRowTiles[1].mark === bottomRowTiles[1].mark &&
      topRowTiles[1].mark !== "none"
    ) {
      endGame(topRowTiles[1].mark);
    }
    if (
      topRowTiles[2].mark === middleRowTiles[2].mark &&
      topRowTiles[2].mark === bottomRowTiles[2].mark &&
      topRowTiles[2].mark !== "none"
    ) {
      endGame(topRowTiles[2].mark);
    }

    if (
      topRowTiles[0].mark === middleRowTiles[1].mark &&
      topRowTiles[0].mark === bottomRowTiles[2].mark &&
      topRowTiles[0].mark !== "none"
    ) {
      endGame(topRowTiles[0].mark);
    }
    if (
      topRowTiles[2].mark === middleRowTiles[1].mark &&
      topRowTiles[2].mark === bottomRowTiles[0].mark &&
      topRowTiles[2].mark !== "none"
    ) {
      endGame(topRowTiles[2].mark);
    }
  }
  return { endGame, beginGame, checkGameState, getTurn, changeTurn };
})();

const gameBoard = (() => {
  let _topRowTiles = [];
  let _middleRowTiles = [];
  let _bottomRowTiles = [];

  function _tile(position, mark) {
    return { position, mark };
  }

  function getAllTiles() {
    const allTiles = [..._topRowTiles, ..._middleRowTiles, ..._bottomRowTiles];
    return allTiles;
  }

  function getTopRow() {
    return _topRowTiles;
  }

  function getBottomRow() {
    return _bottomRowTiles;
  }

  function getMiddleRow() {
    return _middleRowTiles;
  }

  function resetBoard() {
    _topRowTiles = [];
    _middleRowTiles = [];
    _bottomRowTiles = [];

    _topRowTiles.push(_tile("left", "none"));
    _topRowTiles.push(_tile("center", "none"));
    _topRowTiles.push(_tile("right", "none"));

    _middleRowTiles.push(_tile("left", "none"));
    _middleRowTiles.push(_tile("center", "none"));
    _middleRowTiles.push(_tile("right", "none"));

    _bottomRowTiles.push(_tile("left", "none"));
    _bottomRowTiles.push(_tile("center", "none"));
    _bottomRowTiles.push(_tile("right", "none"));
  }

  function updateBoard(tilePosition, turn) {
    switch (tilePosition) {
      case "top-left-tile":
        _topRowTiles[0].mark = `${turn}`;
        break;
      case "top-center-tile":
        _topRowTiles[1].mark = `${turn}`;
        break;
      case "top-right-tile":
        _topRowTiles[2].mark = `${turn}`;
        break;
      case "middle-left-tile":
        _middleRowTiles[0].mark = `${turn}`;
        break;
      case "middle-center-tile":
        _middleRowTiles[1].mark = `${turn}`;
        break;
      case "middle-right-tile":
        _middleRowTiles[2].mark = `${turn}`;
        break;
      case "bottom-left-tile":
        _bottomRowTiles[0].mark = `${turn}`;
        break;
      case "bottom-center-tile":
        _bottomRowTiles[1].mark = `${turn}`;
        break;
      case "bottom-right-tile":
        _bottomRowTiles[2].mark = `${turn}`;
        break;
    }
  }

  return {
    resetBoard,
    updateBoard,
    getBottomRow,
    getMiddleRow,
    getTopRow,
    getAllTiles,
  };
})();

game.beginGame();
