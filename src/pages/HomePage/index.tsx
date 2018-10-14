import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styles/styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.accent};
  text-align: center;
`
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.accent}
`

const HomePage: React.SFC<{}> = () => {
  return (
    <>
      <Title>Home Page</Title>
      <StyledLink to='/gigs'>Go to Calendar</StyledLink>
    </>
  )
}

export default HomePage