import { View, Text, Button } from 'react-native'
import React from 'react'

const Button1 = () => {
  return (
    <View>
      <Text>button</Text>
          {/* Events */}
      <Button title="Learn more" color="green" onPress={()=>
        console.log("Button Pressed")
        
      }/>
      <Button  title="Start now" color="red"/>
  
      <Button title='Click me' color = "blue" onPress={()=>
        console.log("Button 2 Pressed")
        
      }></Button>
    </View>
  )
}

export default Button1