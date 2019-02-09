import React from 'react'
import moment from 'moment'

const GemsComments = ({ comments, content, handleCommentChange, handleCommentSubmit}) => {
  return (
    <div>
      <h2 className="title is-4"> Comments</h2>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <p> <strong>{comment.user.username}</strong> {comment.content} </p>
            <p> {moment(comment.createdAt).format('DD/MM/YYYY')}</p>
            <hr/>
          </div>
        )
      })}
      <form onSubmit={handleCommentSubmit}>
        <textarea className="textarea" placeholder="Add your comments!" value={content} onChange={handleCommentChange} rows="6"></textarea>
        <button className="button is-dark"> Add Commment </button>
      </form>
    </div>

  )
}

export default GemsComments
