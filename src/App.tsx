import './App.css'
import { useBoard } from './hooks/useBoard'
import { PLAYERS } from './data/const'
import Square from './components/Square'
import ResultsModal from './components/ResultsModal'
import RestartBtn from './components/RestartBtn'

function App() {
  const { winner, turn, board, resetGame, updateBoard } = useBoard()

  return (
    <main className='board'>
      <h1>Tres en raya</h1>

      <RestartBtn title="Reiniciar" reset={resetGame} />

      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} update={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === PLAYERS.X}>
          {PLAYERS.X}
        </Square>
        <Square isSelected={turn === PLAYERS.O}>
          {PLAYERS.O}
        </Square>
      </section>

      <ResultsModal winner={winner} reset={resetGame} />

      <h6>Frank Contreras</h6>
    </main>
  )
}

export default App
