import React from 'react'
import axios from 'axios'

import Map from '../common/Map'
import Comments from '../common/Comments'
import Auth from '../../lib/Auth'

import {Link} from 'react-router-dom'

class GemsShow extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {},
      gem: null,
      gems: null,
      userLocation: null
    }

    console.log('this is data', this.state.data)

    this.handleDelete = this.handleDelete.bind(this)
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
  }

  handleDelete(){
    axios
      .delete(`/api/gems/${this.props.match.params.id}`,{
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => {
        this.props.history.push('/gems')
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
      .post(`/api/gems/${this.state.gem._id}/comments/`,
        this.state.data,
        {headers: { Authorization: `Bearer ${Auth.getToken()}`}
        })
      .then((res) => {
        console.log(res.data)
        this.setState({...this.state, gem: res.data, data: {content: ''} })
      })
      .then(() => this.props.history.push(`/gems/${this.state.gem._id}`))
      .catch(() => this.setState({ errors: 'An error occured' }))
  }


  handleCommentDelete(e){
    console.log(e.target.value)
    e.preventDefault()
    axios
      .delete(`/api/gems/${this.state.gem._id}/comments/${e.target.value}`,
        {headers: { Authorization: `Bearer ${Auth.getToken()}`}
        })
      .then((res) => {
        console.log(res.data)
        this.setState({...this.state, gem: res.data })
      })
      .then(() => this.props.history.push(`/gems/${this.state.gem._id}`))
      .catch(() => this.setState({ error: 'An error occured' }))
  }

  componentDidMount() {
    axios.get(`/api/gems/${this.props.match.params.id}`)
      .then(res => this.setState({ gem: res.data }))

    // also get the user location...
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
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
    console.log(this.state)
    if(!this.state.gem) return null
    const { _id, name, image, category, description, user, location, trips } = this.state.gem
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1"> {name} </h1>
          <Link to={`/user/${user._id}`} className="title is-4">Added by: {user.username} </Link>
          <hr />

          <div className="columns is-variable is-5">
            <div className="column">
              <figure className="image is-4by2">
                <img src={image} alt={name} />
              </figure>
            </div>


            <div className="column">
              <div className="content">
                <h4 className="title is-4">Category</h4>
                <p> {category} </p>
                <h4 className="title is-4">Description</h4>
                <p> {description}</p>
                <h4 className="title is-4">Trips</h4>
                {trips.map((trip) => {
                  return <Link to={`/trips/${trip._id}`} className="button showGemBtn is-primary is-rounded" key={trip._id}> {trip.name} </Link>
                })}
                {Auth.canEdit(user._id) && (
                  <div>
                    <Link to={`/gems/${_id}/edit`} className="button is-dark is-rounded"> Edit </Link>
                    <button className="button is-dark is-rounded" onClick={this.handleDelete}> Delete </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <hr />
          <div className="columns is-variable is-5">

            <div className="column">
              <div className="content">
                <h2> Location</h2>

                <Map
                  location={location}
                  userLocation={this.state.userLocation}
                  // gem={this.state.gem}
                  gems={[this.state.gem]}
                  type= "gem"
                />
              </div>
            </div>

            <div className="column">
              <Comments
                handleCommentSubmit={this.handleCommentSubmit}
                handleCommentChange={this.handleCommentChange}
                handleCommentDelete={this.handleCommentDelete}
                {...this.state.gem}
                contentInput={this.state.data.content}
              />
            </div>


          </div>
        </div>
      </section>
    )
  }
}

export default GemsShow
