import { useState } from 'react'
import { availableCharacteres } from '../constants'

export const ModalCharacters = ({ handleModal, open, handleCharacters, players }) => {
  if (!open) return

  const [charactersSelected, setCharactersSelected] = useState({
    characterSelectedOne: players.playerOne,
    characterSelectedTwo: players.playerTwo
  })

  const handleCharactersSelected = (event) => {
    const [characterSelectedOne, characterSelectedTwo] = event.target.form
    setCharactersSelected({
      characterSelectedOne: characterSelectedOne.value,
      characterSelectedTwo: characterSelectedTwo.value
    })
  }

  return (
    <section className='winner'>
      <div className='text'>
        <h2>Cambiar Caracteres</h2>
        <form>
          <header className='character-inputs-container'>
            <select onChange={handleCharactersSelected} className='character-select' defaultValue={players.playerOne}>
              <option hidden value={players.playerOne}>
                {players.playerOne}
              </option>
              {availableCharacteres.map((el, index) => {
                return (
                  <option key={index} className='character-option' hidden={el === charactersSelected.characterSelectedTwo} value={el}>
                    {el}
                  </option>
                )
              })}
            </select>
            <select onChange={handleCharactersSelected} className='character-select' defaultValue={players.playerTwo}>
              <option hidden value={players.playerTwo}>
                {players.playerTwo}
              </option>
              {availableCharacteres.map((el, index) => {
                return (
                  <option key={index + 10} className='character-option' hidden={el === charactersSelected.characterSelectedOne} value={el}>
                    {el}
                  </option>
                )
              })}
            </select>
          </header>
          <footer>
            <button onClick={handleCharacters}>
              Actualizar
            </button>
            <button onClick={handleModal}>
              Cerrar
            </button>
          </footer>
        </form>
      </div>
    </section>
  )
}
