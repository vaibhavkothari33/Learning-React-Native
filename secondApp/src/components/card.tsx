import { View, Text, Image,Button} from "react-native";
import React from "react";

const Card = () => {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>Hello world</Text>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/129139486?s=400&u=ab1e36746498ac43c783da0baae0363aaffa8d16&v=4",
        }}
        style={{ margin: 20, borderRadius: 500, width: 350, height: 350 }}
      />

      <Text style={{ textAlign: "center" }}>vaibhavkothari33</Text>
      <Button title="Click me" color={"red"} onPress={()=>
        console.log("Button Clicked")
        
      }></Button>
    </View>
  );
};

export default Card;
