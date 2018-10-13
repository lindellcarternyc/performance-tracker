import * as React from 'react'

import styled from 'styles/styled-components'

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.accent};
  font-weight: 100;
  font-size: 1.5rem;
`

const Header: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <Title>Performance Tracker</Title>
    </Wrapper>
  )
}

export default Header