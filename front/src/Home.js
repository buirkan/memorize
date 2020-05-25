import React, { Fragment } from 'react'
import {ButtonGroup} from '@chakra-ui/core'
import Login from './login/Login'
import Register from './login/Register'
import gameLogoB from './assets/memorize-it.png'
import gameLogoE from './assets/star-wars-game.png'
import Image from './card/Image'

function Home() {
	return (
		<Fragment>
			<div className='logo-system'>
				<Image src={gameLogoB.valueOf()} alt='main system logo' />
				<Image src={gameLogoE.valueOf()} alt='main system second logo' />
			</div>
			<ButtonGroup spacing={4}>
				<Login />
				<Register />
			</ButtonGroup>
		</Fragment>
	)
}

export default Home