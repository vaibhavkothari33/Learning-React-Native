import { View, Text } from 'react-native'
import React from 'react'

import Name from "../../components/Namec"
import Twitter from "../../components/Twitter"
import Job from '../../components/job'
import Age from '../../components/greet'


const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Job/>
      <Age/>
      <Twitter/>
      <Name/>
    </View>
  )
}

export default index