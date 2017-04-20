import axios from 'axios'
import createHistory from 'history/createBrowserHistory'
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types'

const history = createHistory()
const ROOT_URL = 'http://localhost:8090'

export function loginUser ({ email, password }) {
  return function (dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/login`, {email, password})
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER })

        // - Save the JWT token
        localStorage.setItem('token', response.data.token)

        // - redirect to the route '/chats'
        history.push('/chats')
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'))
      })
  }
}

export function authError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function logoutUser () {
  localStorage.removeItem('token')
  return {type: UNAUTH_USER}
}
