import React, { useEffect, useState } from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native'

import MainButton from '../../components/MainButton'

import styles from './styles'
import global from '../styles-global'
import Return from '../../components/ReturnButton'

interface Params {
  rockets: Rocket[]
}

interface Rocket {
  id: number
  model: string
  seats: number
  price: number
  launch: string
  company: number
  rating: number
}

const Rockets = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const routeParams = route.params as Params

  const [rockets, setRockets] = useState<Rocket[]>([])

  useEffect(() => {
    setRockets(routeParams.rockets)
  }, [])

  const handleMoveFinalize = () => {
    navigation.navigate('Purchase')
  }

  const formatPrice = (price: number) => {
    const newPrice = price.toFixed(2)
  }

  return (
    <SafeAreaView style={global.container}>
      <View style={styles.header}>
        <Return />

        <TouchableOpacity>
          <Text style={styles.walletText}>Wallet</Text>
        </TouchableOpacity>
      </View>

      <Text style={global.pageTitle}>Select a Rocket to take you to Mars</Text>

      <ScrollView
        style={styles.rocketsList}
        showsVerticalScrollIndicator={false}>
        {rockets.map((rocket) => (
          <View style={styles.rocketContainer}>
            <View style={styles.rocketLogo} />

            <View>
              <View style={styles.rocketHeader}>
                <Text style={styles.rocketName}>{rocket.model}</Text>

                <View style={styles.rocketTicketContainer}>
                  <Text style={styles.rocketTickets}>{rocket.seats}</Text>
                  <Icon name="users" color="#9966FF" size={24} />
                </View>
              </View>

              <Text style={styles.rocketInfo}>
                Amazing motivation flight text
              </Text>

              <View style={styles.rocketFooter}>
                <View style={styles.rocketNoteContainer}>
                  <Icon name="award" color="#9966FF" size={24} />
                  <Text style={styles.rocketNote}>{rocket.rating}</Text>
                </View>
                <Text style={styles.rocketPrice}>
                  U$ {rocket.price.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <MainButton
        color="#9966FF"
        darkColor="#7C48E4"
        text="Purchase your tickets"
        icon="dollar-sign"
        action={handleMoveFinalize}
      />
    </SafeAreaView>
  )
}

export default Rockets
