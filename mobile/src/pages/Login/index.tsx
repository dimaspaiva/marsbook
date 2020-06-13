import React, { useEffect, useState } from 'react'
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import global from '../styles-global'
import MainButton from '../../components/MainButton'

const Login = () => {
  const navigation = useNavigation()

  const [isKeyboard, setIsKeyboard] = useState(false)

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleKeyboardShow)
    Keyboard.addListener('keyboardDidHide', handleKeyboardHide)
  }, [])

  const handleKeyboardShow = () => {
    setIsKeyboard(true)
  }

  const handleKeyboardHide = () => {
    setIsKeyboard(false)
  }

  const handleLogin = () => {
    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
      <SafeAreaView style={global.container}>
        <View
          style={
            isKeyboard ? styles.logoContainerKeyboard : styles.logoContainer
          }>
          <Image
            style={isKeyboard ? styles.logoKeyboard : styles.logo}
            source={require('../../img/rocket-logo.png')}
          />
          <Text style={isKeyboard ? styles.sloganKeyboard : global.pageTitle}>
            Let's explore mars!
          </Text>
        </View>

        <View style={{ marginBottom: 33 }}>
          <TextInput
            style={[global.input, { marginBottom: 30 }]}
            placeholder="E-mail"
          />

          <TextInput
            style={[global.input, { marginBottom: 9 }]}
            placeholder="Password"
          />

          <View style={styles.linkContainer}>
            <TouchableOpacity>
              <Text style={global.link}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={global.link}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>

        <MainButton
          color="#9966FF"
          darkColor="#7C48E4"
          text="Login"
          icon="chevrons-right"
          action={handleLogin}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Login
