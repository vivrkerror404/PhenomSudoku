const { InsertElement } = require("../utils/insertElement");
const { SuggestMove } = require("../utils/suggestMove");

let invalidCounter; //advanced part
let sudokuGrid;

function startGame(req, res) {
  const { gameState } = req.body;
  let status, response;
  if (gameState?.toLowerCase() === "start") {
    sudokuGrid = Array(9).fill(Array(9).fill(0));
    invalidCounter = 0;
    status = 200;
    response = { success: 1, message: "READY" };
  } else {
    status = 400;
    response = { success: 0, message: "INVALID REQUEST" };
  }
  res.status(status);
  res.json(response);
}

function moveElementInSudoku(req, res) {
  const { row, col, element } = req.body;
  let suggestions;
  let response = "INVALID",
    status = 400;
  const { success, grid, message } = InsertElement(
    sudokuGrid,
    row,
    col,
    element
  );
  if (success === 1) {
    sudokuGrid = grid;
    status = 200;
    response = "VALID";
    invalidCounter = 0;
  }else{
    invalidCounter++;
  }
  if(invalidCounter > 3){
     const data = SuggestMove(sudokuGrid)
     suggestions = data
  }
  res.status(status);
  res.json({ response, message, sudokuGrid, suggestions });
}

module.exports = { startGame, moveElementInSudoku };
