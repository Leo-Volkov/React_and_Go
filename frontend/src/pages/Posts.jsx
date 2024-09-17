import React, { useState, useRef, useMemo, useEffect } from 'react'
import axios from 'axios'
// import Counter from './components/Counter';
// import ClassCount from './components/ClassCount';
import MyBatton from '../components/UI/batton/MyButton'
import Postlist from '../components/Postlist'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/UI/MyModal/MyModal'
import Loading from '../components/UI/Loading/Loading'
import { usePosts } from '../hooks/usePosts'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'

import '../style/App.css'

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [madel, setMadel] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    setTotalCount(response.headers['x-total-count'])
  })

  useEffect(() => {
    fetchPost()
  }, [])

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setMadel(false)
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyBatton style={{ marginTop: 10 }} onClick={() => setMadel(true)}>
        Создать пост
      </MyBatton>
      <MyModal visible={madel} setVisible={setMadel}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0', width: '630px' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка: ${postError}</h1>}
      {isPostsLoading 
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
            <Loading />
          </div>
        : <Postlist remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />}
    </div>
  )
}

export default Posts
