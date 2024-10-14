import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const colors = ["red", "blue", "green", "yellow", "pink"];

const ColorPicker = () => {
  const [selectColor, setSelectColor] = useState("white");

  return (
    <View style={{ backgroundColor: selectColor }}>
      <Text style={styles.title}>Select a Color</Text>

      <View style={styles.colorContainer}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            style={[styles.colorBox, { backgroundColor: color }]}
            onPress={() => setSelectColor(color)}
          />
        ))}
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  colorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  colorBox: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
  },
});
export default ColorPicker;
