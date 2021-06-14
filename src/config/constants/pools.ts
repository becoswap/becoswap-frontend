import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.beco,
    earningToken: tokens.beco,
    contractAddress: {
      97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9',
      56: '0x2aE8E3166fF75aF8aBB9bea2D453F084cBcd8FDA',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
