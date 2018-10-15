import styled from 'styles/styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  justify-content: space-between;
`

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.accent};
  font-weight: 100;
  font-size: 1.5rem;
`

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 0.25rem;
  color: ${( { theme }) => theme.accent};
  background-color: ${({ theme }) => theme.background};
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`

export {
  Wrapper, Title, Button
}