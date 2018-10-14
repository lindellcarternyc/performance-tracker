import * as React from 'react'

import { DetailText, DetailTitle, DetailWrapper} from './styled-components'

const Detail: React.SFC<{title: string, text: string}> = ({ title, text }) => {
  return (
    <DetailWrapper>
      <DetailTitle>{title}:</DetailTitle>
      <DetailText>{text}</DetailText>
    </DetailWrapper>
  )
}

export default Detail