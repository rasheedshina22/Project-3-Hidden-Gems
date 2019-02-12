import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

class UserShow extends React.Component {
  constructor(){
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`/api/user/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  render(){
    console.log(this.state)
    if(!this.state.user) return null
    const { username } = this.state.user
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1"> {username} </h1>
          <h3 className="title is-3"> You have {this.state.user.gems.length} gems</h3>
          <h3 className="title is-3"> You have {this.state.user.trips.length} trip</h3>
        </div>
        <h2 className="title is-2"> Gems</h2>
        <div className="columns is-multiline">
          {this.state.user.gems.map(gem =>
            <div  key={gem._id} className="column is-one-quarter">
              <Link  to={`/gems/${gem._id}`} >
                <h4 className="title is-4">{gem.name}</h4>
                <figure className="image">
                  <img src={gem.image} alt={gem.name} />
                </figure>

              </Link>
            </div>
          )}
        </div>
        <h2 className="title is-2"> Trips</h2>
        <div className="columns is-multiline">
          {this.state.user.trips.map(trip =>
            <div key={trip._id} className="column is-one-quarter">
              <Link to={`/trips/${trip._id}`} >
                <h4 className="title is-4">{trip.name}</h4>
                <figure className="image">
                  <img src={trip.image} alt={trip.name} />
                </figure>
              </Link>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default UserShow
