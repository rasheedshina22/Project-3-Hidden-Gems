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

        <Link to={'/trips/'}><button className="button homesecond is-medium thumbnail"> Trips <i className="fas fa-map-signs homepage"></i> </button></Link>

        <Link className="hoverWrapper" to = {'/gems'}><button className="button home is-medium"> Gems Around the World  <i className="far fa-gem homepage"></i>  </button></Link>
        <div className="hoverShow"><span>Discover & Explore Hidden Gems around the World</span></div>

      </div>

    </section>

  )
}


export default Home
