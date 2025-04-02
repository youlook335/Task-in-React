import React, { useState } from 'react'

const Login = () => {

    const [email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')

  return (
    <>
      <div className='min-h min-w flex justify-center place-content-center'>
        <div>
            <input placeholder='Enter your email' required type="email" />
            <input placeholder='Enter a Password'  required type="password" />
            <button>Login</button>
        </div>
      </div>
    </>
  )
}

export default Login
