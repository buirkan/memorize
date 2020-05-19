import React from 'react'

import './global.css'
import gameLogoB from './assets/memorize-it.png'
import gameLogoE from './assets/star-wars-game.png'
import Button from './components/Button'

function Home() {
	return (
		<div>
			<img src={gameLogoB} alt="logo of game" />
			<img src={gameLogoE} alt="logo of game" />

			<Button name={"Login"} />
			<Button name={"Ranking"} />
			<Button name={"Register"} />
		</div>
	)
}

export default Home