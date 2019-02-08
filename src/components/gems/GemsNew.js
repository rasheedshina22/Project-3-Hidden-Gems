import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import GemsForm from './GemsForm'

class GemsNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        location: {}
      },
      error: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const error = null
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/gems', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/gems'))
      .catch(() => this.setState({ error: 'An error occured' }))
  }

  render() {
    return(
      <main className="section">
        <div className="container">
          <h2 className="title">New Gem</h2>
          {this.state.error && <div className="notification is-danger">{this.state.error}</div>}
          <GemsForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default GemsNew
