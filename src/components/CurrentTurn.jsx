import { Square } from './Square'

export const CurrentTurn = ({ points, turn, playerOne, playerTwo }) => {
  return (
    <section className='turn'>
      <div>
        <Square isSelected={turn === playerOne}> {playerOne}</Square>
        Puntos: {points.pOne}
      </div>
      <div>
        <Square isSelected={turn === playerTwo}> {playerTwo} </Square>
        Puntos: {points.pTwo}
      </div>
    </section>
  )
}
