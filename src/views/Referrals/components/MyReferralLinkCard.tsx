import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex } from '@becoswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
import CopyToClipboard from './CopyClipload'

const StyledLotteryCard = styled(Card)``

const MyReferralLinkCard = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  const domain = 'https://becoswap.com/?ref='
  const referralLink = domain + account
  return (
    <StyledLotteryCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('My Referral Link')}
        </Heading>
        <Flex mb="32px">
          <CopyToClipboard toCopy={referralLink}>{referralLink}</CopyToClipboard>
        </Flex>
      </CardBody>
    </StyledLotteryCard>
  )
}

export default MyReferralLinkCard
