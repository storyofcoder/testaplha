import React, { useEffect, useState } from 'react'
import { notify } from '../components/atoms/Notification/Notify'
import { signMessage } from '../utils/web3react'
import useActiveWeb3React from './useActiveWeb3React'

const useSignature = () => {
  const [signature, setSignature] = useState(null)
  const { library, account } = useActiveWeb3React()


  const getSignature = async () => {
    if (signature) return signature
    try {
      const _signature = await signMessage(library, account, `Verify your account: ${account}`)
      setSignature(_signature);

      return _signature
    } catch (e) {
      notify.error('You rejected or cancelled the transaction', '')
    }
  }
  return [signature, getSignature]
}

export default useSignature
