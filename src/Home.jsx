import React from 'react'
import './global.css'
import gameLogoB from './assets/memorize-it.png'
import gameLogoE from './assets/star-wars-game.png'

function Home() {
	return (
		<div>
			<center>
				<img src={gameLogoB} alt="logo of game" />
				<img src={gameLogoE} alt="logo of game" />
			</center>
		</div>
	)
}

export default Home