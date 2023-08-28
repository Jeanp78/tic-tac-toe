export const getBoard = () => {
  return JSON.parse(window.localStorage.getItem('board')) || Array(9).fill(null)
}

export const getPlayerOne = () => {
  return JSON.parse(window.localStorage.getItem('playerOne')) || '✖️'
}

export const getPlayerTwo = () => {
  return JSON.parse(window.localStorage.getItem('playerTwo')) || '⭕'
}

export const getTurn = () => {
  return JSON.parse(window.localStorage.getItem('turn')) || getPlayerOne()
}
