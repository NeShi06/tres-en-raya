import RestartBtn from "./RestartBtn"
import Square from "./Square"

function ResultsModal({ winner, reset }: ResultsProps) {
  if (winner === null) return null

  const winnerText = winner === false ? "Hubo un empate" : "El ganador es:"

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>
        
        <footer>
          <RestartBtn title="¿Empezar de nuevo?" reset={reset} />
        </footer>
      </div>
    </section>
  )
}

export default ResultsModal