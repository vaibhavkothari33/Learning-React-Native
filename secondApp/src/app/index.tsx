import { View, Text } from 'react-native'
import React from 'react'
import Name from "../components/Namec"
import Twitter from "../components/Twitter"
import Age from '../components/greet'
import Jobc from '../components/Job'
import Button1 from '../components/button'
import PressableButton from '../components/Pressable'
import Images from '../components/Images'


const index = () => {
  return (
    <View>
      {/* <Text>             index</Text> */}
      {/* <Images/> */}
      <Name/>
      {/* <Age/> */}
      <Twitter/>
      {/* <Jobc/> */}
      <Button1/>
      <PressableButton/>
      <Images/>
    </View>
    
  )
}

export default index