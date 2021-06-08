import multicall from 'utils/multicall'
import referralsABI from 'config/abi/referral.json'
import { getReferralsAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'
import { getBalanceNumber } from 'utils/formatBalance'

// Thunks
const fetchReferralInfo = async (account: string) => {
  const referralAddress = getReferralsAddress()

  const calls = [
    {
      address: referralAddress,
      name: 'getReferrer',
      params: [account],
    },
    {
      address: referralAddress,
      name: 'referralsCount',
      params: [account],
    },
    {
      address: referralAddress,
      name: 'totalReferralCommissions',
      params: [account],
    },
  ]

  const [referrer, referralsCount, totalReferralCommissions] = await multicall(referralsABI, calls)
  return {
    referrer: referrer[0],
    referralsCount: new BigNumber(referralsCount[0]._hex).toString(),
    totalReferralCommissions: getBalanceNumber(new BigNumber(totalReferralCommissions[0]._hex), 18),
  }
}

export default fetchReferralInfo
