# Sudoku Game API

This API provides endpoints to play a game of Sudoku. It allows users to start a game, insert elements into the Sudoku grid, and receive suggestions after three consecutive unsuccessful trials.

## Code Structure

The codebase follows the following structure:

- `routes`: Contains API endpoints and handler function import statements.
- `handlers`: Contains functions to handle requests and return the desired responses.
- `utils`: Contains utility functions for inserting elements in a Sudoku grid and giving suggestions to the user.

## API Endpoints

### Start Game

- URL: `/`
- Method: `POST`
- Description: Initializes the Sudoku grid with zeros and sets the invalid counter to zero.
- Returns: No data returned.

### Insert Element

- URL: `/move`
- Method: `POST`
- Description: Inserts an element into the Sudoku grid and checks its validity based on three conditions:
  1. The element is between 1 and 9 (inclusive).
  2. No element is already present in the same row or column.
  3. The same element is not present in the 3x3 grid of the Sudoku.
- Returns: No data returned.

### API Documentation

The API documentation, including the Postman collection, can be found at the following URL:

[API Documentation - Postman Collection](https://documenter.getpostman.com/view/19917684/2s93z6dPgx)

## Function Description

### `startGame`

- Endpoint: `/`
- Description: Initializes the Sudoku grid by filling it with zeros and sets the invalid counter to zero.

### `moveElementInSudoku`

- Endpoint: `/move`
- Description: Inserts an element into the Sudoku grid and checks its validity based on three conditions:
  1. The element is between 1 and 9 (inclusive).
  2. No element is already present in the same row or column.
  3. The same element is not present in the 3x3 grid of the Sudoku.
- If the invalid counter exceeds three, the `suggestMove` utility function will be called. The `suggestMove` function has a time complexity of O(9^4) since it iterates through the entire 9x9 grid.

### Utility Functions

The codebase also includes utility functions:

- `insertElement`: Inserts an element into the Sudoku grid.
- `isValidMove`: Checks if a move is valid by verifying that the element is not present in the same row, column, or 3x3 grid of the Sudoku.
- `suggestMove`: Suggests a valid move to the user by checking for the absence of an element in the 3x3 grid of the Sudoku. This function has a time complexity of O(9^4).

Please refer to the code implementation for further details.

## Example Usage

To start a game, make a POST request to `/` endpoint.

To insert an element into the Sudoku grid, make a POST request to `/move` endpoint with the necessary data.

Please refer to the API documentation for the detailed request and response formats.


## GitHub Repository

The source code for this Sudoku Game API is available on GitHub at the following URL:

[GitHub Repository](https://github.com/vivrkerror404/PhenomSudoku)

## How to Run

Follow the steps below to run the Sudoku Game API:

1. Install the dependencies by running the command: `npm install`.

2. Start the server by running the command: `npm start`.

3. The server will start at `http://localhost:3000`.

4. Import the above Postman collection and trigger start and move endpoints




