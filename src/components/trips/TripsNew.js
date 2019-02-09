import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import TripsForm from './TripsForm'

class TripsNew extends React.Component {
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
      .post('/api/trips', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/trips'))
      .catch(() => this.setState({ error: 'An error occured' }))
  }

  componentDidMount() {
    axios.get('/api/gems')
      .then(res => {
        console.log(res)
        const options = res.data.map(gem => {
          return {'value': gem._id, 'label': gem.name}
        })
        console.log(options)
        this.setState({ options })
      })
  }


  render() {
    // console.log(this.state.gems)
    return(
      <main className="section">
        <div className="container">
          <h2 className="title">New Trip</h2>
          {this.state.error && <div className="notification is-danger">{this.state.error}</div>}
          <TripsForm
            data={this.state.data}
            options = {this.state.options}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default TripsNew
