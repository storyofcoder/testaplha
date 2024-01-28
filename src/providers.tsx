import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { GnosisSafe } from '@web3-react/gnosis-safe'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { Connector } from '@web3-react/types'
import { WalletConnect } from '@web3-react/walletconnect'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'
import React, { ReactNode, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { Provider, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './components/atomsV2/Theme'
import { AuthProvider } from './contexts/Auth'

import {
  coinbaseWallet,
  coinbaseWalletHooks,
  getConnectorForWallet,
  getConnectors,
  gnosisSafe,
  gnosisSafeHooks,
  injected,
  injectedHooks,
  network,
  networkHooks,
  walletConnect,
  walletConnectHooks
} from 'connectors'

const defaultConnectors: [GnosisSafe | MetaMask | WalletConnect | CoinbaseWallet | Network, Web3ReactHooks][] = [
  [gnosisSafe, gnosisSafeHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [walletConnect, walletConnectHooks],
  [injected, injectedHooks],
  [network, networkHooks],
]

const StyledThemeProvider = (props) => {
  const [themeChoice, setThemeChoice] = useState('system')
  const { resolvedTheme = 'dark' } = useNextTheme()
  useEffect(() => {
    const _choice = localStorage.getItem('theme')

    setThemeChoice(_choice)
  }, [setThemeChoice])
  return <ThemeProvider defaultTheme={themeChoice} theme={resolvedTheme === 'dark' ? dark : light} {...props} />
}

const connect = async (connector: Connector) => {
  try {
    if (connector.connectEagerly) {
      await connector.connectEagerly()
    } else {
      await connector.activate()
    }
  } catch (error) {
    console.debug(`web3-react eager connection error: ${error}`)
  }
}

function Web3Provider({ children }: { children: ReactNode }) {
  const [connectors, setConnectors]: any = useState(defaultConnectors)
  const selectedWallet = useSelector((state: any) => state.auth.selectedWallet)

  useEffect(() => {
    const _connectors = getConnectors(selectedWallet)
    setConnectors(_connectors)
    const isMetaMask = !!window.ethereum?.isMetaMask

    connect(network)

    if (isMobile && isMetaMask) {
      injected.activate()
    } else if (selectedWallet) {
      //@ts-ignore
      connect(getConnectorForWallet(selectedWallet))
    }
  }, [selectedWallet]) // eslint-disable-line react-hooks/exhaustive-deps

  return <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
}

const Providers = ({ children, store, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient())

  // @ts-ignore
  return (
    <Provider store={store}>
      <Web3Provider>
        <AuthProvider>
          <NextThemeProvider>
            <StyledThemeProvider>
              <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                  {children}
                </Hydrate>
              </QueryClientProvider>
            </StyledThemeProvider>
          </NextThemeProvider>
        </AuthProvider>
      </Web3Provider>
    </Provider>
  )
}

export default Providers
