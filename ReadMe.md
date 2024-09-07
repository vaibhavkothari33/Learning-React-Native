# React Native Guide

### Creating a New App
### To create a new React Native app using Expo, you can use the following command:

```bash
npx create-expo-app@latest
```

### If Expo Go isn't working, you can try reinstalling the CLI globally:

```bash
npm install -g expo-cl
```


# Making Components

### In React Native, components are reusable pieces of UI.

### Here's an example of how to create and use a simple component:

### Create a component Greet.tsx:
### Example 1
```tsx
// Greet.tsx
import { Text } from "react-native";
import React from "react";

const Greet = () => {
  return <Text>Hello, welcome to the app!</Text>;
};

export default Greet;
```
### Example 2
```tsx
import { Text } from "react-native";
import Greet from "../components/Greet.tsx";

const Index = () => {
  return <Greet />;
};
export default Index;
```

## Using the components

### Example 1
```tsx
import { View, Text } from "react-native";
import React from "react";

import Name from "../../components/Namec";
import Twitter from "../../components/Twitter";
import Job from "../../components/job";
import Age from "../../components/greet";

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Name />
      <Job />
      <Age />
      <Twitter />
    </View>
  );
};

export default index;
```
### Example 2
```tsx
// Index.tsx
import React from "react";
import Greet from "../components/Greet.tsx";

const Index = () => {
  return <Greet />;
};

export default Index;
```
### View acts like the div in HTML (used for layout).
### Text is used to display text elements.

# Buttons in React native

### Buttons are a fundamental UI element in any app. Here's how to use them in React Native:

```tsx
import { View, Text, Button } from "react-native";
import React from "react";

const Button1 = () => {
  return (
    <View>
      <Text>button</Text>
      {/* Events */}
      <Button title="Start now" color="red" />

      <Button
        title="Click me"
        color="blue"
        onPress={() => console.log("Button 2 Pressed")}
      ></Button>
    </View>
  );
};

export default Button1;
```
# Pressables in React Native

### Pressable is a more flexible component than Button.

It lets you handle more gestures like onPress, onPressIn, onLongPress, etc.

It's highly customizable for building complex interactions.

### 1. onPress: function that is called when the button is Pressed

### 2. onPressIn: function is called when the press gesture starts

### 3. onPressOut: function is called when the press gesture ends or cancelled

### 4. onLongPress: function is called when a long press is detected

### Example 1
```tsx
import { View, Text, Pressable } from 'react-native';
import React from 'react';

const PressableButton = () => {
  return (
    <View>
      <Pressable onPress={() => console.log("OnPressed")} style={{ marginBottom: 20 }}>
        <Text>          OnPress</Text>
      </Pressable>
      
      <Pressable onPressIn={() => console.log("OnPressIn")} style={{ marginBottom: 20 }}>
        <Text style={{ color: "brown" }}>           OnPressIn</Text>
      </Pressable>

      <Pressable onPressOut={() => console.log("OnPressOut")} style={{ marginBottom: 20 }}>
        <Text style={{ color: "blue" }}>            OnPressedOut</Text>
      </Pressable>

      <Pressable onLongPress={() => console.log("OnLongPress")}>
        <Text style={{ color: "blue" }}>            OnLongPress</Text>
      </Pressable>
    </View>
  );
};

export default PressableButton;
```
### Example 2
```tsx
import { View, Text, Pressable } from 'react-native';
import React from 'react';

const PressableButton = () => {
  return (
    <View>
      {/* onPress Event */}
      <Pressable onPress={() => console.log("OnPressed")} style={{ marginBottom: 20 }}>
        <Text>OnPress</Text>
      </Pressable>
      
      {/* onPressIn Event */}
      <Pressable onPressIn={() => console.log("OnPressIn")} style={{ marginBottom: 20 }}>
        <Text style={{ color: "brown" }}>OnPressIn</Text>
      </Pressable>

      {/* onPressOut Event */}
      <Pressable onPressOut={() => console.log("OnPressOut")} style={{ marginBottom: 20 }}>
        <Text style={{ color: "blue" }}>OnPressOut</Text>
      </Pressable>

      {/* onLongPress Event */}
      <Pressable onLongPress={() => console.log("OnLongPress")}>
        <Text style={{ color: "blue" }}>OnLongPress</Text>
      </Pressable>
    </View>
  );
};

export default PressableButton;
```
# Images in React Native
### React Native provides the Image component to display images in your app. 

You can load images from various sources like local files, network URLs ( uri ), or static resources.

```tsx
import { View, Text, Image } from 'react-native'
import React from 'react'
const Images = () => {
  return (
<View style={{ flex: 1 }}>
      <Text style={{color:"blue",padding:20}}>Images</Text>
      <Image source={require("../assets/image.png")}  style={{ margin: 20,width:150,height:150,borderRadius: 20}}/>
      <Image source={
        {
          uri:"https://avatars.githubusercontent.com/u/129139486?s=400&u=ab1e36746498ac43c783da0baae0363aaffa8d16&v=4"
        }
    } 
      style={{margin:20,width:150,height:150,borderRadius: 20}}/>
    </View>
  )
}
export default Images
```
<!-- ![Screenshot of the app](./images/sc01.jpeg "First page") -->
<img src="./images/sc01.jpeg" alt="Screenshot of the app" title="First page" width="200"/>
<img src="./images/sc02.jpeg" alt="Screenshot of the app" title="First page" width="200"/>


![Screenshot of the app](./images/image.png "First page")