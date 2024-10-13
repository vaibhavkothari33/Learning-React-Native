import { View, Text } from "react-native";
import React from "react";

const ValidPassword = () => <Text>Valid Password</Text>;
const InvalidPassword = () => <Text>InValid Password</Text>;

const Password = ({ isValid }) => {

    return isValid ? <ValidPassword/>:<InvalidPassword/>;
};
const Ternary = () => {
  return (
    <View>
      <Password isValid={true} />
      <Password isValid={false} />
    </View>
  );
};

export default Ternary;
