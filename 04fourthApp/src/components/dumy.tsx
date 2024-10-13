import { View, Text } from "react-native";
import React from "react";

const ValidPassword = () => <Text>Valid password</Text>;
const InvalidPassword = () => <Text>Invalid password</Text>;

const Password = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />;
  }

  return <InvalidPassword />;
};
const dumy = () => {
  return (
    <View>
      <Password isValid={false}/>
    </View>
  );
};

export default dumy;
