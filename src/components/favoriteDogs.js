import React from 'react'
import { GoTrashcan } from 'react-icons/go'

const favoriteDogs = ({ dogs, removeFavorite }) => (
  <ul className="favorite-dogs">
    {dogs.map((dog, index) => (
      <li>
        <img class="favorite-dog" src={dog} alt="favorited dog" />
        <button onClick={() => removeFavorite(index)}>
          <GoTrashcan size="20" />
        </button>
      </li>
    ))}
  </ul>
)

export default favoriteDogs
