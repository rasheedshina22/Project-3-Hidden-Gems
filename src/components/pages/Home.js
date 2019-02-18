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
        <Link className="hoverWrapper" to={'/trips'}><button className="button homesecond is-medium thumbnail"> Trips to Explore <i className="fas fa-map-signs homepage"></i> </button></Link>
        <div className="hoverShow"><span> Explore remarkable trips and Discover Hidden Gems. . . </span></div>
        <Link className="hoverWrapper" to = {'/gems'}><button className="button home is-medium"> Hidden Gems  <i className="far fa-gem homepage"></i>  </button></Link>
        <div className="hoverShow"><span> Discover Hidden Gems you did not know about . . . </span></div>
      </div>
    </section>
  )
}


export default Home
