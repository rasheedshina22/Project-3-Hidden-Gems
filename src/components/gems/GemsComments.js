import React from 'react'
import moment from 'moment'

const GemsComments = ({comments}) => {
  console.log(comments)
  return (
    <div>
      <h2 className="title is-4"> Comments</h2>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <p> <strong>{comment.user.username}</strong> {comment.content} </p>
            <p> {moment(comment.createdAt).format('DD/MM/YYYY')}</p>
          </div>
        )
      })}
      <button className="button is-dark"> Add Commment </button>
    </div>

  )
}

export default GemsComments
