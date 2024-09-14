import { View, Text, Image } from "react-native";
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>ParentComponent</Text>
      <ChildComponent name="vaibhav" age={19} color="Green" />
    </View>
  );
};

export default ParentComponent;
