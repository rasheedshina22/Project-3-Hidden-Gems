import React from 'react'
import axios from 'axios'

import Map from './GemsMap'
import Comments from './GemsComments'
import Auth from '../../lib/Auth'


import {Link} from 'react-router-dom'

class GemsShow extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {},
      comments: [
        {
          _id: '5c5d6111b86379150bbe78a2',
          content: 'The Black Swan  is Amazing',
          user: {
            _id: '5c5d47d1fec6220d3fb62cdd',
            email: 'ed2',
            username: 'ed2',
            __v: 0
          },
          createdAt: '2019-02-08T10:59:29.074Z',
          updatedAt: '2019-02-08T10:59:29.074Z'
        },
        {
          _id: '5c5d6111b86379150bbe78a2',
          content: 'The Black Swan  is So Tasty!',
          user: {
            _id: '5c5d47d1fec6220d3fb62cdd',
            email: 'ed2',
            username: 'ed3',
            __v: 0
          },
          createdAt: '2019-02-08T10:59:29.074Z',
          updatedAt: '2019-02-08T10:59:29.074Z'
        },
        {
          _id: '5c5d6111b86379150bbe78a2',
          content: 'The Black Swan  is BADD',
          user: {
            _id: '5c5d47d1fec6220d3fb62cdd',
            email: 'ed2',
            username: 'ed4',
            __v: 0
          },
          createdAt: '2019-02-08T10:59:29.074Z',
          updatedAt: '2019-02-08T10:59:29.074Z'
        }
      ]
    }

    // this.handleDelete = this.handleDelete.bind(this)
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
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


  handleCommentChange(e) {
    const data = {...this.state.data, content: e.target.value }
    const error = null
    this.setState({ data, error })
  }


  handleCommentSubmit(e){
    e.preventDefault()
    axios
      .post(`/api/gems/${this.props.match.params.id}/comments/`,
        this.state.data,
        {headers: { Authorization: `Bearer ${Auth.getToken()}`}
        })
      .then(() => {
        const data = {...this.state.data, content: '' }
        const error = null
        this.setState({ data, error })
      })
      .then(() => this.props.history.push(`/gems/${this.props.match.params.id}`))
      .catch(() => this.setState({ error: 'An error occured' }))
  }


  componentDidMount() {
    axios.get(`/api/gems/${this.props.match.params.id}`)
      .then(res => this.setState({ gem: res.data }))
  }

  componentDidUpdate() {
    axios.get(`/api/gems/${this.props.match.params.id}`)
      .then(res => this.setState({ gem: res.data }))
  }

  render(){
    if(!this.state.gem) return null
    const { _id, name, image, category, description, user, location } = this.state.gem
    // const {comments} = this.state.comments
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
              <Comments
                {...this.state.gem}
                {...this.state.data}
                handleCommentChange ={this.handleCommentChange}
                handleCommentSubmit ={this.handleCommentSubmit}

              />
            </div>
            <div className="column">
              <div className="content">
                <h2 className="title is-4"> Location</h2>
                <Map
                  location ={location}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default GemsShow
