import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      error: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = null
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(() => this.setState({ error: 'An error occured' }))
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">

          <div className="container">
            <div className="column is-4 is-offset-4">
              {this.state.error && <div className="notification is-danger">{this.state.error}</div>}
              <h3 className="title has-text-centered">Register</h3>
              <div className="box">
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                      <input
                        className="input"
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                        value={this.state.data.username || ''}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        type="email"
                        className="input"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={this.state.data.email || ''}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        className="input"
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.data.password || ''}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control">
                      <input
                        className="input"
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={this.handleChange}
                        value={this.state.data.passwordConfirmation || ''}
                      />
                    </div>
                  </div>

                  <button className="button is-block is-info is-medium is-fullwidth">Register</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Register
