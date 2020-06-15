import React, { useEffect, useState, useContext } from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native'

import MainButton from '../../components/MainButton'

import styles from './styles'
import global from '../styles-global'
import Return from '../../components/ReturnButton'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import LoginContext from '../../contexts/loginContex'

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
  selected?: boolean
}

const Rockets = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const routeParams = route.params as Params

  const [rockets, setRockets] = useState<Rocket[]>([])
  const [selectedRocket, setSelectedRocket] = useState({})
  const [canFinalize, setCanFinalize] = useState(false)

  useEffect(() => {
    setRockets(routeParams.rockets)
  }, [])

  const handleMoveFinalize = () => {
    navigation.navigate('Purchase', { rocket: selectedRocket })
  }

  const handleSelectRocket = (rocket: Rocket) => {
    const newSelectedRocket = rockets.map((it) => {
      if (rocket.id === it.id && !it.selected) {
        setSelectedRocket({ ...rocket, selected: true })
        setCanFinalize(true)
        return { ...rocket, selected: true }
      }

      if (rocket.selected) {
        setSelectedRocket({})
        setCanFinalize(false)
        return { ...rocket, selected: false }
      }

      return rocket
    })

    setRockets(newSelectedRocket)
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
          <TouchableWithoutFeedback
            key={rocket.id}
            onPress={() => handleSelectRocket(rocket)}>
            <View
              style={[
                styles.rocketContainer,
                rocket.selected && styles.selectedRocket,
              ]}>
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
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>

      <MainButton
        active={canFinalize}
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
