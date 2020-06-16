import React, { createContext, useState } from 'react'

interface LoginContextData {
  user: User
  sigIn(user: User): void
  reset(): void
}

interface User {
  id: number
  name: string
  balance: number
  role?: number
  flight?: object
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

export const LoginProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User)

  function sigIn(user: User) {
    setUser(user)
  }

  function reset() {
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
