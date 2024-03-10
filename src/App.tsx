import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import Home from './components/Home'
import Connect from './components/Connect'
import Calculator from './components/Calculator'
import { mainnet, polygon, arbitrum, sepolia } from 'viem/chains'
import { Web3Modal, createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi-react-native'
import { WagmiConfig } from 'wagmi'

const projectId = 'd354077797a1b871f3e92f0f58ec2549'

const metadata = {
  name: 'wallet-signed-calculator',
  description: 'Wallet Signed Calculator App',
  url: 'https://github.com/timmyjose-web3/wallet-signed-calculator',
  icons: [],
  redirect: {
    native: '',
    universal: ''
  }
}

const chains = [mainnet, polygon, arbitrum, sepolia]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata})

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig
})

export type RootParamsList = {
  Home: undefined
  Connect: undefined
  Calculator: undefined
}

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <WagmiConfig config={wagmiConfig}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Connect' component={Connect} />
          <Stack.Screen name='Calculator' component={Calculator} />
        </Stack.Navigator>
      </NavigationContainer>
      <Web3Modal />
    </WagmiConfig>
  )
}
