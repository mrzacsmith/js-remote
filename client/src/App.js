import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import Navbar from './components/Navbar'
import styled from 'styled-components'
import Jobs from './components/Jobs'

const App = () => {
  const { isLoading, isAuthenticated } = useAuth0()
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=javascript&location=remote&page=1`
      )
      .then((res) => {
        setJobs(res.data)
      })
      .catch((err) => console.log(err.message))
  }, [])

  if (isLoading) return <LoadingDiv>Loading ... </LoadingDiv>

  return (
    <StyledDiv>
      <Navbar />
      <div className='container'>
        <Jobs jobs={jobs} />
      </div>
    </StyledDiv>
  )
}

export default App

const StyledDiv = styled.div`
  background: ${(pr) => pr.theme.bodyColor};
  height: 100vh;
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`

const LoadingDiv = styled.div`
  width: 200px;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
