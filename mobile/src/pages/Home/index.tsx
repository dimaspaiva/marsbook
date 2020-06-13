import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'

const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text style={{ color: '#eaeaea' }}>Home view</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home
