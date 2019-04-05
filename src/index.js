import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Actions from './components/actions'
import Header from './components/header'
import FavoriteCats from './components/favoriteCats'

import './styles.css'

const App = () => {
  const [currentCat, setCurrentCat] = useState(null)
  const [favoriteCats, setFavoriteCats] = useState([])

  const getCat = () => {
    const url = 'https://catis.life/cat'
    setCurrentCat(null)

    fetch(url)
      .then(rsp => rsp.json())
      .then(data => setCurrentCat(data.cat))
  }

  const favoriteCat = cat => {
    setFavoriteCats(favoriteCats.concat(cat))
  }

  const removeFavorite = currentCatIndex => {
    setFavoriteCats(favoriteCats.filter((_, i) => i !== currentCatIndex))
  }

  const catInFavorites = cat => favoriteCats.includes(cat)

  useEffect(() => {
    getCat()
  }, [])

  return (
    <main>
      <section className="cat-wrapper">
        <Header />
        <section className="cat-container">
          <figure>
            {currentCat ? (
              <img
                key={currentCat}
                className="cat-image"
                src={currentCat}
                alt="A great cat"
              />
            ) : null}
          </figure>
          <Actions
            getCat={getCat}
            disabled={catInFavorites(currentCat)}
            favoriteCat={() => favoriteCat(currentCat)}
          />
        </section>
        <FavoriteCats cats={favoriteCats} removeFavorite={removeFavorite} />
      </section>
    </main>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
