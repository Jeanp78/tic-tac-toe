import { availableCharacteres } from '../constants'

export const ModalCharacters = ({ setOpen, open, handlePlayerOne, handlePlayerTwo, playerOne, playerTwo }) => {
  if (!open) return
  const checkEquals = (el, otherPlayer) => {
    return el === otherPlayer
  }
  return (
    <section className='winner'>
      <div className='text'>
        <h2>Cambiar Caracteres</h2>
        <header className='character-inputs-container'>
          <select className='character-select' onChange={handlePlayerOne} defaultValue={playerOne}>
            <option hidden value={playerOne}>
              {playerOne}
            </option>
            {availableCharacteres.map((el, index) => {
              return (
                <option key={index} className='character-option' hidden={checkEquals(el, playerTwo)} value={el}>
                  {el}
                </option>
              )
            })}
          </select>
          <select className='character-select' onChange={handlePlayerTwo} defaultValue={playerOne}>
            <option hidden value={playerOne}>
              {playerTwo}
            </option>
            {availableCharacteres.map((el, index) => {
              return (
                <option key={index + 10} className='character-option' hidden={checkEquals(el, playerOne)} value={el}>
                  {el}
                </option>
              )
            })}
          </select>
        </header>
        <footer>
          <button onClick={() => { setOpen(false) }}>
            Cerrar
          </button>
        </footer>
      </div>
    </section>
  )
}
