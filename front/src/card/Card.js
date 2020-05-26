import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '@chakra-ui/core'
// import './style/card.scss'

const Card = ({ thumbURL, displaying, callback }) => {
  return (
    <div className='card-container' onClick={callback}>
      <div className={'card' + (displaying ? 'flipped' : '')}>
        <Image
          className='side front'
          rounded='full'
          size='100px'
          objectFit='cover'
          alt='A star wars character'
          src={thumbURL}
          fallbackSrc='https://via.placeholder.com/100' />
        <div className='side back' />
      </div>
    </div>
  )
}

Card.propTypes = {
  thumbURL: PropTypes.string.isRequired,
  displaying: PropTypes.bool,
  callback: PropTypes.func
}

export default Card