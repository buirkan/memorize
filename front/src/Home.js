import React, { Fragment } from 'react'
import { Image, ButtonGroup } from '@chakra-ui/core'
import Login from './login/Login'
import Register from './login/Register'
import gameLogoB from './assets/memorize-it.png'
import gameLogoE from './assets/star-wars-game.png'

function Home() {
  return (
    <Fragment>
      <div className='logo-system'>
        <Image
          src={gameLogoB.valueOf()}
          alt='main system logo'
          objectFit="cover" />
        <Image
          src={gameLogoE.valueOf()}
          alt='main system second logo'
          objectFit="cover" />
      </div>
      <ButtonGroup m={5} spacing={4}>
        <Login />
        <Register />
      </ButtonGroup>
    </Fragment>
  )
}

export default Home