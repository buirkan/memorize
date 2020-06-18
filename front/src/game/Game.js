import React, { Fragment } from 'react'
import { Button } from '@chakra-ui/core'
import { useHistory } from 'react-router-dom'

const Game = () => {
  const history = useHistory()

  const handleStartGame = () => {
    history.push('/round')
  }

  return (
    <Fragment>
      <div>
        <Button onClick={handleStartGame}>Start Game</Button>
        <Button onClick={() => history.push('/ranking')}>Ranking</Button>
      </div>
    </Fragment>
  )
}

export default Game