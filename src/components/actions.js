import React from 'react'
import { GoHeart, GoArrowRight } from 'react-icons/go'

const Actions = ({ getDog, disabled, favoriteDog }) => (
  <ul className="dog-actions">
    <li>
      <button className="heart-icon" disabled={disabled} onClick={favoriteDog}>
        <GoHeart size="30" color="#f44336" />
      </button>
    </li>
    <li>
      <button onClick={getDog}>
        <GoArrowRight size="30" />
      </button>
    </li>
  </ul>
)

export default Actions
