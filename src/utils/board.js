import { POSSIBLE_WINNER } from '../constants'

export const getWinner = (copyBoard, turn) => {
  return POSSIBLE_WINNER.some(
    ([one, two, three]) =>
      copyBoard[one] === turn &&
      copyBoard[two] === turn &&
      copyBoard[three] === turn
  )
}

export const gameOver = (newBoard) => {
  return newBoard.every((el) => el !== null)
}
