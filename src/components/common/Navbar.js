import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/Auth'

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      navbarOpen: false,
      clickedIcon: false
    }

    this.logout = this.logout.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.toggleIcon = this.toggleIcon.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  toggleIcon() {

    this.setState({clickedIcon: !this.state.clickedIcon})

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

    console.log(this.props.location.pathname)
    return (
      <nav className= { this.props.location.pathname === '/' ? 'navbar home' : 'navbar is-dark'}>
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" onClick={this.toggleIcon} to="/">
              <strong className="has-text-white is-size-4">Hidden <i className={`far fa-gem rotate ${this.state.clickedIcon && 'down'}`}></i> Gems  </strong>
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
              <a className="navbar-link has-text-white">
               Discover
              </a>
              <div className="navbar-dropdown">
                <Link to="/gems" className="navbar-item has-text-white">
                 The Hidden Gems
                </Link>
                <hr className="navbar-divider" />
                <Link to="/trips" className="navbar-item has-text-white">
                 The Trips
                </Link>
              </div>
            </div>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              {Auth.isAuthenticated() && <div className="navbar-item has-dropdown is-hoverable">
                <Link to={`/user/${Auth.getUserId()}`} className="navbar-item has-text-white">
                Your Gems
                </Link>
                <a className="navbar-link has-text-white">
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

              {!Auth.isAuthenticated() && <Link className="navbar-item has-text-white" to="/register">Sign Up</Link>}
              {!Auth.isAuthenticated() && <Link className="navbar-item has-text-white" to="/login">Login</Link>}
              {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
