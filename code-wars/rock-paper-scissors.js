/**
 * Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.
Examples(Input1, Input2 --> Output):
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
 * @param {*} p1 - player 1
 * @param {*} p2 - player 2
 * @returns draw, p1, or p2 won
 */
const rps = (p1, p2) => {
    result = "";
    if (p1 === p2) {
        return "Draw!"
    } else if (p1 === "rock") {
        result = (p2 === "paper") ? "Player 2 won!" : "Player 1 won!";
    } else if (p1 === "paper") {
        result = (p2 === "scissors") ? "Player 2 won!" : "Player 1 won!";
    } else {
        result = (p2 === "rock") ? "Player 2 won!" : "Player 1 won!";
    }
    return result;
};