import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      error: null
    }
    this.handleChange =  this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = null
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .post('/api/login', this.state.data)
      .then((res) => {
        Auth.setToken(res.data.token)
        Flash.setMessage('success', res.data.message)
        this.props.history.push('/')
      })
      .catch(() => this.setState({ error: 'An error occured' }))
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-3 is-offset-4">

              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              {this.state.error && <div className="notification is-danger">{this.state.error}</div>}

              <div className="box">
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <label className="label">Email</label>
                      <input
                        className="input"
                        name="email"
                        placeholder=" Your Email"
                        value={this.state.data.email || ''}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <label className="label">Password</label>
                      <input
                        type="password"
                        className="input"
                        name="password"
                        placeholder="Password"
                        value={this.state.data.password || ''}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <button className="button is-block is-info is-medium is-fullwidth">Login</button>
                </form>

              </div>
              <p className="has-text-grey">
                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                <a href="../">Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default Login
