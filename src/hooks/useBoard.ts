import { useState } from 'react'
import { PLAYERS } from '../data/const'
import { checkWinner, checkDraw } from '../utils/board'

export function useBoard () {
  const [board, setBoard] = useState<Board>(Array(9).fill(null))
  const [turn, setTurn] = useState(PLAYERS.X)
  const [winner, setWinner] = useState<string | null | false>(null)

  const updateBoard = (index: number) =>  {
    if (board[index] || winner) return

    const updatedBoard = [...board]
    updatedBoard[index] = turn
    setBoard(updatedBoard)

    const newTurn = turn === PLAYERS.X ? PLAYERS.O : PLAYERS.X
    setTurn(newTurn)

    const isThereWinner = checkWinner(updatedBoard)

    if (isThereWinner) {
      setWinner(isThereWinner)
    } else if (checkDraw(updatedBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(PLAYERS.X)
    setWinner(null)
  }

  return { winner, turn, board, resetGame, updateBoard }
}