import React from 'react'
import { GoTrashcan } from 'react-icons/go'

const favoriteCats = ({ cats, removeFavorite }) => (
  <ul className="favorite-cats">
    {cats.map((cat, index) => (
      <li>
        <img className="favorite-cat" src={cat} alt="favorited cat" />
        <button onClick={() => removeFavorite(index)}>
          <GoTrashcan size="20" />
        </button>
      </li>
    ))}
  </ul>
)

export default favoriteCats
