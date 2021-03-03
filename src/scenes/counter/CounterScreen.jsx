import React from 'react'
import { View } from 'react-native'

import Button from '@/components/button'
import Counter from '@/containers/counter'

const CounterScreen = ({ navigation }) => {
  return (
    <View>
      <Counter />
      <View
        style={{
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button
          onPress={() => navigation.navigate('CounterDetail', { count: 1 })}
          label="Go Detail"
        />
      </View>
    </View>
  )
}

export default CounterScreen
