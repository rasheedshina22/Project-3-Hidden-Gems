import React from 'react'
import moment from 'moment'
// import axios from 'axios'

import Auth from '../../lib/Auth'

// class Comments extends React.Component {
//   constructor(){
//     super()
//
//     this.state = {
//       data: {}
//     }
//
//     this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
//     this.handleCommentDelete = this.handleCommentDelete.bind(this)
//     this.handleCommentChange = this.handleCommentChange.bind(this)
//   }

// handleCommentChange(e) {
//   const data = {...this.state.data, content: e.target.value }
//   const error = null
//   this.setState({ data, error })
// }
//
//
// handleCommentSubmit(e){
//   e.preventDefault()
//   axios
//     .post(`/api/${this.props.show}/${this.props._id}/comments/`,
//       this.state.data,
//       {headers: { Authorization: `Bearer ${Auth.getToken()}`}
//       })
//     .then(() => {
//       const data = {...this.state.data, content: '' }
//       const error = null
//       this.setState({ data, error })
//     })
//     .then(() => this.props.history.push(`/${this.props.show}/${this.props._id}`))
//     .catch(() => this.setState({ error: 'An error occured' }))
// }
//
//
// handleCommentDelete(e){
//   console.log(e.target.value)
//   e.preventDefault()
//   axios
//     .delete(`/api/${this.props.show}/${this.props._id}/comments/${e.target.value}`,
//       {headers: { Authorization: `Bearer ${Auth.getToken()}`}
//       })
//     .then(() => this.props.history.push(`/${this.props.show}/${this.props._id}`))
//     .catch(() => this.setState({ error: 'An error occured' }))
// }
//
// componentDidMount() {
//   axios.get(`/api/${this.props.show}/${this.props._id}`)
//     .then(res => this.setState({ gems: res.data }))
// }

//
// render(){
//   if(!this.state.gems) return null

const Comments = ({contentInput, comments, handleCommentDelete, handleCommentChange, handleCommentSubmit, error  }) => {
  return (
    <div>
      <h2 className="title is-4"> Comments</h2>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <p> <strong>{comment.user.username}</strong> {comment.content} </p>
            {Auth.canEdit(comment.user._id) &&<button value={comment._id} onClick={handleCommentDelete}>Delete</button>}
            <p> {moment(comment.createdAt).format('DD/MM/YYYY')}</p>
            <hr/>
          </div>
        )
      })}
      <form onSubmit={handleCommentSubmit}>
        <textarea className="textarea" placeholder="Add your comments!" value={contentInput} onChange={handleCommentChange} rows="6"></textarea>
        <button className="button is-dark"> Add Commment </button>
      </form>
    </div>
  )

}




export default Comments
