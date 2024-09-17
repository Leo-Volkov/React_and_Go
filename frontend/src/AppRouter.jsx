import React from 'react'
import { BrowserRouter, Link, Route, Routes, Switch, Redirect } from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'
import PostIdPage from './pages/PostIdPage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<PostIdPage />} />
    </Routes>
  )
}
