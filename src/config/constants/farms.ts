import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'BECO-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x93bA7cA08fcB20d0a3381052B8c24bdFb0a9fec7',
    },
    token: tokens.beco,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BECO-USDT LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xA3Aa99b50946358b22523cd4A1fC8A29ce6Bee98',
    },
    token: tokens.beco,
    quoteToken: tokens.usdt,
  },
  {
    pid: 4,
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x587d26D8235C24DBA51CF4E6629d5327CF43Ae4C',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xDCca47bfFb79984D3Af9794fd178e4b30e1Cc79B',
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x1E544d8e50cC9585aed8e0d232EE403F5F4969A6',
    },
    token: tokens.usdc,
    quoteToken: tokens.busd,
  },
]

export default farms
