import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

const Card = ({ thumbURL, displaying, callback }) => {
  return (
    <div onClick={callback}>
      <div className={'card' + (displaying ? 'flipped' : '')}>
        <Image className='side front' src={thumbURL} alt='Card image' />
        <div className='side back' />
      </div>
    </div>
  )
}

Card.propTypes = {
  thumbURL: PropTypes.string,
  displaying: PropTypes.bool,
  callback: PropTypes.func
}

export default Card