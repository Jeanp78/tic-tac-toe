export const saveGame = ({ board, turn }) => {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', JSON.stringify(turn))
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

export const saveCharacters = ({ pOne, pTwo }) => {
  if (pOne) window.localStorage.setItem('pOne', JSON.stringify(pOne))
  if (pTwo) window.localStorage.setItem('pTwo', JSON.stringify(pTwo))
}
