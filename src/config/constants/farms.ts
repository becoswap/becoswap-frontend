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
    pid: 10,
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
  {
    pid: 11,
    lpSymbol: 'TUSD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xe6003806530d318B86093004Ed5bd67727125ADd',
    },
    token: tokens.tusd,
    quoteToken: tokens.busd,
  },

  {
    pid: 12,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x60a8baDa3bd905927c3650aB84dE6550939c5349',
    },
    token: tokens.dai,
    quoteToken: tokens.busd,
  },

  {
    pid: 13,
    lpSymbol: 'UST-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2568aB07674AAC2C3d2bc1690882EceB143659D7',
    },
    token: tokens.ust,
    quoteToken: tokens.busd,
  },

  // 12/06/2021
  {
    pid: 14,
    lpSymbol: 'trx-bnb LP',
    lpAddresses: {
      97: '',
      56: '0xc58e08C79B7e92c66cEbA9200CBEC19aA293505E',
    },
    token: tokens.trx,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 15,
    lpSymbol: 'xrp-bnb LP',
    lpAddresses: {
      97: '',
      56: '0xA32Cb4D45712689728a040ced9c1d0636E2E9C07',
    },
    token: tokens.xrp,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 16,
    lpSymbol: 'uni-bnb LP',
    lpAddresses: {
      97: '',
      56: '0x3D404504E85EECE2cF000c0ea60f1d6648Cd18Ee',
    },
    token: tokens.uni,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 17,
    lpSymbol: 'doge-bnb LP',
    lpAddresses: {
      97: '',
      56: '0xdD7CE91622ba5A943af5B072692e046d7A2A700b',
    },
    token: tokens.doge,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 18,
    lpSymbol: 'ltc-bnb LP',
    lpAddresses: {
      97: '',
      56: '0x925915a3463Bc267A72Ef9e0F154f9632bb13283',
    },
    token: tokens.ltc,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 19,
    lpSymbol: 'vai-busd LP',
    lpAddresses: {
      97: '',
      56: '0x3d948e9Dd5a626e6C70Ddbc0d96fFa48fC07Da59',
    },
    token: tokens.vai,
    quoteToken: tokens.busd,
  }
]

export default farms
