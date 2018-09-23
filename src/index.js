import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Actions from './components/actions'
import Header from './components/header'
import FavoriteDogs from './components/favoriteDogs'

import './styles.css'

class App extends Component {
  state = {
    currentDog: null,
    favoriteDogs: []
  }

  getDog = () => {
    const url = 'https://dog.ceo/api/breed/akita/images/random'
    this.setState({ currentDog: null })

    fetch(url)
      .then(rsp => rsp.json())
      .then(data => this.setState({ currentDog: data.message }))
  }

  favoriteDog = dog => {
    this.setState(state => ({
      favoriteDogs: this.state.favoriteDogs.concat(dog)
    }))
  }

  removeFavorite = currentDogIndex => {
    this.setState(state => ({
      favoriteDogs: state.favoriteDogs.filter((_, i) => i !== currentDogIndex)
    }))
  }

  dogInFavorites = dog => this.state.favoriteDogs.includes(dog)

  componentDidMount = () => this.getDog()

  render() {
    const { currentDog, favoriteDogs } = this.state
    return (
      <main>
        <section className="dog-wrapper">
          <Header />
          <section className="dog-container">
            <figure>
              {currentDog ? (
                <img
                  className="dog-image"
                  src={currentDog}
                  alt="A great akita dog"
                />
              ) : null}
            </figure>
            <Actions
              getDog={this.getDog}
              disabled={this.dogInFavorites(currentDog)}
              favoriteDog={() => this.favoriteDog(currentDog)}
            />
          </section>
          <FavoriteDogs
            dogs={favoriteDogs}
            removeFavorite={this.removeFavorite}
          />
        </section>
      </main>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
