import React, {useState} from 'react'
import '../style/App.css'
import MyButton from '../components/UI/batton/MyButton'
import { useNavigate } from 'react-router-dom'

export default function PostsItem(props) {

  const router = useNavigate()
  
  return (
    <div className="PostsItem">
      <div className='post__content'>
        <strong>{props.index + 1}. {props.post.title}</strong>
        <p>{props.post.body}</p>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router('/posts/' + props.post.id)}>Открыть</MyButton>
        <MyButton onClick={() => props.remove(props.post)} className="but">удалить</MyButton>
      </div>
    </div>
  )
}
