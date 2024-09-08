import { View, Text } from "react-native";
import React from "react";

const Dynamic = () => {
  const username = "Vaibhav Kothari";
  const age = "19";
  const multi = (a: number, b: number) => a * b;
  return (
    <View>
      <Text style={{textAlign:"center"}}>My name is {username}</Text>
      <Text style={{textAlign:"center"}}>My age is {age}</Text>
      <Text style={{textAlign:"center"}}> 3 * 6 = {multi(3,6)}</Text>
      <Text style={{textAlign:"center"}}> 3 + 6 = {3+6}</Text>
    </View>
  );
};
export default Dynamic;
