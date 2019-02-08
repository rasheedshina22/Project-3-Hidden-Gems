import React from 'react'
import axios from 'axios'

import Map from './GemsMap'

import {Link} from 'react-router-dom'

class GemsShow extends React.Component {
  constructor(){
    super()

    this.state = {

    }

    // this.handleDelete = this.handleDelete.bind(this)
  }

  // handleDelete(){
  //   axios
  //     .delete(`/api/gems/${this.props.match.params.id}`,{
  //     })
  //     .then(() => {
  //       this.props.history.push('/gems')
  //     })
  //     .catch(err => console.log(err))
  //
  // }

  componentDidMount() {
    axios.get(`/api/gems/${this.props.match.params.id}`)
      .then(res => this.setState({ gem: res.data }))
  }

  render(){
    console.log(this.state)
    if(!this.state.gem) return null
    const { _id, name, image, category, description, user } = this.state.gem
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1"> {name} </h1>
          <h4 className="title is-4">Added by: {user.username} </h4>
          <hr />
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className="column">
              <div className="content">
                <h4 className="title is-4">Category: {category}</h4>
                <h4 className="title is-4">Description:</h4>
                <p> {description}</p>
                <hr />
                <Link to={`/gems/${_id}/edit`} className="button is-dark" >Edit </Link>
                <hr />
                <button className="button is-dark" onClick={this.handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <div className="columns">
            <div className="column">
              <h4 className="title is-4">Comments</h4>
            </div>
            <div className="column">
              <div className="content">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default GemsShow
