import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Navbar from './components/Navbar'

const App = () => {
  const { isAuthenticated } = useAuth0()
  return (
    <div>
      <Navbar />
      <h1>js remote </h1>
    </div>
  )
}

export default App
