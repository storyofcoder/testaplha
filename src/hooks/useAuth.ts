import { useWeb3React } from '@web3-react/core'
import { coinbaseWallet, getConnectorForWallet } from 'connectors'
import { useCallback, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { notify } from '../components/atoms/Notification/Notify'
import { AuthContext } from '../contexts/Auth'

const useAuth = () => {
  const { connector } = useWeb3React()
  const dispatch = useDispatch()
  const authContext = useContext(AuthContext)
  const login = useCallback(
    async (connectorID) => {
      const connector = getConnectorForWallet(connectorID)
      if (connector) {
        try {
          await connector.activate()
          if (connector === coinbaseWallet) {
            window.location.reload()
          }
        } catch (error) {
          console.debug(`web3-react connection error: ${error}`)
          notify.error('Error connecting', 'The connection attempt failed, Please try again')
        }
      } else {
        notify.error('Unable to find connector', 'The connector config is wrong')
      }
    },
    [notify],
  )

  const logout = useCallback(() => {
    if (connector.deactivate) {
      connector.deactivate()

      // Coinbase Wallet SDK does not emit a disconnect event to the provider,
      // which is what web3-react uses to reset state. As a workaround we manually
      // reset state.
      if (connector === coinbaseWallet) {
        connector.resetState()
      }
    } else {
      connector.resetState()
    }
  }, [connector])

  return { login, logout, ...authContext }
}

export default useAuth
