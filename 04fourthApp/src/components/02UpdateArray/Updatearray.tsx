import { View, Text, FlatList, Button } from "react-native";
import React, { useState } from "react";

const Updatearray = () => {
  const [friend, setFriend] = useState([
    "Vaibhav",
    "Gourav",
    "Vanshita",
    "Charu",
  ]);

  const addOne = () => {
    setFriend([...friend, "Madhu"]);
  };

  const removeOne = () => {
    setFriend(friend.filter((f) => f !== "Madhu"));
  };

  const updateOne = () => {
    setFriend(friend.map((f) => (f === "Vaibhav" ? "Vaibhav Kothari" : f)));
  };

  return (
    <View>
      <Text style={{ textAlign: "center" }}>Updatearray</Text>
      <FlatList
        data={friend}
        keyExtractor={(friends) => friends}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Button title="Add Friend" onPress={addOne} />
      <Button title="Delete Friend" onPress={removeOne} />
      <Button title="Update Friend" onPress={updateOne} />
    </View>
  );
};

export default Updatearray;
