import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'

import PosteService from '../API/PostService'
import {useFetching} from '../hooks/useFetching'

import MyBatton from '../components/UI/batton/MyButton'
import Loading from '../components/UI/Loading/Loading'

 const PostIdPage = () => {

  const params = useParams()
  const [post, setPost] = useState({})
  const [fetching, isLoading, error] = useFetching(async () => {
    setPost(await PosteService.getById(params.id))
  })
  useEffect( () => {
    fetching()
  }, [] );  

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <MyBatton onClick={() => window.history.back()}>назад</MyBatton>
      {isLoading 
      ? <Loading /> 
      : <>
      <h1 style={{textAlign: 'center'}}>{ post.title }</h1>
      <h2  style={{textAlign: 'left', width: '100vw'}}>Страница поста {params.id}</h2>
      <p>{ post.body }</p>
      </>
      }
    </div>
  )
}


export default PostIdPage