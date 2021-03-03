import React from 'react'
import { Text, View } from 'react-native'

import Button from '@/components/button'

const CounterDetailScreen = ({ navigation, route }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Counter Detail</Text>
      <Text>{route?.params?.count}</Text>

      <View
        style={{
          marginTop: 50
        }}
      >
        <Button onPress={() => navigation.goBack()} label="Go Back" />
      </View>
    </View>
  )
}

export default CounterDetailScreen
