import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { GiHouse } from 'react-icons/gi'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import deepCopy from 'deepcopy'
import cardsPaths from '../card/CharactersCards'
import Card from '../card/Card'
import { Button } from '@chakra-ui/core'
import Timer from './Timer'

const DIFFUCULT = {
  EASY: { timer: 300000 },
  MEDIUM: { timer: 180000 },
  HARD: { timer: 120000 }
}

const Difficult = () => { }

/**
 * Shuffle the cards to sort the map of cards
 * @param {*} cards of characters
 */
const sortShuffleCards = (cards) => cards.sort(() => .5 - Math.random())

/**
 * Create the array of cards to map in the view
 * @param {*} allCards All the cards on assets
 */
const createCards = (allCards) => {
  if (allCards % 2 !== 0)
    throw `Cards length must be even. Actually is: ${allCards}`

  let cardsShuffled = sortShuffleCards(cardsPaths)
    .slice(0, allCards / 2)
    .map(cardPath => ({
      id: v4(),
      path: cardPath,
      isSelected: false,
      matched: false
    }))
    .flatMap(i => [i, { ...deepCopy(i), id: v4() }])

  return sortShuffleCards(cardsShuffled)
}

const Round = (props) => {
  const board = { width: 5, heigth: 4 }
  const totalCards = board.width * board.heigth
  const history = useHistory()

  const [difficult, setDifficult] = useState(DIFFUCULT.EASY)
  const [cards, setCards] = useState(createCards(totalCards))
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [cardsSelected, pushCardsSelected] = useState([])

  const handleCardClick = (card) => {
    if (firstCard && (firstCard.id === card.id) || secondCard && (secondCard.id === card.id))
      return

    selectCard(card.id, true)
    firstCard
      ? setSecondCard(card)
      : setFirstCard(card)
  }

  const selectCard = (cardID, isSelected, matched) => {
    setCards(prev => prev.map(card => {
      if (card.id !== cardID)
        return card
      return { ...card, isSelected, matched }
    }))
  }

  const resetSelectedCards = () => {
    setFirstCard(null)
    setSecondCard(null)
  }

  const onCardsMatched = () => {
    selectCard(firstCard.id, true, true)
    selectCard(secondCard.id, true, true)
    pushCardsSelected(cardsSelected.concat(firstCard))
    pushCardsSelected(cardsSelected.concat(secondCard))
    resetSelectedCards()
  }

  const onCardsMatchFail = () => {
    setTimeout(() => {
      selectCard(firstCard.id, false, false)
    }, 1000)

    setTimeout(() => {
      selectCard(secondCard.id, false, false)
    }, 1200)
    resetSelectedCards()
  }

  useEffect(() => {
    if (!firstCard || !secondCard)
      return

    firstCard.path === secondCard.path
      ? onCardsMatched()
      : onCardsMatchFail()
  }, [firstCard, secondCard])

  useEffect(() => {
    if (cardsSelected.length === cards.length / 2)
      endGame()
  }, [cardsSelected])

  const endGame = () => {
    alert('Game Finished. Congratulations!')
    history.push('/game')
  }

  const redirectToHome = () => history.push('/game')

  return (
    <div>
      <Button leftIcon={GiHouse} variant="solid" variantColor="teal" m={5} onClick={redirectToHome}>
        Back
      </Button>
      <div className="deck-container">
        {/* Fix difficult selection */}
        {/* <Timer timerCount={300000} />  */}
        <ul className="deck">
          {cards.map(card => <Card
            key={card.id}
            card={card}
            thumbURL={card.path}
            isSelected={card.isSelected}
            matched={card.matched}
            onClick={() => handleCardClick(card)} />
          )}
        </ul>
      </div>
    </div>
  )
}

Round.propTypes = {
  difficult: PropTypes.object,
  boardConfig: PropTypes.object
}

export default Round