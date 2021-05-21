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
    pid: 6,
    lpSymbol: 'ETH-USDT LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x4C601D261710deA5703F48854AeA2788CE58b9B3',
    },
    token: tokens.usdt,
    quoteToken: tokens.eth,
  },
  {
    pid: 8,
    lpSymbol: 'BTC-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x37Ee3b988376040d9eDa49aC66A520beA3726E32',
    },
    token: tokens.btcb,
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
    pid: 7,
    lpSymbol: 'BTC-USDT LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xc175Bc83D4c9394A1D087D82d8e1D9564e65FCf1',
    },
    token: tokens.usdt,
    quoteToken: tokens.btcb,
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
  
  {
    pid: 9,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0adB576702b83a56B2124cc353BA5695ce4A2866',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
]

export default farms
