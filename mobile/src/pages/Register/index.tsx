import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Return from '../../components/ReturnButton'
import MainButton from '../../components/MainButton'
import api from '../../services/api'

import styles from './styles'
import global from '../styles-global'

interface User {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const Register = () => {
  const navigation = useNavigation()

  const [user, setUser] = useState<User>({} as User)
  const [canRegistry, setCanRegistry] = useState(false)
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

  const handleRegister = async () => {
    try {
      await api.post('/users', {
        name: user.name,
        email: user.email,
        password: user.password,
      })

      Alert.alert('Success!', 'User created, make login now!')
      navigation.navigate('Login')
    } catch (error) {
      Alert.alert('Failed', 'Cant create your user, maybe it already exists')
    }
  }

  const handleName = (name: string) => {
    setUser({ ...user, name })
  }

  const handleEmail = (email: string) => {
    setUser({ ...user, email })
  }

  const handlePassword = (password: string) => {
    setUser({ ...user, password })

    if (user.confirmPassword !== password) {
      return setCanRegistry(false)
    } else {
      return setCanRegistry(true)
    }
  }

  const handleConfirmPassword = (confirmPassword: string) => {
    setUser({ ...user, confirmPassword })
    if (confirmPassword !== user.password) {
      return setCanRegistry(false)
    } else {
      return setCanRegistry(true)
    }
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <SafeAreaView style={global.container}>
        <View
          style={[
            global.header,
            {
              marginBottom: isKeyboard ? 12 : 21,
            },
          ]}>
          <Return />
          <View>
            <Image source={require('../../img/logo-min.png')} />
          </View>
        </View>

        <Text
          style={[
            global.pageTitle,
            {
              marginTop: isKeyboard ? -30 : 0,
              marginBottom: isKeyboard ? 9 : 30,
            },
          ]}>
          Register
        </Text>

        <View>
          <TextInput
            style={[global.input, { marginBottom: 30 }]}
            placeholder="Name"
            onChangeText={(text) => handleName(text)}
          />
          <TextInput
            style={[global.input, { marginBottom: 30 }]}
            placeholder="E-mail"
            onChangeText={(text) => handleEmail(text)}
          />
          <TextInput
            style={[
              global.input,
              {
                marginBottom: 30,
                borderColor: '#ff6666',
                borderWidth: canRegistry ? 0 : 3,
              },
            ]}
            placeholder="Password"
            onChangeText={(text) => handlePassword(text)}
          />
          <TextInput
            style={[
              global.input,
              {
                marginBottom: 30,
                borderColor: '#ff6666',
                borderWidth: canRegistry ? 0 : 3,
              },
            ]}
            placeholder="Passowrd"
            onChangeText={(text) => handleConfirmPassword(text)}
          />
        </View>

        <Text style={styles.termsText}>
          On confirm your registry you agree with FASTCNS terms
        </Text>

        <MainButton
          active={canRegistry}
          color="#9966FF"
          darkColor="#7C48E4"
          text="Create Acount"
          icon="check-circle"
          action={handleRegister}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Register
