import React, { useState } from 'react'
import { Text, View } from 'react-native'

import Button from '@/components/button'
import { Send } from '@/components/icons'

import styles from './Counter.style'

const Counter = () => {
  const [count, setCount] = useState(0)
  const onPress = () => setCount((prevCount) => prevCount + 1)

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.count}>Count: {count}</Text>
      </View>
      <Button
        onPress={onPress}
        label="Press Here"
        icon={<Send width={24} height={24} color="#FFF" />}
      />
    </View>
  )
}

export default Counter
