import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import TripsForm from './TripsForm'

class TripsEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {

      },
      errors: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleMultiChange = this.handleMultiChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleMultiChange(e) {
    const gems = e.map(gem => gem.value)
    const data = {...this.state.data, gems: gems }
    const errors = { ...this.state.errors, gems: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios
      .put(`/api/trips/${this.props.match.params.id}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/trips'))
      .catch((err) => this.setState({errors: err.response.data}))
  }

  componentDidMount() {
    axios
      .get(`/api/trips/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))

    axios.get('/api/gems')
      .then(res => {
        const options = res.data.map(gem => {
          return {'value': gem._id, 'label': gem.name}
        })
        this.setState({ options })
      })
  }

  render() {
    return(
      <div className="section">
        <TripsForm
          data={this.state.data}
          errors={this.state.errors}
          options = {this.state.options}
          handleChange={this.handleChange}
          handleMultiChange={this.handleMultiChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default TripsEdit
