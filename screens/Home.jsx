import { View, Text , } from 'react-native'
import { Button } from 'react-native-paper';
import React from 'react'
import {addOrder }  from '../firebase'

export default function Home() {

const Add =async()=>{


await addOrder()

console.log('addded--->')

}


  return (
    <View>
      <Text>HomePage</Text>

      <Button icon="camera" mode="contained" onPress={Add}>
    Press me
  </Button>




    </View>
  )
}