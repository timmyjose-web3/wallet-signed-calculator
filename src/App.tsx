import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import Home from './components/Home'
import Connect from './components/Connect'
import Calculator from './components/Calculator'

export type RootParamsList = {
  Home: undefined
  Connect: undefined
  Calculator: undefined
}

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Connect' component={Connect} />
        <Stack.Screen name='Calculator' component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
