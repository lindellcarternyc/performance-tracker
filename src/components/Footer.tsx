import * as React from 'react'
import styled from 'styles/styled-components'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.accent};
  padding: 0.25rem 0.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`

const Footer: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <p>Footer</p>
    </Wrapper>
  )
}

export default Footer