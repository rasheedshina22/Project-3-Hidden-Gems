import React from 'react'
import axios from 'axios'

import TripsMap from '../trips/TripsMap'


import {Link} from 'react-router-dom'

class TripsShow extends React.Component {
  constructor(){
    super()

    this.state = {

    }

    // this.handleDelete = this.handleDelete.bind(this)
  }

  // handleDelete(){
  //   axios
  //     .delete(`/api/trips/${this.props.match.params.id}`,{
  //     })
  //     .then(() => {
  //       this.props.history.push('/trips')
  //     })
  //     .catch(err => console.log(err))
  //
  // }

  componentDidMount() {
    axios.get(`/api/trips/${this.props.match.params.id}`)
      .then(res => this.setState({ trip: res.data }))
  }

  render(){
    console.log(this.state)
    if(!this.state.trip) return null
    const { _id, name, image, category, description, user, gems } = this.state.trip
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1"> {name} </h1>
          <h4 className="title is-4">Added by: {user.username} </h4>
          <hr />
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className="column">
              <div className="content">
                <h4 className="title is-4">Category: {category}</h4>
                <h4 className="title is-4">Description:</h4>
                <p> {description}</p>
                <hr />
                <Link to={`/trips/${_id}/edit`} className="button is-dark" >Edit </Link>
                <hr />
                <button className="button is-dark" onClick={this.handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <div className="columns">
            <div className="column">
              <h4 className="title is-4">Comments</h4>
            </div>
            <div className="column">
              <div className="content">
                <TripsMap
                  gems = {gems}

                />
              </div>
            </div>

            <div className="columns is-multiline">
              {this.state.trip.gems.map(gem =>
                <div key={gem._id} className="column is-one-third">

                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default TripsShow
