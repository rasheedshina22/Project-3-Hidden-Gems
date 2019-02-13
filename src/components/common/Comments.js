import React from 'react'
import moment from 'moment'

import Auth from '../../lib/Auth'

const Comments = ({contentInput, comments, handleCommentDelete, handleCommentChange, handleCommentSubmit  }) => {
  return (
    <div className="comments">
      <h2 className="title is-title-light is-4"> Comments ({comments.length})</h2>
      {comments.map((comment, index) => {
        return (
          <div className="columns" key={index}>
            <div className="column is-2">
              <figure className="image">
                <img className="is-rounded" src={comment.user.image} alt={comment.name}/>
              </figure>
            </div>
            <div className="column is-8">
              <div>
                <p> <strong>{comment.user.username}</strong> </p>

                <p>{comment.content}</p>
              </div>
            </div>
            <div className="column">
              {Auth.canEdit(comment.user._id) &&
                <button className="button is-small delete-box" value={comment._id} onClick={handleCommentDelete}>
                  <i  className="fas fa-trash-alt"></i>
                </button>
              }
              <p className="delete-box is-size-7"> {moment(comment.createdAt).format('DD/MM/YYYY')}</p>
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
