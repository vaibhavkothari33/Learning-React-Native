import { View, Text, FlatList } from "react-native";
import React from "react";

const ListData = () => {
    const fruits = ["Apple", "Banana", "Orange","Grapes","Watermelon"];
  return (
    <View>
      <FlatList
        data={fruits}
        keyExtractor={(item) =>item} // to get the unique keys
        renderItem={({ item }) => {
            return <Text style={{textAlign:"center"}}>{item}</Text>
        }}
      />
    </View>
  );
};

export default ListData;
