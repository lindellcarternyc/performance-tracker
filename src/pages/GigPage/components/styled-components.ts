import styled from 'styles/styled-components'

export const Wrapper = styled.div`
  top: 25%;
  position: relative;
  transform: translateY(-50%);
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.accent};
  text-align: center;
  margin-bottom: 0.5rem;
`

export const DetailWrapper = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
`

export const DetailText = styled.p`
  width: 100%;
  padding: 0 0.25rem;
`

export const DetailTitle = styled(DetailText)`
  text-align: right;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: bold;
`
