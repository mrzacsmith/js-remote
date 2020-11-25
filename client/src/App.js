import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Navbar from './components/Navbar'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background: ${(pr) => pr.theme.bodyColor};
  height: 100vh;
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`

const App = () => {
  const { isLoading, isAuthenticated } = useAuth0()

  if (isLoading) return <div>Loading ... </div>

  return (
    <StyledDiv>
      <Navbar />
      <div className='container'>
        <h2>jobs ........</h2>
      </div>
    </StyledDiv>
  )
}

export default App
