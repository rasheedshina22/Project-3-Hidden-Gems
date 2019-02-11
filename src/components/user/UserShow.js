import React from 'react'
import axios from 'axios'

class UserShow extends React.Component {
  constructor(){
    super()

    this.state = {

    }


  }



  componentDidMount() {
    axios.get(`/api/user/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  render(){
    console.log(this.state)
    if(!this.state.user) return null
    const { username } = this.state.user
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1"> {username} </h1>
        </div>
      </section>
    )
  }
}

export default UserShow
