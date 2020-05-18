import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
    <Fragment>
        <button>{props.name}</button>
    </Fragment>
)


Button.propTypes = {
    name: PropTypes.string
}

Button.defaultProps = {
    name: 'Empty'
}

export default Button
