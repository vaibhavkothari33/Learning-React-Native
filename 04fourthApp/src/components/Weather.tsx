import { View, Text, Button, TextInput ,StyleSheet} from "react-native";
import React, { useState } from "react";

const Weatherdata = {
  London: "20 C ,Clear",
  India: "34 C ,Sunny",
  USA: "23 C ,Cloudy",
  NewYork: "24 C ,Rainy",
};
const Weather = () => {
  const [city, setCity] = useState(" ");
  const [Weather, setWeather] = useState(" ");

  const getWeather = () => {
    setWeather(Weatherdata[city] || "No data available");
  };
  return (
    <View>
      <Text style={styles.title}>Weather App</Text>
      <TextInput style={styles.input} placeholder="Enter City" value={city} onChangeText={setCity} />
      <Button  title="Get Weather" onPress={getWeather} />
      {/* print the weather */}
      {Weather ? <Text style={styles.weather}>{Weather}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      width: "100%",
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    weather: {
      fontSize: 18,
      marginTop: 20,
    },
  });
  

export default Weather;
