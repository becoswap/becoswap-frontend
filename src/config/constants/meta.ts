import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BecoSwap',
  description:
    'The most popular AMM on BSC by user count! Earn BECO through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BecoSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://becoswap.com/images/hero.jpg',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | BecoSwap',
  },
  '/competition': {
    title: 'Trading Battle | BecoSwap',
  },
  '/prediction': {
    title: 'Prediction | BecoSwap',
  },
  '/farms': {
    title: 'Farms | BecoSwap',
  },
  '/pools': {
    title: 'Pools | BecoSwap',
  },
  '/lottery': {
    title: 'Lottery | BecoSwap',
  },
  '/collectibles': {
    title: 'Collectibles | BecoSwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | BecoSwap',
  },
  '/teams': {
    title: 'Leaderboard | BecoSwap',
  },
  '/profile/tasks': {
    title: 'Task Center | BecoSwap',
  },
  '/profile': {
    title: 'Your Profile | BecoSwap',
  },
}
