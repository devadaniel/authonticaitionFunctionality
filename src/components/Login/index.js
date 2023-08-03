// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const onSuccessGetJwtToken = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const onClickUser = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSuccessGetJwtToken(data.jwt_token)
    }
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="please-login-container">
      <h1>Please Login</h1>
      <button className="button" type="button" onClick={onClickUser}>
        Login with Sample creds
      </button>
    </div>
  )
}

export default Login
