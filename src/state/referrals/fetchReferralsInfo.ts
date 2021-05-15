import multicall from "utils/multicall"
import referralsABI from "config/abi/referral.json"
import { getReferralsAddress } from "utils/addressHelpers"


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
      }
    ]
  
    const [referrer, referralsCount, totalReferralCommissions] = await multicall(referralsABI, calls)
  
    return {
      referrer,
      referralsCount,
      totalReferralCommissions
    }
}

export default fetchReferralInfo;