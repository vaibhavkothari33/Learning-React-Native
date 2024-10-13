import { View, Text, Button } from "react-native";
import React from "react";

const WithoutState = () => {
  let counter = 0;
  return (
    <View>
      <Text style={{ textAlign: "center" }}>Count: {counter}</Text>
      <Button title="Click" color={"red"} onPress={() => counter++} />  
      <Button title="Click" color={"green"} onPress={()=>console.log(counter)
      }
       />
    </View>
  );
};

export default WithoutState;
