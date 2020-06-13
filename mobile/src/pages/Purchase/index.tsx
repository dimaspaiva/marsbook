import React from 'react'
import { ImageBackground, SafeAreaView, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MainButton from '../../components/MainButton'

import styles from './styles'
import global from '../styles-global'
import Return from '../../components/ReturnButton'

const Purchase = () => {
  const navigation = useNavigation()

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
            <Text style={styles.infoValue}>15,000.00</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Wallet</Text>
            <Text style={styles.infoValue}>20,000.00</Text>
          </View>
          <View style={[styles.infoContainer, styles.balance]}>
            <Text style={styles.infoTitle}>Balance</Text>
            <Text style={styles.infoValue}>5,000.00</Text>
          </View>
        </View>

        <MainButton
          color="#9966FF"
          darkColor="#7C48E4"
          text="Purchase"
          icon="check-circle"
          action={() => {}}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Purchase
