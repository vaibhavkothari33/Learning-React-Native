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
