import { View, Text, Image, Button } from "react-native";
import React from "react";

const CarComponent = () => {
  const price = 2000000;
  const imageWidth = 400;
  const imageHeight = 200;
  const name = "Ferrari 296 GTB";
  const carRating = 3.5;
  const cardesc = "here is the random text";
  return (
    <View>
      <Text>CarComponent</Text>
      <Image
        source={{
          uri: "https://imgd.aeplcdn.com/310x174/n/cw/ec/154779/296-gtb-exterior-right-front-three-quarter-23.jpeg?isig=0&q=80",
        }}
        style={{
          width: imageWidth,
          height: imageHeight,
          alignContent: "center",
        }}
      ></Image>
      <Text style={{textAlign:"center"}}>Car Name: {name}</Text>
      <Text style={{textAlign:"center"}}>Car Rating: {carRating}</Text>
      <Text style={{textAlign:"center"}}>Description: {cardesc}</Text>
      <Text style={{textAlign:"center",backgroundColor:"black",color:"white"}}>Price: $ {price}</Text>
      <Button title="Buy Now" color="red" onPress={()=>{
        console.log("Button Pressed for buy now")
        
      }}></Button>
      <Image
        source={{
          uri: "https://imgd.aeplcdn.com/310x174/n/cw/ec/95143/720s-coupe-exterior-right-front-three-quarter.jpeg?q=80",
        }}
        style={{
          width: imageWidth,
          height: imageHeight,
          alignContent: "center",
        }}
      ></Image>
      <Text style={{textAlign:"center"}}>Car Name: {name}</Text>
      <Text style={{textAlign:"center"}}>Car Rating: {carRating}</Text>
      <Text style={{textAlign:"center"}}>Description: {cardesc}</Text>
      <Text style={{textAlign:"center"}}>Price: $ {price}</Text>
      <Button title="Buy Now" color="red" onPress={()=>{
        console.log("Button Pressed for buy now")
        
      }}></Button>
      <Image
        source={{
          uri: "https://imgd.aeplcdn.com/227x128/cw/specialVersions/5130.jpg?v=20170303023618&q=80",
        }}
        style={{
          width: imageWidth,
          height: imageHeight,
          alignContent: "center",
        }}
      ></Image>
      <Text style={{textAlign:"center"}}>Car Name: {name}</Text>
      <Text style={{textAlign:"center"}}>Car Rating: {carRating}</Text>
      <Text style={{textAlign:"center"}}>Description: {cardesc}</Text>
      <Button title="Buy Now" color="red" onPress={()=>{
        console.log("Button Pressed for buy now")
        
      }}></Button>
     
    </View>
  );
};

export default CarComponent;
