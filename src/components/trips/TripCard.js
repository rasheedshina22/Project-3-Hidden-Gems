import React from 'react'
import { Link } from 'react-router-dom'

const TripCard = ({ _id, name, image, category, location }) => {
  return (

    <Link to={`/trips/${_id}`}>
      <div className="card">
        {image && <div className="card-image">
          <figure className="image">
            <img src={image} alt={name} />
          </figure>
        </div>}
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-content">
          <div className="content">
            <p><strong>Category: </strong> {category}</p>
            <p><strong>Location: </strong> {location}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TripCard
