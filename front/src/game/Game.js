import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Round from './Round'

const DIFFUCULT = {
  EASY: { timer: 300000 },
  MEDIUM: { timer: 180000 },
  HARD: { timer: 120000 }
}

const Game = () => {
  const [difficult, setDifficult] = useState(DIFFUCULT.EASY)
  const board = { width: 5, heigth: 4 }

  const Difficult = () => { }

  return (
    <div>
      <div className='logout-area'></div>
      <div>
        <Round boardConfig={board} difficult={difficult} />
        {/* <Button>Start Game</Button> */}
        <Link to='/ranking'>
          {/* <Button name={'Ranking'} /> */}
        </Link>
      </div>
    </div>
  )
}

export default Game