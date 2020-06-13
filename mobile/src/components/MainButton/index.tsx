import React, { FunctionComponent } from 'react'
import { Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'

import styles from './styles'

interface ButtonProps {
  icon: string
  text: string
  color: string
  darkColor: string
  action: Function
}

const MainButton: React.FC<ButtonProps> = ({
  icon,
  text,
  color,
  darkColor,
  action,
}) => {
  return (
    <RectButton
      style={[{ backgroundColor: color }, styles.container]}
      onPress={() => action()}>
      <Text style={styles.title}>{text}</Text>
      <View style={[{ backgroundColor: darkColor }, styles.icon]}>
        <Icon name={icon} color="#EAEAEA" size={21} />
      </View>
    </RectButton>
  )
}

export default MainButton
