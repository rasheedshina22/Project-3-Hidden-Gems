import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'
import GemsIndex from './components/gems/GemsIndex'

import GemsNew from './components/gems/GemsNew'
import GemsEdit from './components/gems/GemsEdit'
import GemsShow from './components/gems/GemsShow'

import UserShow from './components/user/UserShow'

import TripsIndex from './components/trips/TripsIndex'
import TripsNew from './components/trips/TripsNew'
import TripsEdit from './components/trips/TripsEdit'
import TripsShow from './components/trips/TripsShow'

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
            <SecureRoute path="/gems/:id/edit" component={GemsEdit} />
            <Route path="/user/:id" component={UserShow} />
            <Route path="/gems/:id" component={GemsShow} />
            <Route path="/gems" component={GemsIndex} />
            <SecureRoute path="/trips/new" component={TripsNew} />
            <SecureRoute path="/trips/:id/edit" component={TripsEdit} />
            <Route path="/trips/:id" component={TripsShow} />
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
