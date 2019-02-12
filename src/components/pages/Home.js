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

        <Link to = {'/gems'}><button className="button home is-medium "> Gems Around the World  <i className="far fa-gem"></i>  </button></Link>

        <Link to={'/trips/'}><button className="button homesecond is-medium"> Trips</button></Link>

      </div>

    </section>

  )
}

export default Home
