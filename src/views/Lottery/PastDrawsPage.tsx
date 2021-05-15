import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@becoswap-libs/uikit'
import ClaimPrizesCard from './components/ClaimPrizesCard'

const Cards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`



const PastDrawsPage: React.FC = () => {
  return (
    <>
      <ClaimPrizesCard />
      <Cards>
        {/* <PastLotteryRoundViewer />
        <SecondCardColumnWrapper>
          <PastDrawsHistoryCard />
          <BunnyImageWrapper>
            <img src="/images/pancake-lottery-bunny.png" alt="lottery bunny" />
          </BunnyImageWrapper>
        </SecondCardColumnWrapper> */}
      </Cards>
    </>
  )
}

export default PastDrawsPage
