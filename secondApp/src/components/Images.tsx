import { View, Text, Image } from 'react-native'
import React from 'react'

const Images = () => {
  return (
<View style={{ flex: 1 }}>
      <Text style={{color:"blue",padding:20}}>        Images</Text>
      <Image source={require("../assets/image.png")}  style={{ margin: 20,width:150,height:150,borderRadius: 20 }}/>
      <Image source={{uri:"https://avatars.githubusercontent.com/u/129139486?s=400&u=ab1e36746498ac43c783da0baae0363aaffa8d16&v=4"}} style={{margin:20,width:150,height:150,borderRadius: 20}}/>
      {/* <Image source={require("../assets/image.png")}  style={{ margin: 20,width:350,height:350 }}/> */}
      {/* <Image source={{uri:"https://avatars.githubusercontent.com/u/129139486?s=400&u=ab1e36746498ac43c783da0baae0363aaffa8d16&v=4"}} style={{margin:20,width:350,height:350}}/> */}
    </View>
  )
}
export default Images

