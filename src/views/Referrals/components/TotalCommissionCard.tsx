import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Text } from '@becoswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetReferralInfo } from 'state/hooks'

const StyledLotteryCard = styled(Card)``

const TotalCommissionCard = () => {
  const { t } = useTranslation()
  const referralsInfo = useGetReferralInfo()
  return (
    <StyledLotteryCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('Total Referral Commissions')}
        </Heading>
        <Text bold>{referralsInfo.totalReferralCommissions} BECO</Text>
      </CardBody>
    </StyledLotteryCard>
  )
}

export default TotalCommissionCard
