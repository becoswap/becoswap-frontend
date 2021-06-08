import BigNumber from 'bignumber.js'
import { useEffect, useState } from 'react'
import { getBalanceNumber } from 'utils/formatBalance'

import { fetchPoolsTotalStaking } from '../state/pools/fetchPools'

/*
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
export const baseUrl = 'https://api.becoswap.info/api'

/* eslint-disable camelcase */

export interface ApiSummaryResponse {
  update_at: string
  data: Map<string, Summary>
}

export interface Summary {
  liquidity: string
}

export interface Stats {
  tvl: number
}

export const useGetStats = () => {
  const [data, setData] = useState<Stats | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/summary`)
        const responsedata: ApiSummaryResponse = await response.json()

        const stats: Stats = { tvl: 0 }
        // eslint-disable-next-line
        Object.keys(responsedata.data).forEach(function (key) {
          stats.tvl += parseInt(responsedata.data[key].liquidity)
        })

        const pools = await fetchPoolsTotalStaking()
        const becoPrice = parseInt(
          responsedata.data['0x55d398326f99059fF775485246999027B3197955_0x8fe4D28476cDd43D36a12EB47dC3243C1925f263']
            .price,
        )
        pools.forEach((pool) => {
          const total = getBalanceNumber(new BigNumber(pool.totalStaked), 18) / becoPrice
          stats.tvl += total
        })

        setData(stats)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}
