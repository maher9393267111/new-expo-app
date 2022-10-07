import { View, Text } from 'react-native'
import React from 'react'
import {signup} from '../config/api'
import { Button } from 'react-native-paper'

export default function Deneme() {
  return (
    <View>
      <Text>SignUp with me here</Text>

      <Button className="mt-24" icon="camera" mode="contained" onPress={signup}>
    Register Now
  </Button>

    </View>
  )
}