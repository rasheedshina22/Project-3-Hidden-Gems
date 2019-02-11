import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'
import GemCard from './GemCard'
import GemsSearchForm from './GemsSearchForm'

class GemsIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      gems: [],
      category: 'All',
      location: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/gems')
      .then(res => this.setState({ gems: res.data }))
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  filteredGems() {
    const re = new RegExp(this.state.location, 'i')
    if(!this.state.category && !this.state.location) return this.state.gems
    return this.state.gems.filter(gem => {
      return re.test(gem.address) && (this.state.category === 'All' || gem.category === this.state.category)
    })
  }

  render() {
    console.log(this.state)
    if(!this.state.gems) return (
      <section className="section">
        <div className="container">
          <h4 className="title is-4">Loading...</h4>
        </div>
      </section>
    )
    console.log('index/gems state is -',this.state.gems)
    console.log('filteredGems state is -',this.state.filteredGems)
    return (

      <section className="section">
        <div className="container">
          {Auth.isAuthenticated() && <header>
            <Link to="/gems/new" className="button is-primary is-rounded">Add gem</Link>
            <hr />
          </header>}

          <GemsSearchForm handleChange={this.handleChange} />

          <div className="columns is-multiline">
            {this.filteredGems().map(gem =>
              <div key={gem._id} className="column is-one-third">
                <GemCard {...gem} />

              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default GemsIndex
