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

        <Link to = {'/gems'}><button className="button home is-medium "> Gems Around the World </button></Link>

        <Link to={'/trips/'} className="button home is medium" >Trips </Link>

      </div>

    </section>

  )
}

export default Home
