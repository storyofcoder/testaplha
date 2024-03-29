import { useEffect, useRef, useState } from "react";
import { useWeb3React } from "@web3-react/core";

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useActiveWeb3React = () => {
  const { library, chainId, ...web3React } = useWeb3React()
  const refEth = useRef(library)
  const [provider, setprovider] = useState(library )

  useEffect(() => {
    if (library !== refEth.current) {
      setprovider(library)
      refEth.current = library
    }
  }, [library])

  return { library: provider, chainId: chainId , ...web3React }
}

export default useActiveWeb3React
