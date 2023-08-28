export const saveGame = ({ board, turn }) => {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', JSON.stringify(turn))
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

export const saveCharacters = ({ playerOne, playerTwo }) => {
  if (playerOne) window.localStorage.setItem('playerOne', JSON.stringify(playerOne))
  if (playerTwo) window.localStorage.setItem('playerTwo', JSON.stringify(playerTwo))
}
