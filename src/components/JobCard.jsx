import React from 'react'
import styled from 'styled-components'

const JobCard = ({ job }) => {
  return (
    <StyledArticle>
      <div>
        <h3>{job.title}</h3>
        <p>{job.company}</p>
      </div>
      <p>{job.location}</p>
      <p className='apply-url'>
        More information and apply: <a href={job.url}>{job.company} </a>
      </p>
    </StyledArticle>
  )
}

export default JobCard

const StyledArticle = styled.article`
  max-width: 900px;
  width: 100%;
  padding: 10px;
  margin: 10px auto;
  border: 1px solid ${(pr) => pr.theme.hoverBorder};
  border-radius: 6px;
  div {
    h3,
    p {
      margin: 0;
    }
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
  .apply-url {
    text-align: center;
  }
  a {
    text-decoration: none;
  }
  p {
    margin: 0;
  }
`
