import React from 'react'
import { Text, View } from 'react-native'

import Counter from '@/containers/counter'

const CounterScreen = () => {
  return (
    <View>
      <Text>Counter</Text>
      <Counter />
    </View>
  )
}

export default CounterScreen
