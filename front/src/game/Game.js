import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Round from './Round'

const DIFFUCULT = {
  EASY: { timer: 300000 },
  MEDIUM: { timer: 180000 },
  HARD: { timer: 120000 }
}

const Game = () => {
  const [difficult, setDifficult] = useState(DIFFUCULT.EASY)
  const board = { width: 6, heigth: 5 }

  const Difficult = () => { }

  const beginGame = () => (
    <Fragment>
      <Round difficult={difficult} boardConfig={board} />
    </Fragment>
  )

  return (
    <div>
      <div className='logout-area'>
      </div>
      <div>
        <Round boardConfig={board} difficult={difficult} />
        {/* <Button name='new game' callback={beginGame} /> */}
        <Link to='/ranking'>
          <Button name={'Ranking'} />
        </Link>
      </div>
    </div>
  )
}

export default Game