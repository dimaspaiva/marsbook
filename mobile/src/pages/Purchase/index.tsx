import React, { useContext, useState, useEffect } from 'react'
import { ImageBackground, SafeAreaView, Text, View, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import MainButton from '../../components/MainButton'
import LoginContext from '../../contexts/loginContex'
import api from '../../services/api'

import styles from './styles'
import global from '../styles-global'
import Return from '../../components/ReturnButton'

interface Params {
  rocket: Rocket
}

interface Rocket {
  id: number
  model: string
  seats: number
  price: number
  launch: string
  company: number
  rating: number
  selected?: boolean
}

const Purchase = () => {
  const {
    user: { id, balance },
  } = useContext(LoginContext)

  const route = useRoute()
  const { rocket } = route.params as Params
  const navigation = useNavigation()

  const [canPurchase, setCanPurchase] = useState(false)

  useEffect(() => {
    setCanPurchase(rocket.price <= balance)
  }, [])

  const handleFinalize = async () => {
    try {
      const response = await api.post('/userflight', {
        id_user: id,
        id_rocket: rocket.id,
      })
      navigation.navigate('AwaitFlight')
    } catch (error) {
      Alert.alert(
        'Failed on purchase',
        'Something goes wrong and you cannot buy your tickets ' +
          JSON.stringify(error),
      )
    }
  }

  return (
    <SafeAreaView style={global.container}>
      <ImageBackground
        style={{ flex: 1 }}
        imageStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode="center"
        source={require('../../img/logo-watermark.png')}>
        <View style={styles.header}>
          <Return />
        </View>

        <Text style={[global.pageTitle, { marginBottom: 30 }]}>
          Purchase values
        </Text>

        <View style={styles.body}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Price</Text>
            <Text style={styles.infoValue}>U$ {rocket.price.toFixed(2)}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Wallet</Text>
            <Text style={styles.infoValue}>U$ {balance.toFixed(2)}</Text>
          </View>
          <View style={[styles.infoContainer, styles.balance]}>
            <Text style={styles.infoTitle}>Balance</Text>
            <Text style={styles.infoValue}>
              U$ {(balance - rocket.price).toFixed(2)}
            </Text>
          </View>
        </View>

        <MainButton
          active={canPurchase}
          color="#9966FF"
          darkColor="#7C48E4"
          text="Purchase"
          icon="check-circle"
          action={handleFinalize}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Purchase
