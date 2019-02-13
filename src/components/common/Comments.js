import React from 'react'
import moment from 'moment'

import Auth from '../../lib/Auth'

const Comments = ({contentInput, comments, handleCommentDelete, handleCommentChange, handleCommentSubmit  }) => {
  return (
    <div>
      <h2 className="title is-4"> Comments ({comments.length})</h2>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <div className="columns">
              <div className="column is-2">
                <figure className="image">
                  <img className="is-rounded" src={comment.user.image} alt={comment.name}/>
                </figure>



              </div>
              <div className="column is-8">
                <p> <strong>{comment.user.username}</strong> {comment.content} </p>

                <p> {moment(comment.createdAt).format('DD/MM/YYYY')}</p>
              </div>
              <div>
                {Auth.canEdit(comment.user._id) &&<button className=" button is-primary" value={comment._id} onClick={handleCommentDelete}>Delete</button>}
              </div>
            </div>
            <hr/>

          </div>
        )
      })}
      {!Auth.isAuthenticated() && <h6 className="title is-6"> Login to leave your comments</h6>}
      {Auth.isAuthenticated() &&
      <form onSubmit={handleCommentSubmit}>
        <textarea className="textarea" placeholder="Add your comments!" value={contentInput} onChange={handleCommentChange} rows="6"></textarea>
        <button className="button is-dark is-rounded"> Add Commment </button>
      </form>}
    </div>
  )
}

export default Comments
