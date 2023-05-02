import React from 'react'
import CommentsComp from './CommentsComp'
import CommentFormComp from './CommentFormComp'



const commentsectionComp = () => {
  return (
    <section className='comment-section'>
    <CommentsComp />
    <CommentFormComp />
    </section>
  )
}

export default commentsectionComp