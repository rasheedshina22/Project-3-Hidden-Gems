import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <section>

      <section className="hero is-large is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
    HOME PAGE
            </h1>
            <h2 className="subtitle">
    Welcome
            </h2>
            <Link to={'/gems/'} className="button is-large is-dark is-rounded" >Gems </Link>
            <Link to={'/trips/'} className="button is-large is-dark is-rounded" >Trips </Link>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home
