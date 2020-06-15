import React, { useState, useEffect } from 'react'
import {
  View,
  TextInput,
  Text,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import styles from './styles'

interface SelectProps {
  placeholder?: string
  items: { label: string; value: any }[]
  onSelect?: Function
}

const Select: React.FC<SelectProps> = ({ placeholder, items, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [placeholderText, setPlaceholderText] = useState('Select an option')

  useEffect(() => {
    if (placeholder) {
      setPlaceholderText(placeholder)
    }
  }, [])

  const handleShowModal = () => {
    setModalVisible(!modalVisible)
  }

  const handleSelect = (item: any) => {
    setPlaceholderText(item.label)
    handleShowModal()
    if (onSelect) {
      onSelect(item.value)
    }
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => handleShowModal()}>
        <View style={styles.mainContainer}>
          <TextInput
            editable={false}
            style={styles.mainTitle}
            placeholder={placeholderText || 'Select an option'}
          />

          <View style={styles.iconContainer}>
            <Icon name="chevron-down" color="#949494" size={24} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} transparent animationType="slide">
        <TouchableWithoutFeedback
          onPress={() => handleShowModal()}
          style={styles.optionsModal}>
          <View style={styles.optionsModal}>
            <TouchableWithoutFeedback>
              <View style={styles.optionsContainer}>
                <Text style={styles.optionsTitle}>{placeholder}</Text>

                <ScrollView>
                  {items.map((item, index) => (
                    <TouchableOpacity
                      onPress={() => handleSelect(item)}
                      key={index}
                      style={styles.itemContainer}>
                      <Text style={styles.itemLabel}>{item.label}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  )
}

export default Select
