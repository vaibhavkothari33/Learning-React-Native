import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const UpdateObject = () => {
  const [movie, setMovie] = useState({
    title: "DON 1",
    rating: 9,
    IMDB: 5.3,
  });

  const handleClick=()=>{
    setMovie({...movie,rating:5})
  }
  return (
    <View>
      <Text style={{textAlign:"center"}}>UpdateObject</Text>
      <Text style={{textAlign:"center"}}>{movie.title}</Text>
      <Text style={{textAlign:"center"}}>{movie.rating}</Text>
      <Text style={{textAlign:"center"}}>{movie.IMDB}</Text>
      <Button title="Change Ratings" onPress={handleClick}/>
    </View>
  ); 
};

export default UpdateObject;
