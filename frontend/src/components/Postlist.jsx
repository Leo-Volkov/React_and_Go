import React from 'react'
import PostItem from './PostsItem'
import '../style/App.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function Postlist({ posts, title, remove }) {
  if (!posts.length) {
    return (
      <div className="Postlist">
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      </div>
    )
  }
  return (
    <div className="Postlist">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} post={post} index={index} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
