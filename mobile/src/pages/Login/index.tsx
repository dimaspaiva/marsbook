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
  Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MainButton from '../../components/MainButton'
import api from '../../services/api'

import styles from './styles'
import global from '../styles-global'

const Login = () => {
  const navigation = useNavigation()

  const [isKeyboard, setIsKeyboard] = useState(false)
  const [login, setLogin] = useState({ email: '', password: '' })

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

  const handleLogin = async () => {
    const { email, password } = login

    try {
      const response = await api.post('users/login', {
        email,
        password,
      })

      if (response.status === 200) {
        setLogin({ email: '', password: '' })
        return navigation.navigate('Home')
      }
    } catch (error) {
      setLogin({ email: login.email, password: '' })
      Alert.alert('Login failed', 'Wrong login infos, email or password')
    }
  }

  const handleEmail = (email: string) => {
    setLogin({ email, password: login.password })
  }

  const handlePassword = (password: string) => {
    setLogin({ password, email: login.email })
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
            autoCorrect={false}
            textContentType="emailAddress"
            value={login.email}
            autoCapitalize="none"
            onChangeText={(text) => handleEmail(text)}
            placeholder="E-mail"
          />

          <TextInput
            style={[global.input, { marginBottom: 9 }]}
            textContentType="password"
            secureTextEntry
            value={login.password}
            onChangeText={(text) => handlePassword(text)}
            key="teste"
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
