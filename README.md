# Restaurant Page

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Development Notes](#development-notes)
- [Testing](#testing)

## Introduction

This Tic-Tac-Toe application was created as part of a project assigned within the open-source web development course The Odin Project (TOP). The link to the assignment page can be found [here](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/tic-tac-toe).

## Getting Started

Before we can start the live server we must first make sure that Node.js is installed. Check by opening your console and running `node -v`. If you can't see a version number you must install Node.js. 

To view the app locally you can begin by installing the dependencies...

`npm install`

...and then start by running:

`npm run serve`.

The application should be live on `http://localhost:8080/` if it doesn't open automatically.

## Development Notes

This application is one of the more simple apps I've developed as a part of TOP. One area of interest lies within checking the game state. The game board itself is a 3x3 2D array. Thus to check the game state we need to have two sets of two for loops to iterate over each tile. First we check each row to see if a player has won, then we check each column and finally we check the diagonals. The code for checking each column is functionally the same as the code for checking each row. The difference being that we switch the indexing. For checking the row we check each cell against the first cell in the row, `let startTile = allTiles[i][0];`, by fetching the cell from the 2D array using `const cell = allTiles[i][j];`(where `i` is the row number and `j` is the column number). The logic for checking wins in each column is the same except the code to get each starting cell is `let startTile = allTiles[0][i];` and we get each subsequent tile by writing `const cell = allTiles[j][i];`.

As an aside I initially thought I could simply check for a column win by transposing a _copy_ of my 2D array and then iterate through each cell in the exact same way I did for the row check. This was before I knew that arrays in JavaScript are reference values. So unbeknownst to me I was transposing the cloned array and the original array. Or rather they were all one array. Thus I ended up simply changing the logic to check for column wins.

## Testing

To run the testing environment we need to deploy the application first. The process is the same as what was outlined in the Getting Started section. We begin by making sure all the dependencies are installed by running `nmp install` in the console and then run the dev server by running `npm run serve`. 

Once the dev server is up and running we simply run `npm run e2e` and cypress should open a window where you run the tests by clicking the `sample_spec.js` file in the same window.
