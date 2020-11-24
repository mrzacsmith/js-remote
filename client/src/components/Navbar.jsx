import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  return (
    <nav>
      <h2>js remote jobs</h2>
      {!isAuthenticated && <p onClick={() => loginWithRedirect()}>sign in</p>}
      {isAuthenticated && <p onClick={() => logout()}>sign out</p>}
    </nav>
  )
}

export default Navbar
