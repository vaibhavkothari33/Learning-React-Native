import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
// make a toogle button which shows on and off

const Tooglebutton = () => {
    const [isOn,setIson] = useState(false);
    return (
    <View>
        <Text style={{textAlign:"center"}}>{isOn ? "On" : "Off"}</Text>
        <Button title='Toggle' onPress={()=> setIson(!isOn)}/>
    </View>
  )
}

export default Tooglebutton