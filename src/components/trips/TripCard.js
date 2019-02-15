import React from 'react'
import { Link } from 'react-router-dom'

const TripCard = ({ _id, name, image, category, gems }) => {
  return (

    <Link to={`/trips/${_id}`}>
      <div className="isImage thumbnail">
        <figure className="image is-4by3">
          <img src={image} alt={name} className="gemImage thumbnail"/>
          <div className="middle">
            <div className="text is-size-6">{name}</div>
            <p className="has-text-white">Included Gems</p>
            {gems.map((gem, i)=> {
              return  <button className="tripBtn" key={i}> {gem.name} </button>
            }
            )}
            <div className="text">{category}</div>
          </div>
        </figure>
      </div>

    </Link>
  )
}

export default TripCard
