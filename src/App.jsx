import { useState } from 'react'
import confetti from 'canvas-confetti'
import { gameOver, getWinner } from './utils/board'
import { ModalFinish } from './components/ModalFinish'
import { CurrentTurn } from './components/CurrentTurn'
import { Board } from './components/Board'
import { ModalCharacters } from './components/ModalCharacters'
import { resetGameStorage, saveCharacters, saveGame } from './utils/saveGame'
import { Footer } from './components/Footer'

// prettier-ignore
function App () {
  const [winner, setWinner] = useState(null)
  const [board, setBoard] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('board')) || Array(9).fill(null)
  )
  const [open, setOpen] = useState(false)
  const [playerOne, setPlayerOne] = useState(
    () => JSON.parse(window.localStorage.getItem('pOne')) || '✖️'
  )
  const [playerTwo, setPlayerTwo] = useState(
    () => JSON.parse(window.localStorage.getItem('pTwo')) || '⭕'
  )
  const [turn, setTurn] = useState(
    JSON.parse(window.localStorage.getItem('turn')) || playerOne
  )

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const [winnerSound, tapSound] = document.querySelectorAll('audio')
    tapSound.play()
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === playerOne ? playerTwo : playerOne
    saveGame({ board: newBoard, turn: newTurn })
    setTurn(newTurn)
    if (getWinner(newBoard, turn)) {
      winnerSound.play()
      resetGameStorage()
      const newWinner = turn
      setWinner(newWinner)
      confetti({ particleCount: 300, spread: 100 })
    } else if (gameOver(newBoard)) {
      setWinner(false)
      resetGameStorage()
    }
  }

  const resetGame = () => {
    setWinner(null)
    setBoard(Array(9).fill(null))
    resetGameStorage()
  }

  const handlePlayerOne = ({ target }) => {
    setTurn(target.value)
    setPlayerOne(target.value)
    saveCharacters({ pOne: target.value })
    resetGame()
  }

  const handlePlayerTwo = ({ target }) => {
    setPlayerTwo(target.value)
    saveCharacters({ pTwo: target.value })
    resetGame()
  }

  return (
    <>
      <main className='board'>
        <h1>Tic tac toe</h1>
        <button onClick={resetGame}>Restaurar juego</button>
        <button onClick={() => setOpen(!open)}>Cambiar personajes</button>
        <Board board={board} updateBoard={updateBoard} />
        <CurrentTurn turn={turn} playerOne={playerOne} playerTwo={playerTwo} />
        <ModalFinish winner={winner} resetGame={resetGame} />
        <ModalCharacters setOpen={setOpen} open={open} handlePlayerOne={handlePlayerOne} handlePlayerTwo={handlePlayerTwo} playerOne={playerOne} playerTwo={playerTwo} />
        <audio src='winner-sound.mp3' hidden />
        <audio src='tap.mp3' hidden />
      </main>
      <Footer />
    </>
  )
}

export default App
