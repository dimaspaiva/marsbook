import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

import styles from './styles'

const Return = () => {
  const navigation = useNavigation()

  const handleReturn = () => {
    navigation.goBack()
  }

  return (
    <TouchableOpacity
      onPress={() => handleReturn()}
      style={styles.returnContainer}>
      <Icon name="chevrons-left" color="#FF6666" size={24} />
      <Text style={styles.returnText}>Return</Text>
    </TouchableOpacity>
  )
}

export default Return
