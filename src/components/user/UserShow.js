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
      <div>
        <section className="section has-background-dark user-header">
          <div className="container">
            <hr/>
            <div className="columns is-centered">
              <div className="column is-vcentered is-4">
                <h1 className="title is-1 is-title-light has-text-white has-text-centered">{this.state.user.gems.length}</h1>
                <h6 className="title has-text-centered is-vcentered is-6 is-title-light has-text-white">gems</h6>
              </div>
              <div className="column is-4 is-flex is-horizontial-center">
                <figure className="image is-128x128">
                  <img className="is-rounded" src={this.state.user.image} alt={this.state.user.name}/>
                </figure>
                <h2 className="title has-text-centered is-vcentered is-2 has-text-white"> {username} </h2>
              </div>
              <div className="column is-4">
                <h1 className="title is-1 is-title-light has-text-white has-text-centered">{this.state.user.trips.length}</h1>
                <h6 className="title has-text-centered is-vcentered is-6 is-title-light has-text-white">trips</h6>
              </div>
            </div>
            <hr/>
          </div>
        </section>
        <div className="columns is-vcentered has-background-dark">
          <div className="column is-12 is-vcentered">
          </div>
          <div className="column is-12">
          </div>
        </div>
        <section className="section">
          <div className="container">
            <h3 className="title is-3 has-text-primary is-title-light"> Your Gems</h3>
            <hr/>
            <div className="columns is-multiline">
              {this.state.user.gems.map(gem =>
                <div  key={gem._id} className="column is-3">
                  <Link  to={`/gems/${gem._id}`}>
                    <div className="isImage">
                      <figure className="image is-4by3">
                        <img src={gem.image} alt={gem.name}  className="gemImage"/>
                        <div className="middle">
                          <div className="text">{gem.name}</div>
                          <div className="text">{gem.category}</div>

                        </div>
                      </figure>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div className="section">
              <h3 className="title is-3 has-text-primary is-title-light"> Your Trips</h3>
              <hr/>
              <div className="columns is-multiline">
                {this.state.user.trips.map(trip =>
                  <div key={trip._id} className="column is-3">
                    <Link to={`/trips/${trip._id}`}>
                      <div className="isImage">
                        <figure className="image is-4by3">
                          <img src={trip.image} alt={trip.name} className="gemImage"/>
                          <div className="middle">
                            <div className="text">{trip.name}</div>
                            <div className="text">{trip.category}</div>
                          </div>
                        </figure>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default UserShow
