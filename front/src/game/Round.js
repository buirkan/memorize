import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import deepCopy from 'deepcopy'
import cardsPaths from '../card/cardsPaths'
import Card from '../card/Card'

/**
 * Shuffle the cards to sort the map of cards
 * @param {*} cards Assets cards of characters
 */
const sortShuffleCards = (cards) => cards.sort(() => .5 - Math.random())

/**
 * Create the array of cards to map in the view
 * @param {*} allCards 
 */
const createCards = (allCards) => {
  if (allCards % 2 !== 0)
    throw `Cards length must be even. Actually is: ${allCards}`

  let cardsShuffled = sortShuffleCards(cardsPaths)
    .slice(0, allCards / 2) // cut in the middle
    .map(cardPath => ({
      id: v4(),
      path: `front/src/assets/characters/${cardPath}`,
      displaying: false,
      canShow: true
    }))
    .flatMap(i => [i, {...deepCopy(i), id: v4() }])

  return sortShuffleCards(cardsShuffled)
}

/**
 * A round component to create a gameplay using the configurations parameters
 * @param {*} difficult Difficult selected to the round
 * @param {*} boardConfig Config with the width and heigth
 */
const Round = ({ difficult, boardConfig }) => {
  const totalCards = boardConfig.width * boardConfig.heigth
  const [gameCards, setGameCards] = useState(createCards(totalCards))

  return (
    <div>
      {gameCards.map(card => 
        <Card thumbURL={card.path} displaying={card.displaying} />
      )}
    </div>
  )
}

Round.propTypes = {
  difficult: PropTypes.object,
  boardConfig: PropTypes.object
}

export default Round