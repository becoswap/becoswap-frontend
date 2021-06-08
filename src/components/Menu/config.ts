import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.becoswap.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.becoswap.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: '/referrals',
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://becoswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://becoswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://becoswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://becoswap.info/accounts',
      },
    ],
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Launchpad',
    icon: 'IfoIcon',
    href: '/launchpad',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: 'https://docs.becoswap.com/products/nft-marketplace',
  },

  {
    label: 'Bridge',
    icon: 'BridgeIcon',
    href: 'https://docs.becoswap.com/products/cross-chain-bridge',
  },

  {
    label: 'Becochain',
    icon: 'ChainIcon',
    href: 'https://docs.becoswap.com/products/becochain',
  },

  {
    label: 'Stocks',
    icon: 'StockIcon',
    href: 'https://docs.becoswap.com/products/stocks',
  },

  {
    label: 'Supply Chain',
    icon: 'SupplyChainIcon',
    href: 'https://docs.becoswap.com/products/supplychain',
  },

  {
    label: 'Games',
    icon: 'NftIcon',
    href: 'https://docs.becoswap.com/products/games',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.becoswap.com/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://snapshot.org/#/becoswap.eth',
      },
      {
        label: 'Github',
        href: 'https://github.com/becoswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.becoswap.com',
      },
      {
        label: 'Blog',
        href: 'https://becoswap.medium.com',
      },
    ],
  },
]

export default config
