import { View, Text } from 'react-native'
import React from 'react'
interface ChildProp{
    name:string;
    age:number;
    color:string;
}
const ChildComponent = ({name,age,color}:ChildProp) => {
    // console.log(props);
    
  return (
    <View> 
      <Text style={{ textAlign: "center" ,padding:10 }}>{name}</Text>
      <Text style={{ textAlign: "center" }}>{age}</Text>
      <Text style={{ textAlign: "center" }}>{color}</Text>
    </View>
  )
}

export default ChildComponent