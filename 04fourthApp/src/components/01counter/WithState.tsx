import { View, Text,Button} from 'react-native'
import {useState} from 'react'

const WithState = () => {
    const [count,setCount] = useState(0);
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title='Click' color={"blue"} onPress={()=> setCount(count + 1)}/>
      <Button title='Click' color={"green"} onPress={()=> setCount(count - 1)}/>
    </View>
  ) 
}

export default WithState