import React from 'react'
import '../style/App.css'

export default function PostsItem(props) {
 
  return (
    <div className="PostsItem">
      <div className='post__content'>
        <strong>{props.index + 1}. {props.post.title}</strong>
        <p>{props.post.body}</p>
      </div>
      <div className='post__btns'>
        <button onClick={() => props.remove(props.post)} className="but">удалить</button>
      </div>
    </div>
  )
}
