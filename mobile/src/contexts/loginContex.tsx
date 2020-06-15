import React, { createContext, useState } from 'react'
import api from '../services/api'
import { Alert } from 'react-native'

interface LoginContextData {
  user: User
  sigIn({ email, password }: { email: string; password: string }): Promise<any>
}

interface User {
  id: number
  name: string
  balance: number
  role?: number
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

export const LoginProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User)

  async function sigIn({
    email,
    password,
  }: {
    email: string
    password: string
  }) {
    const response = await api.post('users/login', {
      email,
      password,
    })

    if (!response.data) {
      return response
    }

    const user = response.data.user as User
    setUser(user)
  }

  return (
    <LoginContext.Provider
      value={{
        user: {
          id: user.id || -1,
          name: user.name || '',
          balance: user.balance || 0,
          role: user.role || 1,
        },
        sigIn,
      }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContext
