import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'BECO-USDT LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    token: tokens.beco,
    quoteToken: tokens.usdt,
  },

  {
    pid: 2,
    lpSymbol: 'BECO-USDT LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    token: tokens.beco,
    quoteToken: tokens.usdt,
  },

  // {
  //   pid: 3,
  //   lpSymbol: 'BECO-BNB LP',
  //   lpAddresses: {
  //     97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
  //     56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
  //   },
  //   token: tokens.beco,
  //   quoteToken: tokens.wbnb,
  // },


  // {
  //   pid: 376,
  //   lpSymbol: 'BECO-USDT LP',
  //   lpAddresses: {
  //     97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
  //   },
  //   token: tokens.beco,
  //   quoteToken: tokens.usdt,
  // },

  // {
  //   pid: 251,
  //   lpSymbol: 'BECO-BNB LP',
  //   lpAddresses: {
  //     97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
  //     56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  //   },
  //   token: tokens.beco,
  //   quoteToken: tokens.wbnb,
  // },

  // {
  //   pid: 264,
  //   lpSymbol: 'USDT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
  //   },
  //   token: tokens.usdt,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 262,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  //   },
  //   token: tokens.btcb,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 263,
  //   lpSymbol: 'ETH-USDT LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  //   },
  //   token: tokens.eth,
  //   quoteToken: tokens.usdt,
  // },

  // {
  //   pid: 310,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  //   },
  //   token: tokens.eth,
  //   quoteToken: tokens.usdt,
  // },

  // {
  //   pid: 375,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  //   },
  //   token: tokens.eth,
  //   quoteToken: tokens.usdt,
  // },
  // {
  //   pid: 374,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  //   },
  //   token: tokens.eth,
  //   quoteToken: tokens.usdt,
  // },

  // {
  //   pid: 373,
  //   lpSymbol: 'BTC-USDT LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  //   },
  //   token: tokens.eth,
  //   quoteToken: tokens.usdt,
  // },
]

export default farms
