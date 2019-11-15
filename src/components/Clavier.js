import React from 'react'
import PropTypes from 'prop-types'

// Composant qui affiche l'alphabet
const Clavier = ({ letter, index, onClick }) => (
  <button key={index} index={index} onClick={() => onClick(letter)}>
    {letter}
  </button>
)

Clavier.propTypes = {
  letter: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Clavier
