import { View, Text, Button } from 'react-native'
import React from 'react'

interface ComponentTypeProps{
    count:number;
    onclickHandler:()=>void;
}
const Component1 = ({count , onclickHandler}:ComponentTypeProps) => {
  return (
    <View>
      <Text>{count}</Text>
      <Button title="Press Me" onPress={onclickHandler}/>
    </View>
  )
}

export default Component1