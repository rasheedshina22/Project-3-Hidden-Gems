import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'
import TripCard from './TripCard'
import TripsSearchForm from './TripsSearchForm'

class TripsIndex extends React.Component {

  constructor() {
    super()
    this.state = { trips: null }
  }

  componentDidMount() {
    axios.get('/api/trips')
      .then(res => this.setState({ trips: res.data }))
  }

  // handleSearch(e) {
  // handleSearch for DROP DOWN Category
  // }

  render() {
    console.log('index/trips state is ----->',this.state.data)

    if(!this.state.trips) return (
      <section className="section">
        <div className="container">
          <h4 className="title is-4">Loading...</h4>
        </div>
      </section>
    )
    return (

      <section className="section">
        <div className="container">
          {Auth.isAuthenticated() && <header>
            <Link to="/trips/new" className="button is-primary">Add trips</Link>
            <hr />
          </header>}

          <TripsSearchForm handleSearch={this.handleSearch}/>

          <div className="columns is-multiline">
            {this.state.trips.map(trip =>
              <div key={trip._id} className="column is-one-third">
                <TripCard {...trip} />

              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default TripsIndex
