import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'

class GemsIndex extends React.Component {

  constructor() {
    super()
    this.state = { gems: null }
  }

  componentDidMount() {
    axios.get('/api/gems')
      .then(res => this.setState({ gems: res.data }))
  }

  render() {
    if(!this.state.gems) return (
      <section className="section">
        <div className="container">
          <h4 className="title is-4">Loading...</h4>
        </div>
      </section>
    )
    console.log('index/gems state is ----->',this.state.data)
    return (
      <section className="section">
        <div className="container">
          {Auth.isAuthenticated() && <header>
            <Link to="/gems/new" className="button is-primary">Add gem</Link>
            <hr />
          </header>}
          <div className="columns is-multiline">
            {this.state.gems.map(gem =>
              <div key={gem._id} className="column is-one-third">
                <Link to={`/gems/${gem._id}`}>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-header-title">{gem.name}</h4>
                    </div>
                    {gem.image && <div className="card-image">
                      <figure className="image">
                        <img src={gem.image} alt={gem.name} />
                      </figure>
                    </div>}
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default GemsIndex
