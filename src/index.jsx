import React, { useEffect } from 'react'
import { View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import CounterScreen from './scenes/counter'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <View>
      <CounterScreen />
    </View>
  )
}

export default App
