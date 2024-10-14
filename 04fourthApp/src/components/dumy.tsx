import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const color = ["red","blue","green"]
const dumy = () => {
  const [selectColor,setSelectColor] = useState("white");

  return (
    <View>
      {color.map((colors)=>
      <TouchableOpacity key={colors}/>
      )}
    </View>
  )
}

export default dumy