import React from 'react'
import { GoHeart, GoArrowRight } from 'react-icons/go'

const Actions = ({ getCat, disabled, favoriteCat }) => (
  <ul className="cat-actions">
    <li>
      <button className="heart-icon" disabled={disabled} onClick={favoriteCat}>
        <GoHeart size="30" color="#f44336" />
      </button>
    </li>
    <li>
      <button onClick={getCat}>
        <GoArrowRight size="30" />
      </button>
    </li>
  </ul>
)

export default Actions
