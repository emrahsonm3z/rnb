import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import CounterScreen from '@/scenes/counter'
import CounterDetailScreen from '@/scenes/counter/CounterDetailScreen'

const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="CounterDetail" component={CounterDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
