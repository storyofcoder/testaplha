import { notify } from '../../components/atoms/Notification/Notify'
import * as types from './types'

const signIn = (walletAddress) => async (dispatch, getState) => {
  const {
    auth: { redirectCallback },
  } = getState()
  localStorage.setItem('walletAddress', walletAddress)
  try {
  } catch (e) {
    notify.error('Failed to signin', 'Please connect your wallet again')
  }
}

const logoutUser = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_USER })
}

export { signIn, logoutUser }
