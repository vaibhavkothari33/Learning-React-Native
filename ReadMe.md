# React native guide
make the new app by
```bash
npx create-expo-app@latest
```

in case expo go is not working try this command
```bash
npm install -g expo-cl 
```
## Making components

```tsx
import { Text } from "react-native";
import Greet from "../components/Greet.tsx";

const Index = () => {
    return <Greet/>;
};
export default Index;
```
## Using the components
```tsx
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
      <Name/>
      <Job/>
      <Age/>
      <Twitter/>
    </View>
  )
}

export default index
```

view === div in HTML
## Buttons in React native
```tsx
import { View, Text, Button } from 'react-native'
import React from 'react'

const Button1 = () => {
  return (
    <View>
      <Text>button</Text>
          {/* Events */}
      <Button  title="Start now" color="red"/>
  
      <Button title='Click me' color = "blue" onPress={()=>
        console.log("Button 2 Pressed")
        
      }></Button>
    </View>
  )
}

export default Button1
```

### 1. onPress: function that is called when the button is Pressed
### 2. onPressIn: function is called when the press gesture starts
### 3. onPressOut: function is called when the press gesture ends or cancelled
### 4. onLongPress: function is called when a long press is detected