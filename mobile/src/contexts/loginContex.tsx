import React, { createContext, useState } from 'react'
import { Alert } from 'react-native'

interface LoginContextData {
  user: User
  sigIn({ email, password }: { email: string; password: string }): Promise<any>
  reset(): Promise<void>
}

interface User {
  id: number
  name: string
  balance: number
  role?: number
  flight?: object
}

interface SigInParams {
  email: string
  password: string
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

export const LoginProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User)

  function sigIn(user: User) {
    setUser(user)
    Alert.alert('info', JSON.stringify(user))
  }

  async function reset() {
    setUser({} as User)
  }

  return (
    <LoginContext.Provider
      value={{
        user,
        sigIn,
        reset,
      }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContext
