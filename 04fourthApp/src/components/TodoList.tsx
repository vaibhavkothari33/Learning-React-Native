import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const Todolist = () => {
    const [text,setText] = useState("");
    const [todo,setTodo] = useState([]);
  return (
    <View>
      <Text style={styles.header}>Todolist</Text>
      <TextInput style={styles.input} value={text} onChangeText={setText} placeholder='Add a new task'/>

    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    todoItem: {
      padding: 15,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
    },
    todoText: {
      fontSize: 18,
    },
  });

export default Todolist
