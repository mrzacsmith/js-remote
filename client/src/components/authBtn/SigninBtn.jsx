import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const SigninBtn = () => {
  const { loginWithRedirect } = useAuth0()

  return <button onClick={() => loginWithRedirect()}>sign in</button>
}

export default SigninBtn
