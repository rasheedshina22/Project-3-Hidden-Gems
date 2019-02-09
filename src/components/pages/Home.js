import React from 'react'

const Home = () => {
  return (
    <section className="hero is-large is-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            HOME PAGE
          </h1>
          <h2 className="subtitle">
            Welcome
          </h2>
          <a href = "/gems"><button className="button is-medium is-primary"> Gems </button></a>
          <a href = "/trips"><button className="button is-medium is-primary"> Trips </button></a>

        </div>
      </div>
    </section>
  )
}

export default Home
