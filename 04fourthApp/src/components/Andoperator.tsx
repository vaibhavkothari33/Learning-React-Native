import { View, Text, FlatList } from "react-native";
import React from "react";

// const arr = [];
const arr = ["milk", "eggs", "coffee", "tea", "bread"];

const Andoperator = () => {
  return (
    <View>
        <Text style={{textAlign:"center"}}>Cart 🛒</Text>

        {arr.length >0 && (
            <Text style={{textAlign:"center"}}>You have {arr.length} items in your cart</Text>
        )}
      <FlatList data={arr} renderItem={({ item }) => <Text style={{textAlign:"center"}}>{item}</Text>} />
    </View>
  );
};
 
export default Andoperator;
