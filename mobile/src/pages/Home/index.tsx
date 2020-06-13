import React from 'react'
import { ScrollView, View, SafeAreaView, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import global from '../styles-global'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import MainButton from '../../components/MainButton'

const Home = () => {
  const navigation = useNavigation()

  const handleLogout = () => {
    navigation.goBack()
  }

  const handleSelectRocket = () => {
    navigation.navigate('Rockets')
  }

  return (
    <SafeAreaView style={global.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.headerLogo}
            source={require('../../img/logo-min.png')}
          />
          <Text style={styles.headerSlogan}>
            Flying with Comfort and Safety
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => handleLogout()}
          style={styles.logoutContainer}>
          <Icon name="power" color="#FF6666" size={30} />
          <Text style={styles.logoutTitle}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={global.pageTitle}>When you want to travel</Text>

        <View style={styles.infosContainer}>
          <Text style={styles.infosText}>t - 4: Chose when, date and time</Text>
          <Text style={styles.infosText}>
            t - 3: Choose your favorite companie
          </Text>
          <Text style={styles.infosText}>t - 2: Choose a nice rocket</Text>
          <Text style={styles.infosText}>t - 1: Departure</Text>
          <Text style={styles.infosText}>t - 0: Launch!</Text>
        </View>

        <TextInput
          style={[global.input, { marginBottom: 30 }]}
          placeholder="Flight date"
        />
        <TextInput
          style={[global.input, { marginBottom: 30 }]}
          placeholder="Flight time"
        />

        <ScrollView
          style={styles.companiesList}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 0 }}>
          <View style={styles.companieContainer}>
            <View style={styles.companieLogo} />
            <Text style={styles.companieName}>Company name</Text>
          </View>
          <View style={styles.companieContainer}>
            <View style={styles.companieLogo} />
            <Text style={styles.companieName}>Company name</Text>
          </View>
          <View style={styles.companieContainer}>
            <View style={styles.companieLogo} />
            <Text style={styles.companieName}>Company name</Text>
          </View>
          <View style={styles.companieContainer}>
            <View style={styles.companieLogo} />
            <Text style={styles.companieName}>Company name</Text>
          </View>
          <View style={styles.companieContainer}>
            <View style={styles.companieLogo} />
            <Text style={styles.companieName}>Company name</Text>
          </View>
        </ScrollView>
      </View>

      <MainButton
        color="#9966FF"
        darkColor="#7C48E4"
        text="Select your Rocket!"
        icon="navigation-2"
        action={handleSelectRocket}
      />
    </SafeAreaView>
  )
}

export default Home
