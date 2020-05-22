import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
  <Fragment>
    <button onClick={props.callback}>{props.name}</button>
  </Fragment>
)

Button.propTypes = {
  name: PropTypes.string.isRequired,
  callback: PropTypes.func
}

export default Button