function SuggestMove(grid) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValidMove(grid, row, col, num)) {
              return { suggestionAI: 1, message: "Suggested move", suggestedRow: row, suggestedCol: col, num };
            }
          }
        }
      }
    }
  
    return { suggestionAI: 0, message: "No suggested move available" };
  }
  
  function isValidMove(grid, row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === num || grid[i][col] === num) {
        return false;
      }
  
      const boxStartRow = Math.floor(row / 3) * 3;
      const boxStartCol = Math.floor(col / 3) * 3;
      if (grid[boxStartRow + Math.floor(i / 3)][boxStartCol + (i % 3)] === num) {
        return false;
      }
    }
  
    return true;
  }
  
  module.exports = { SuggestMove };
  