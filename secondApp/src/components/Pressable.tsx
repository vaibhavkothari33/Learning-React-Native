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
