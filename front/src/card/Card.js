import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Image } from '@chakra-ui/core'

const Card = ({ card, thumbURL, onClick, isSelected, matched }) => {
  let cardClassValue = 'card'

  if (isSelected)
    cardClassValue += ' flip'

  if (matched)
    cardClassValue += ' match'

  return (
    <li className={cardClassValue} onClick={() => onClick(card)}>
      <Image
        rounded='full'
        size='80px'
        objectFit='cover'
        alt='A star wars character'
        src={thumbURL}
        fallbackSrc='https://via.placeholder.com/80' />
    </li>
  )
}

Card.propTypes = {
  card: PropTypes.object,
  thumbURL: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  matched: PropTypes.bool
}

export default Card