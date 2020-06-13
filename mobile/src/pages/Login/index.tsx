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
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

import styles from './styles'
import global from '../styles-global'

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
          <Text style={isKeyboard ? styles.sloganKeyboard : styles.slogan}>
            Let's explore mars!
          </Text>
        </View>

        <View>
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput style={styles.input} placeholder="Password" />

          <View style={styles.linkContainer}>
            <TouchableOpacity>
              <Text style={global.link}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={global.link}>Register</Text>
            </TouchableOpacity>
          </View>

          <RectButton style={styles.button} onPress={() => handleLogin()}>
            <Text style={styles.buttonTitle}>Login</Text>

            <View style={styles.buttonIconContainer}>
              <Icon name="chevrons-right" color="#EAEAEA" size={21} />
            </View>
          </RectButton>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Login
