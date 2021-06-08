import { BaseLayout, Flex, Heading } from '@becoswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import Page from 'components/layout/Page'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'
import React, { useEffect } from 'react'
import { useAppDispatch } from 'state'
import { fetchReferralInfoAsync } from 'state/referrals'
import styled from 'styled-components'
import MyReferralLinkCard from './components/MyReferralLinkCard'
import TotalCommissionCard from './components/TotalCommissionCard'
import TotalReferralCard from './components/TotalReferralCard'
import UnlockWalletCard from './components/UnlockWalletCard'

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Referrals: React.FC = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (account) {
      dispatch(fetchReferralInfoAsync(account))
    }
  }, [dispatch, account])

  return (
    <>
      <PageHeader>
        <Flex justifyContent="space-between" flexDirection={['column', null, 'row']}>
          <Flex flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" size="xxl" color="secondary" mb="24px">
              {t('Referels')}
            </Heading>
            <Heading size="md" color="text">
              {t('Share the referral link below to invite your friends and earn 1% of your friends earnings FOREVER!')}
            </Heading>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        {!account ? (
          <UnlockWalletCard />
        ) : (
          <div>
            <Cards>
              <TotalReferralCard />
              <TotalCommissionCard />
            </Cards>
            <MyReferralLinkCard />
          </div>
        )}
      </Page>
    </>
  )
}

export default Referrals
