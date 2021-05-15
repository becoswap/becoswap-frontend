import tokens from './tokens'
import farms from './farms'
import { Ifo, Token } from './types'

const cakeBnbLpToken: Token = {
  symbol: farms[1].lpSymbol,
  address: farms[1].lpAddresses,
  decimals: 18,
}

const ifos: Ifo[] = [
  {
    id: 'horizon',
    address: '0x6137B571f7F1E44839ae10310a08be86D1A4D03B',
    isActive: true,
    name: 'Horizon Protocol (HZN)',
    poolBasic: {
      saleAmount: '3,000,000 HZN',
      raiseAmount: '$750,000',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '7,000,000 HZN',
      raiseAmount: '$1,750,000',
      cakeToBurn: '$875,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: tokens.beco,
    releaseBlockNumber: 6581111,
    campaignId: '511090000',
    articleUrl: 'https://pancakeswap.medium.com/horizon-protocol-hzn-ifo-to-be-hosted-on-pancakeswap-51f79601c9d8',
    tokenOfferingPrice: 0.25,
    isV1: false,
  },


]

export default ifos
