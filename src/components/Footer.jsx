import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; Code Shock Inc</p>
      <p>Disrupting the status code!</p>
      <div>
        <ul>
          <li>something</li>
          <li>something</li>
          <li>something</li>
        </ul>
        <ul>
          <li>something</li>
          <li>something</li>
          <li>something</li>
        </ul>
        <ul>
          <li>something</li>
          <li>something</li>
          <li>something</li>
        </ul>
      </div>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  color: ${(pr) => pr.theme.bodyColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 8vh; */
  background: ${(pr) => pr.theme.navColor};
  p {
    margin: 10px 0 0 0;
    padding-bottom: 0;
    font-size: 1.2rem;
  }
  div {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
  ul {
    list-style: none;
  }
  li {
    line-height: 1.4;
  }
`
