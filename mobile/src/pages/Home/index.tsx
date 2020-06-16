import React, { useState, useEffect, useContext } from 'react'
import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import MainButton from '../../components/MainButton'
import Select from '../../components/Select'
import LoginContext from '../../contexts/loginContex'

import styles from './styles'
import global from '../styles-global'
import api from '../../services/api'

interface Select {
  label: string
  value: string
}

interface Company {
  id: number
  name: string
  rating: number
  selected: boolean
}

interface ReceivedRocketsData {
  id: number
  model: string
  seats: number
  price: number
  launch: string
  company: number
  name: string
  rating: number
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

const defaultCompany = {
  id: -1,
  name: '',
  rating: -1,
  selected: false,
}

const Home = () => {
  const { reset } = useContext(LoginContext)
  const navigation = useNavigation()
  const [canSelectRocket, setCanSelectRocket] = useState(false)
  const [travelDate, setTravelDate] = useState('')
  const [travelTime, setTravelTime] = useState('')
  const [travelCompany, setTravelCompany] = useState<Company>(defaultCompany)
  const [timeList, setTimeList] = useState<Select[]>([])
  const [dateList, setDateList] = useState<Select[]>([])
  const [companiesList, setCompaniesList] = useState<Company[]>([])
  const [rocketsList, setRocketsList] = useState<Rocket[]>([])

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
    const urlTravelDate = untransformDate(travelDate)
    Alert.alert(urlTravelDate)
    api
      .get(`rockets/times/?date=${urlTravelDate}`)
      .then(({ data }: { data: { times: string[] } }) => {
        const times = data.times.map((it) => ({
          label: it,
          value: it,
        }))

        setTimeList(times)
      })
  }, [travelDate])

  useEffect(() => {
    setCanSelectRocket(false)
    const urlTravelDate = untransformDate(travelDate)

    if (travelTime !== '' && travelDate !== '') {
      api
        .get(`rockets/?date=${urlTravelDate}&time=${travelTime}`)
        .then(({ data }: { data: { rockets: ReceivedRocketsData[] } }) => {
          const companies = data.rockets.map((it) => ({
            id: it.company,
            name: it.name,
            rating: it.rating,
            flight: it.id,
            selected: false,
          }))

          setCompaniesList(companies)

          const rockets = data.rockets.map((it) => ({
            id: it.id,
            model: it.model,
            seats: it.seats,
            price: it.price,
            launch: it.launch,
            company: it.company,
            rating: it.rating,
          }))

          setRocketsList(rockets)
        })
    }
  }, [travelTime])

  const transformDate = (date: string) => {
    const [month, day, year] = date.split(/-|\//i)

    return `${day}/${month}/${year}`
  }

  const untransformDate = (date: string) => {
    const [day, month, year] = date.split('/')

    return `${year}/${month}/${day}`
  }

  const handleLogout = () => {
    reset()
    navigation.goBack()
  }

  const handleSelectRocket = () => {
    const rockets = rocketsList.filter(
      (rocket) => rocket.company === travelCompany.id,
    )

    navigation.navigate('Rockets', { rockets })
  }

  const handleSelectDate = (date: string) => {
    setTravelDate(date)
    setTravelTime('')
    setTimeList([])
    setCompaniesList([])
    setTravelCompany({})
    setCanSelectRocket(false)
  }

  const handleSelectTime = (time: string) => {
    setTravelTime(time)
    setTravelCompany(defaultCompany)
  }

  const handleSelectCompany = (id: number) => {
    const newSelectedCompanie = companiesList.map((company) => {
      if (company.id === id && !company.selected) {
        setTravelCompany(company)
        setCanSelectRocket(true)
        return { ...company, selected: true }
      }

      if (company.selected) {
        setCanSelectRocket(false)
      }

      return { ...company, selected: false }
    })

    setCompaniesList(newSelectedCompanie)
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
          {companiesList.map((company) => (
            <TouchableWithoutFeedback
              key={company.id}
              onPress={() => handleSelectCompany(company.id)}>
              <View
                style={[
                  styles.companieContainer,
                  company.selected && styles.companieSelected,
                ]}>
                <View style={styles.companieLogo} />
                <Text style={styles.companieName}>{company.name}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>

      <MainButton
        active={canSelectRocket}
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
