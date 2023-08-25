import { Square } from './Square'

export const Board = ({ board, updateBoard }) => {
  return (
    <section className='game'>
      {board.map((_, index) => {
        return (
          <Square updateBoard={updateBoard} index={index} key={index}>
            {_}
          </Square>
        )
      })}
    </section>
  )
}
