import { Square } from './Square'

export const CurrentTurn = ({ turn, playerOne, playerTwo }) => {
  return (
    <section className='turn'>
      <Square isSelected={turn === playerOne}> {playerOne} </Square>
      <Square isSelected={turn === playerTwo}> {playerTwo} </Square>
    </section>
  )
}
