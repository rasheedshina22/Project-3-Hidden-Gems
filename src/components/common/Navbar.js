import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// import Auth from '../../lib/Auth'

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      navbarOpen: false
    }

    // this.logout = this.logout.bind(this)
    // this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  // toggleNavbar() {
  //   this.setState({ navbarOpen: !this.state.navbarOpen })
  //
  // }
  //
  // logout(){
  //   Auth.removeToken()
  //   this.props.history.push('/')
  // }
  //
  // componentDidUpdate(prevProps){
  //   if(prevProps.location.pathname !== this.props.location.pathname){
  //     this.setState({ navbarOpen: false })
  //   }
  // }

  render() {
    return (
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">

            <Link className="navbar-item" to="/">
              <strong>Hidden Gems</strong>
            </Link>

            <a

              className="navbar-burger"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link className="navbar-item" to="/cheeses">Discover Gems</Link>
              <Link className="navbar-item" to="/cheeses/new"></Link>
              <Link className="navbar-item" to="/register">Register</Link>
              <Link className="navbar-item" to="/login">Login</Link>
              <a className="navbar-item">Logout</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
