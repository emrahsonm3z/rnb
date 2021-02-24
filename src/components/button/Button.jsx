import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './Button.style'

const Button = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {icon}
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button
