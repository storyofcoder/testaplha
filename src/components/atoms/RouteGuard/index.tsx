import { useRouter } from "next/router";
import { useEffect } from "react";

import useAuth from "../../../hooks/useAuth";

export const RouteGuard = ({ children }) => {
  const { isLoggedIn, loading }: any = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!isLoggedIn && !loading) {
      router.replace('/')
    }
  }, [isLoggedIn, loading])

  if (loading || !isLoggedIn) {
    return null;
  }
  return children
}
