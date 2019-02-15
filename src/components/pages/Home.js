import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

  return (

    <section>
      <div>
        <ul className="slideshow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <Link className="hoverWrapper2" to={'/trips/'}><button className="button homesecond is-medium thumbnail"> Trips <i className="fas fa-map-signs homepage"></i> </button></Link>
        <div className="hoverShow2"><span> Explore Rare Trips around the World. . . </span></div>

        <Link className="hoverWrapper" to = {'/gems'}><button className="button home is-medium"> Gems Around the World  <i className="far fa-gem homepage"></i>  </button></Link>
        <div className="hoverShow"><span> Discover Hidden Gems around the World. . . </span></div>

      </div>
    </section>
  )
}


export default Home
