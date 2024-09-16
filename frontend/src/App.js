import React, { useState, useRef, useMemo, useEffect } from 'react'
import axios from 'axios'
// import Counter from './components/Counter';
// import ClassCount from './components/ClassCount';
import MyBatton from './components/UI/batton/MyButton'
import Postlist from './components/Postlist'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/MyModal/MyModal'
import Loading from './components/UI/Loading/Loading'
import { usePosts } from './hooks/usePosts'
import PostService from './API/PostService'

import './style/App.css'

function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [madel, setMadel] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll()
    setPosts(response.data)
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
      {isPostsLoading 
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
            <Loading />
          </div>
        : <Postlist remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />}
    </div>
  )
}

export default App
