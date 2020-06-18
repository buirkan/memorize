import React, { useState, useEffect } from 'react'
import { Stack, Box } from '@chakra-ui/core'
import { FcClock } from 'react-icons/fc'
import PropTypes from 'prop-types'

const Timer = ({ timerCount }) => {
  const [count, updateCount] = useState(timerCount)

  useEffect(() => {
    var timer = setInterval(() => setCount(), 1000)

    if (count === 0)
      stopCount(timer)

    return () => {
      stopCount(timer)
    }
  }, [count])

  const setCount = () => updateCount(count => count - 1000)

  const stopCount = (t) => {
    console.log('Timer has run out')
    clearInterval(t)
  }

  const parseMsToFormat = (miliseconds) => {
    const minutes = Math.floor(miliseconds / 60000)
    const seconds = Math.floor((miliseconds % 60000) / 1000).toFixed(0)
    const pad = '00'

    return `${minutes}:${(seconds < 10 ? (pad + seconds).slice(- pad.length) : seconds)}`
  }

  return (
    <div>
      <Stack isInline>
        <Box as={FcClock} size="24px" />
        <h3><strong>{parseMsToFormat(count)}</strong></h3>
      </Stack>
    </div>
  )
}

Timer.propTypes = {
  timerCount: PropTypes.number
}

export default Timer