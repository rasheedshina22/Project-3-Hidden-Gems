import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/Auth'

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      navbarOpen: false
    }

    this.logout = this.logout.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })

  }

  logout(){
    Auth.removeToken()
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps){
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return (
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">

            <Link className="navbar-item" to="/">
              <strong>Hidden Gems</strong>
            </Link>

            <a
              className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-item has-dropdown is-hoverable navbar-start">
              <a className="navbar-link">
               Discover
              </a>

              <div className="navbar-dropdown">
                <Link to="/gems" className="navbar-item">
                 The Hidden Gems
                </Link>
                <hr className="navbar-divider" />
                <Link to="/trips" className="navbar-item">
                 The Trips
                </Link>
              </div>
            </div>
          </div>

          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              {Auth.isAuthenticated() && <div className="navbar-item has-dropdown is-hoverable">
                <Link to={`/user/${Auth.getUserId()}`} className="navbar-item">
                Your Gems
                </Link>
                <a className="navbar-link">
                 Add
                </a>

                <div className="navbar-dropdown">
                  <Link to="/gems/new" className="navbar-item">
                   Your Gems
                  </Link>
                  <hr className="navbar-divider" />
                  <Link to="/trips/new" className="navbar-item">
                   To Your Trips
                  </Link>
                </div>
              </div>}

              {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">Sign Up</Link>}
              {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
              {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
