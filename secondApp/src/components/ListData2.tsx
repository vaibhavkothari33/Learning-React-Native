import { View, Text, FlatList } from "react-native";
import React from "react";

const ListData2 = () => {
    const city = [
      {
        id: 1,
        location: "London",
      },
      {
        id: 2,
        location: "Jaipur",
      },
      {
        id: 3,
        location: "Delhi",
      },
      {
        id: 4,
        location: "Gurugram",
      },
      {
        id: 5,
        location: "Lakhnow",
      },
      {
        id: 6,
        location: "Uttar Pradesh",
      },
      {
        id: 7,
        location: "Patna",
      },
      {
        id: 8,
        location: "Noida",
      },
];
    return (
      <View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={city}
          renderItem={({ item }) => {
          return <Text>{item.location}</Text>}}
        />
      </View>
    );
  };

export default ListData2;
