import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'
import TripCard from './TripCard'
import TripsSearchForm from './TripsSearchForm'

class TripsIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      trips: [],
      filteredTrips: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    axios.get('/api/trips')
      .then(res => this.setState({ trips: res.data, filteredTrips: res.data }))
  }

  handleSearch(e) {
    if(e.target.value !== '') {
      const getTripCategory = this.state.filteredTrips.filter(trip =>
        e.target.value === trip.category)
      this.setState({ trips: getTripCategory })
    } else {
      this.setState({ trips: this.state.filteredTrips })
    }
  }

  render() {

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
            <Link to="/trips/new" className="button is-primary is-rounded">Add trips</Link>
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
