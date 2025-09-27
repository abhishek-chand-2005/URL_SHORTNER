import LoginForm from '../components/loginForm'
import RegisterForm from '../components/registerForm'
import { useState } from 'react'

const AuthPage = () => {
    const [login, setLogin] = useState(true)
  return (
   <div>        
            {login ? <RegisterForm state={setLogin} /> : <LoginForm state={setLogin} />}
   </div>
  )
}

export default AuthPage