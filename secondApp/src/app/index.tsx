import { View, Text } from 'react-native'
import React from 'react'
import Name from "../components/Namec"
import Twitter from "../components/Twitter"
import Age from '../components/greet'
import Jobc from '../components/Job'
import Button1 from '../components/button'
import PressableButton from '../components/Pressable'


const index = () => {
  return (
    <View>
      <Text>             index</Text>
      <Name/>
      <Age/>
      <Twitter/>
      <Jobc/>
      <Button1/>
      <PressableButton/>
    </View>
    
  )
}

export default index