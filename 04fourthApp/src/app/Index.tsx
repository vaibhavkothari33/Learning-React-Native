import { View, Text } from 'react-native'
import React from 'react'
import Ternary from '../components/Ternary'
import Andoperator from '../components/Andoperator'
import WithState from '../components/01counter/WithState'
import Updatearray from '../components/02UpdateArray/Updatearray'
import UpdateObject from '../components/03UpdateObject/UpdateObject'
import SharingState from '../components/03UpdateObject/04SharingState/SharingState'

const Index = () => {
  return (
    <View> 
      {/* <Text>Index</Text>
      <Ternary/>*/}
      {/* <Andoperator/>  */}
      {/* <Updatearray/> */}
      {/* <WithState/> */}
      {/* <UpdateObject/> */}
      <SharingState/>
    </View>
  )
}

export default Index