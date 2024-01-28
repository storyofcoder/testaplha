/**
 * List of all the networks supported
 */
export enum SupportedChainId {
  MAINNET = 1,
  RINKEBY = 4,
  BINANCE = 56,
  BINANCE_TESTNET = 97,
}

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.MAINNET]: 'mainnet',
  [SupportedChainId.RINKEBY]: 'rinkeby',
}

export const CHAIN_IDS_TO_NAMES_HYPHEN = {
  [SupportedChainId.MAINNET]: 'eth',
  [SupportedChainId.RINKEBY]: 'rinkeby',
}

export const BLOCK_EXPLORER = {
  [SupportedChainId.MAINNET]: 'https://etherscan.io/',
  [SupportedChainId.RINKEBY]: 'https://rinkeby.etherscan.io/',
}

export const CHAIN_INFO = {
  [SupportedChainId.MAINNET]: {
    explorer: BLOCK_EXPLORER[SupportedChainId.MAINNET],
    label: 'Ethereum',
    // logoUrl: ethereumLogoUrl,
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  },
  [SupportedChainId.RINKEBY]: {
    explorer: BLOCK_EXPLORER[SupportedChainId.RINKEBY],
    label: 'Rinkeby',
    // logoUrl: ethereumLogoUrl,
    nativeCurrency: { name: 'Rinkeby Ether', symbol: 'rETH', decimals: 18 },
  },
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  (id) => typeof id === 'number',
) as SupportedChainId[]

export const TEST_NET_CHAIN_IDS = [1, 56, 4, 97]

export const MAIN_NET_CHAIN_IDS = [1, 56]
