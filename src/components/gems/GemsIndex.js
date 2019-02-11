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
      filteredGems: []
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    axios.get('/api/gems')
      .then(res => this.setState({ gems: res.data, filteredGems: res.data }))
  }

  handleSearch(e) {
    if(e.target.value !== '') {
      const getCategory = this.state.filteredGems.filter(gem =>
        e.target.value === gem.category)
      this.setState({ gems: getCategory })
    } else {
      this.setState({ gems: this.state.filteredGems })
    }
  }


  render() {
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

          <GemsSearchForm handleSearch={this.handleSearch}/>

          <div className="columns is-multiline">
            {this.state.gems.map(gem =>
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
