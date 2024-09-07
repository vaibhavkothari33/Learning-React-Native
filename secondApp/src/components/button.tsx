import { View, Text, Button } from 'react-native'
import React from 'react'

const Button1 = () => {
  return (
    <View>
          {/* Events */}
      <Button title="Learn more" color="green" onPress={()=>
        console.log("Button Pressed")
        
      }/>
      <Text style={{ marginBottom: 20 }}></Text>
    <Button title='Click me' color = "blue" onPress={()=>
        console.log("Button 2 Pressed")
        
      }></Button>
    </View>
  )
}

export default Button1