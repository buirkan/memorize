import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import deepCopy from 'deepcopy'

import cardsPaths from '../card/cardsPaths'

/**
 * 
 * @param {*} cards 
 */
const sortShuffleCards = (cards) => cards.sort(() => .5 - Math.random())

/**
 * 
 * @param {*} allCards 
 */
const createCards = (allCards) => {
  if (allCards % 2 !== 0)
    throw `Cards length must be even. Actually is: ${allCards}`

  let cardsShuffled = sortShuffleCards(cardsPaths)
    .slice(0, allCards / 2) // cut on the middle
    .map(cardPath => ({
      // card object properties
      id: v4(),
      path: `./src/assets/characters/${cardPath}`,
      displaying: false,
      canShow: true
    }))
    .flatMap(i => [i, {
      ...deepCopy(i),
      id: v4()
    }])

    console.log(cardsShuffled)

  return sortShuffleCards(cardsShuffled)
}

/**
 * 
 * @param {*} difficult
 * @param {*} boardConfig
 */
const Round = ({ difficult, boardConfig }) => {
  const totalCards = boardConfig.width * boardConfig.heigth
  const [gameCards, setGameCards] = useState(createCards(totalCards))

  useEffect(() => {
    console.log(`total of cards to game: ${totalCards}`)
  }, [])
}

Round.propTypes = {
  difficult: PropTypes.object,
  boardConfig: PropTypes.object
}

export default Round