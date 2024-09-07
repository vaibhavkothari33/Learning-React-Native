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