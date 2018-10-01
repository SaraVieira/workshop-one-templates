import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Actions from './components/actions'
import Header from './components/header'
import FavoriteCats from './components/favoriteCats'

import './styles.css'

class App extends Component {
  state = {
    currentCat: null,
    favoriteCats: []
  }

  getCat = () => {
    const url = 'https://catis.life/cat'
    this.setState({ currentCat: null })

    fetch(url)
      .then(rsp => rsp.json())
      .then(data => this.setState({ currentCat: data.cat }))
  }

  favoriteCat = cat => {
    this.setState(state => ({
      favoriteCats: this.state.favoriteCats.concat(cat)
    }))
  }

  removeFavorite = currentCatIndex => {
    this.setState(state => ({
      favoriteCats: state.favoriteCats.filter((_, i) => i !== currentCatIndex)
    }))
  }

  catInFavorites = cat => this.state.favoriteCats.includes(cat)

  componentDidMount = () => this.getCat()

  render() {
    const { currentCat, favoriteCats } = this.state
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
              getCat={this.getCat}
              disabled={this.catInFavorites(currentCat)}
              favoriteCat={() => this.favoriteCat(currentCat)}
            />
          </section>
          <FavoriteCats
            cats={favoriteCats}
            removeFavorite={this.removeFavorite}
          />
        </section>
      </main>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
