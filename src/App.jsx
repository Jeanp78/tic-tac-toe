import { useState } from 'react'
import confetti from 'canvas-confetti'
import { gameOver, getWinner } from './utils/board'
import { ModalFinish } from './components/ModalFinish'
import { CurrentTurn } from './components/CurrentTurn'
import { Board } from './components/Board'
import { ModalCharacters } from './components/ModalCharacters'
import { resetGameStorage, saveCharacters, saveGame } from './utils/saveGame'
import { Footer } from './components/Footer'
import { getBoard, getPlayerOne, getPlayerTwo, getTurn } from './utils/getters'

// prettier-ignore
function App () {
  const [winner, setWinner] = useState(null)
  const [board, setBoard] = useState(getBoard)
  const [open, setOpen] = useState(false)
  const [players, setPlayers] = useState({
    playerOne: getPlayerOne(),
    playerTwo: getPlayerTwo()
  })
  const [turn, setTurn] = useState(getTurn())

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const [winnerSound, tapSound] = document.querySelectorAll('audio')
    tapSound.play()
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === players.playerOne ? players.playerTwo : players.playerOne
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

  const handleCharacters = (event) => {
    event.preventDefault()
    const [playerOne, playerTwo] = event.target.form
    setPlayers({
      playerOne: playerOne.value,
      playerTwo: playerTwo.value
    })
    setTurn(playerOne.value)
    saveCharacters({ playerOne: playerOne.value, playerTwo: playerTwo.value })
    resetGame()
    handleModal()
  }

  const handleModal = () => {
    setOpen(!open)
  }

  return (
    <>
      <main className='board'>
        <h1>Tic tac toe</h1>
        <button onClick={resetGame}>Restaurar juego</button>
        <button onClick={handleModal}>Cambiar personajes</button>
        <Board board={board} updateBoard={updateBoard} />
        <CurrentTurn turn={turn} playerOne={players.playerOne} playerTwo={players.playerTwo} />
        <ModalFinish winner={winner} resetGame={resetGame} />
        <ModalCharacters players={players} handleModal={handleModal} open={open} handleCharacters={handleCharacters} />
        <audio src='winner-sound.mp3' hidden />
        <audio src='tap.mp3' hidden />
      </main>
      <Footer />
    </>
  )
}

export default App
