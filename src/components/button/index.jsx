import React from 'react'
import PropTypes from "prop-types";

const Button = ({text}) => {
  return <input type="button" value={text} />
}

Button.propTypes = {
  /** Text: Text of the button */
  text: PropTypes.string.isRequired,
}

export default Button;