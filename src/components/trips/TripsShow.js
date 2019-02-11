import React from 'react'
import axios from 'axios'

import TripsMap from './TripsMap'
import Auth from '../../lib/Auth'
import Comments from '../common/Comments'

import {Link} from 'react-router-dom'

class TripsShow extends React.Component {
  constructor(){
    super()

    this.state = {

    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(){
    axios
      .delete(`/api/trips/${this.props.match.params.id}`,{
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => {
        this.props.history.push('/trips')
      })
      .catch(err => console.log(err))

  }

  componentDidMount() {
    axios.get(`/api/trips/${this.props.match.params.id}`)
      .then(res => this.setState({ trip: res.data }))
  }

  // componentDidUpdate() {
  //   axios.get(`/api/trips/${this.props.match.params.id}`)
  //     .then(res => this.setState({ trip: res.data }))
  // }

  render(){
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
                {Auth.canEdit(user._id) && (
                  <div>
                    <Link to={`/trips/${_id}/edit`} className="button is-dark" >Edit </Link>
                    <hr />
                    <button className="button is-dark" onClick={this.handleDelete}>Delete</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <div className="columns">
            <div className="column">
              <Comments
                {...this.state.trip}
                show='trips'
              />
            </div>
            <div className="column">
              <div className="content">
                <TripsMap
                  gems = {gems}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TripsShow
