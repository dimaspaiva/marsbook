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
  active?: boolean
}

const MainButton: React.FC<ButtonProps> = ({
  icon,
  text,
  color,
  darkColor,
  action,
  active = true,
}) => {
  return (
    <RectButton
      style={[
        { backgroundColor: color, opacity: active ? 1 : 0.6 },
        styles.container,
      ]}
      enabled={active}
      onPress={() => action()}>
      <Text style={styles.title}>{text}</Text>
      <View style={[{ backgroundColor: darkColor }, styles.icon]}>
        <Icon name={icon} color="#EAEAEA" size={21} />
      </View>
    </RectButton>
  )
}

export default MainButton
