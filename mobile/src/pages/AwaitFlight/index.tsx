import React, { useContext } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

import MainButton from '../../components/MainButton'
import LoginContext from '../../contexts/loginContex'

import styles from './style'
import global from '../styles-global'

const AwaitFlight = () => {
  const { reset } = useContext(LoginContext)
  const navigation = useNavigation()

  const handleLogout = () => {
    reset()
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={global.container}>
      <View style={global.header}>
        <View style={global.headerContainer}>
          <Image
            style={global.headerLogo}
            source={require('../../img/logo-min.png')}
          />
          <Text style={global.headerSlogan}>
            Flying with Comfort and Safety
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => handleLogout()}
          style={global.logoutContainer}>
          <Icon name="power" color="#FF6666" size={30} />
          <Text style={global.logoutTitle}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Text style={global.pageTitle}>Awaiting Departure</Text>
      <Text style={styles.infos}>
        We’re almost there, you flight is in day 27 of february of 2054 at 13:30
        pm, on Canaveral Cape, your rocket is SPCX Pioneer, the expected fly
        time is 2 years.
      </Text>
      <Text style={styles.secondaryInfos}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris
        erat, interdum et urna tincidunt, interdum consequat neque. Vestibulum
        volutpat iaculis mi quis semper. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aenean mauris erat, interdum et urna tincidunt,
        interdum consequat neque. Vestibulum volutpat iaculis mi quis semper.{' '}
      </Text>
      <Text style={styles.warning}>
        Don’t be late, delays are not acceptable!
      </Text>

      <MainButton
        color="#FF6666"
        darkColor="#AC3B3B"
        text="Eject, cancel travel"
        icon="minus-circle"
        action={() => {}}
      />
    </SafeAreaView>
  )
}

export default AwaitFlight
