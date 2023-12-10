import { WINNER_COMBOS } from "../data/const"

export const checkWinner = (boardToCheck: Board) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo

    if (
      boardToCheck[a] && 
      boardToCheck[a] === boardToCheck[b] && 
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
}

export const checkDraw = (boardToCheck: Board) => (
  boardToCheck.every((square) => square !== null)
)