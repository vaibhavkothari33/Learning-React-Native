import { View, Text } from "react-native";
import React, { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

const SharingState = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Component1 count={count} onclickHandler={()=>setCount(count + 1 )} />
      <Component2 count={count} onclickHandler={()=>setCount(count - 1 )} />
    </View>
  );
};

export default SharingState;
