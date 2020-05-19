import React from 'react'
import { Link } from 'react-router-dom'

import './global.css'
import gameLogoB from './assets/memorize-it.png'
import gameLogoE from './assets/star-wars-game.png'
import Button from './components/Button'
import Image from './card/Image'

function Home() {
	return (
		<div>
			<div className='logo-system'>
				<Image src={gameLogoB.valueOf()} alt='main system logo' />
				<Image src={gameLogoE.valueOf()} alt='main system second logo' />
			</div>
			<div className='home-menu-area'>
				<Link to='/login'>
					<Button name={'Login'} />
				</Link>
				<Link to='/register'>
					<Button name={'Register'} />
				</Link>
			</div>
		</div>
	)
}

export default Home