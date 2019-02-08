import React from 'react'
import Map from './GemsMap'

const Gemshow = () => {
  return (
    <section className="hero is-large is-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            map PAGE
          </h1>
          <h2 className="subtitle">
            Welcome
          </h2>
        </div>
      </div>
      <Map
        center={{ lat: 51.508, lng: -0.09 }}
        zoom={12}
      />
    </section>
  )
}

export default Gemshow
