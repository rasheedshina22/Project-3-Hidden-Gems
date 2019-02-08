import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'
import GemsIndex from './components/gems/GemsIndex'
// import ArtistsShow from './components/artists/ArtistsShow'
import GemsNew from './components/gems/GemsNew'
import GemsShow from './components/gems/GemsShow'
//
import TripsIndex from './components/trips/TripsIndex'
// import AlbumsShow from './components/albums/AlbumsShow'
// import AlbumsNew from './components/albums/AlbumsNew'
//
// import TracksIndex from './components/tracks/TracksIndex'
// import TracksShow from './components/tracks/TracksShow'
// import TracksNew from './components/tracks/TracksNew'
//
import SecureRoute from './components/common/SecureRoute'
//
import Register from './components/auth/Register'
import Login from './components/auth/Login'
//
import Home from './components/pages/Home'
//
import Navbar from './components/common/Navbar'
import FlashMessages from './components/common/FlashMessages'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <FlashMessages />

          <Switch>
            <SecureRoute path="/gems/new" component={GemsNew} />
            <Route path="/gems/:id" component={GemsShow} />
            <Route path="/gems" component={GemsIndex} />
            <Route path="/trips" component={TripsIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>


        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
