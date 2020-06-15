import React, { useState, useEffect } from 'react'
import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import MainButton from '../../components/MainButton'
import Select from '../../components/Select'

import styles from './styles'
import global from '../styles-global'
import api from '../../services/api'

const Home = () => {
  const navigation = useNavigation()
  const [travelDate, setTravelDate] = useState('')
  const [travelTime, setTravelTime] = useState('')
  const [timeList, setTimeList] = useState<{ label: string; value: string }[]>(
    [],
  )
  const [dateList, setDateList] = useState<{ label: string; value: string }[]>(
    [],
  )

  useEffect(() => {
    api.get('rockets/dates').then(({ data }: { data: { dates: string[] } }) => {
      const items = data.dates.map((it) => {
        const date = transformDate(it)

        return { label: date, value: date }
      })

      setDateList(items)
    })
  }, [])

  useEffect(() => {
    const urlDate = untransformDate(travelDate)

    api
      .get(`rockets/times/?date=${urlDate}`)
      .then(({ data }: { data: { times: string[] } }) => {
        const times = data.times.map((it) => ({
          label: it,
          value: it,
        }))

        setTimeList(times)
      })
  }, [travelDate])

  useEffect(() => {
    const urlDate = untransformDate(travelDate)

    if (travelTime !== '' && travelDate !== '') {
      api
        .get(`rockets/?date=${urlDate}&time=${travelTime}`)
        .then(({ data }) => {
          Alert.alert(JSON.stringify(data))
        })
    }
  }, [travelTime])

  const transformDate = (date: string) => {
    const [year, month, day] = date.split('-')

    return `${day}/${month}/${year}`
  }

  const untransformDate = (date: string) => {
    const [day, month, year] = date.split('/')

    return `${year}/${month}/${day}`
  }

  const handleLogout = () => {
    navigation.goBack()
  }

  const handleSelectRocket = () => {
    navigation.navigate('Rockets')
  }

  const handleSelectDate = (date: string) => {
    setTravelDate(date)
    setTravelTime('')
  }

  const handleSelectTime = (time: string) => {
    setTravelTime(time)
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

        <Select
          placeholder="Select a date"
          items={dateList}
          onSelect={handleSelectDate}
        />

        <Select
          value={travelTime}
          placeholder="Select a time"
          items={timeList}
          onSelect={handleSelectTime}
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
