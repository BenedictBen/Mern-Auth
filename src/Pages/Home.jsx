import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home

  <Link to="/dashboard">
      <h1>Click me</h1>
  </Link>
    </div>
  )
}

export default Home