import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import * as React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { RootParamsList } from '../App'
import { useWeb3Modal } from '@web3modal/wagmi-react-native'
import { useAccount, useBalance } from 'wagmi'

export default function Connect() {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamsList>>()

  const { open } = useWeb3Modal()

  const { address, isConnecting, isDisconnected } = useAccount()
  const { data, isError: isErrorBalance, isLoading: isLoadingBalance } = address ? useBalance({
    address
  }) : { data: null, isError: false, isLoading: true}

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => open()}>
        <Text style={styles.buttonText}>Connect</Text>
      </Pressable>
      {isConnecting && (<Text>Address Loading...</Text>)}
      {isDisconnected && (<Text>Not connected</Text>)}
      {!isConnecting && !isDisconnected && (<Text>Address: {address}</Text>)}
      {isLoadingBalance && (<Text>Balance loading...</Text>)}
      {isErrorBalance && (<Text>Could not retrieve balance</Text>)}
      {!isLoadingBalance && !isErrorBalance && (<Text>Balance: {data?.formatted}{data?.symbol}</Text>)}
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'grey'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 12,
    backgroundColor: 'black',
    borderRadius: 4,
    elevation: 3
  }
})
