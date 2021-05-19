import React from 'react'
import { View, Text, Button } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation()

  const goToSignup = () => {
    navigation.navigate('Signup')
  }

  return (
    <View>
      <Text>This is HOME page</Text>
      <Button title="Go to signup" onPress={goToSignup} />
    </View>
  )
}
