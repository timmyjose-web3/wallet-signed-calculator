import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import * as React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { RootParamsList } from '../App'

export default function Calculator() {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamsList>>()

  return (
    <View style={styles.container}>
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
