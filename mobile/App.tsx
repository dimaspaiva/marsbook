import React from 'react'
import { StatusBar } from 'react-native'

import Routes from './src/routes'

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="#FF6666"
      />

      <Routes />
    </>
  )
}
export default App
