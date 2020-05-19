import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
    <Fragment>
        <button>{props.name}</button>
    </Fragment>
)

Button.propTypes = {
    // if we pass a number on the same way pass to the button text
    name: PropTypes.string
}

export default Button
