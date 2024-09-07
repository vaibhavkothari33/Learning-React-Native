import { View, Text } from 'react-native'
import React from 'react'

import Name from "../components/Namec"
import Twitter from "../components/Twitter"
// import Jobc from '../components/Job'
import Age from '../components/greet'
import Jobc from '../components/Job'


const index = () => {
  return (
    <View>
      <Text>              index</Text>
      <Name/>
      <Age/>
      <Twitter/>
      <Jobc/>
    </View>
  )
}

export default index