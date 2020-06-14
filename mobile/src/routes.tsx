import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'
import Home from './pages/Home'
import Rockets from './pages/Rockets'
import Purchase from './pages/Purchase'
import AwaitFlight from './pages/AwaitFlight'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{ cardStyle: { backgroundColor: '#333333' } }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Rockets" component={Rockets} />
        <AppStack.Screen name="Purchase" component={Purchase} />
        <AppStack.Screen name="AwaitFlight" component={AwaitFlight} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
