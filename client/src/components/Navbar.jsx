import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  background: ${(pr) => pr.theme.navColor};
  p {
    font-size: 1.2rem;
    color: white;
    width: 140px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  p:hover {
    color: ${(pr) => pr.theme.bodyColor};
    background: #1d3557;
    border: 1px solid #e63946;
    border-radius: 6px;
  }
  div {
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  img {
    width: 48px;
    height: 48px;
  }
  h2 {
    margin-left: 2rem;
  }
`

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  return (
    <StyledNav>
      <h2>js remote jobs</h2>

      <div>
        <p>about us</p>

        {!isAuthenticated && <p onClick={() => loginWithRedirect()}>sign in</p>}
        {isAuthenticated && (
          <img src='data:image/png;base64,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' />
        )}
        {isAuthenticated && <p onClick={() => logout()}>sign out</p>}
      </div>
    </StyledNav>
  )
}

export default Navbar
