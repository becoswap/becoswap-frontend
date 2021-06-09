import React from 'react'
import { Text } from '@becoswap-libs/uikit'
import { useTotalRewards } from 'hooks/useTickets'
import { getBalanceAmount } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/hooks'
import CardBusdValue from "./CardBusdValue"

const LotteryJackpot = () => {
  const rewards = useTotalRewards()
  const cakePriceBusd = usePriceCakeBusd()
  const rewardsBusd = rewards.multipliedBy(cakePriceBusd)
  return (
    <>
      <Text bold fontSize="24px" style={{ lineHeight: '1.5' }}>
        {getBalanceAmount(rewards).toJSON()} BECO
      </Text>
      {!cakePriceBusd.eq(0) && <CardBusdValue value={getBalanceAmount(rewardsBusd).toNumber()} />}
      <br />
    </>
  )
}

export default LotteryJackpot
