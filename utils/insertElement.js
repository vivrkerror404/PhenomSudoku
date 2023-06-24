function InsertElement(grid, row, col, element) {
  try {
    grid = JSON.parse(JSON.stringify(grid));
    if (element < 1 || element > 9) {
      return { success: 0, message: "Invalid element" };
    }

    if (grid[row][col] !== 0) {
      return { success: 0, message: "Position already contains an element" };
    }

    const boxStartRow = Math.floor(row / 3) * 3;
    const boxStartCol = Math.floor(col / 3) * 3;

    for (let i = boxStartRow; i < boxStartRow + 3; i++) {
      for (let j = boxStartCol; j < boxStartCol + 3; j++) {
        if (i !== row || j !== col) {
          // Skip check for the current element position
          if (grid[i][j] === element) {
            return {
              success: 0,
              message: "Element already exists in the 3x3 grid",
            };
          }
        }
      }
    }

    grid[row][col] = element;
    return { success: 1, message: "Element inserted successfully!", grid };
  } catch (e) {
    return { success: 0, message: "Please start the game first" };
  }
}

module.exports = { InsertElement };
