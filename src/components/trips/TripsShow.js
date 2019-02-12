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
      trip: null,
      userLocation: null,
      data: {}
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
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

  handleCommentChange(e) {
    const data = {...this.state.data, content: e.target.value }
    const error = null
    this.setState({ data, error })
  }


  handleCommentSubmit(e){
    e.preventDefault()
    axios
      .post(`/api/trips/${this.state.trip._id}/comments/`,
        this.state.data,
        {headers: { Authorization: `Bearer ${Auth.getToken()}`}
        })
      .then((res) => {
        this.setState(
          {...this.state,
            content: '',
            trip: res.data,
            data: { content: '' }
          })
      })
      .then(() => this.props.history.push(`/trips/${this.state.trip._id}`))
      .catch(() => this.setState({ error: 'An error occured' }))
  }

  handleCommentDelete(e){
    e.preventDefault()
    axios
      .delete(`/api/trips/${this.state.trip._id}/comments/${e.target.value}`,
        {headers: { Authorization: `Bearer ${Auth.getToken()}`}
        })
      .then((res) => {
        this.setState({...this.state, trip: res.data  })
      })
      .then(() => this.props.history.push(`/trips/${this.state.trip._id}`))
      .catch(() => this.setState({ error: 'An error occured' }))
  }

  componentDidMount() {
    axios.get(`/api/trips/${this.props.match.params.id}`)
      .then(res => this.setState({ trip: res.data }))

    // also get the user location...
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('LOCATION FOUND')
        this.setState({
          userLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })
    }

  }

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
                <hr />
                <h4 className="title is-4">Description:</h4>
                <p> {description}</p>
                <hr />
                <h4 className="title is-4">Gems:</h4>
                <div>
                  {gems.map((gem, index) =>
                    <Link to={`/gems/${gem._id}`} className="button is-primary is-rounded" key={index}> {gem.name} </Link>
                  )}
                  <hr/>
                </div>
                <div className="column">
                  <div className="content">
                    {Auth.canEdit(user._id) && (
                      <div>
                        <Link to={`/trips/${_id}/edit`} className="button is-dark is-rounded" >Edit </Link>
                        <button className="button is-primary is-rounded " onClick={this.handleDelete}>Delete</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <div className="columns">
            <div className="column">
              <Comments
                handleCommentSubmit={this.handleCommentSubmit}
                handleCommentChange={this.handleCommentChange}
                handleCommentDelete={this.handleCommentDelete}
                {...this.state.trip}
                contentInput= {this.state.data.content}
              />
            </div>
            <div className="column">
              <div className="content">
                <TripsMap
                  gems={gems}
                  userLocation={this.state.userLocation}
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
