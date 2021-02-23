import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './Button.style'

const Button = ({ label, icon, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {icon}
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button
