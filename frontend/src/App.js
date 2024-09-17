import React, { useState, useRef, useMemo, useEffect } from 'react'
import './style/App.css'
import { BrowserRouter, Link, Route, Routes, Switch, Redirect } from 'react-router-dom'
import MyNavbar from './components/UI/navbar/MyNavbar'

import AppRouter from './AppRouter'

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
