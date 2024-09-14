import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const Flatlistone = () => {
  const products = [
    {
      image: "https://picsum.photos/200/300?random=1",
      name: "Product 1",
      rating: 4.5,
      price: 29.99,
    },
    {
      image: "https://picsum.photos/200/300?random=2",
      name: "Product 2",
      rating: 4.0,
      price: 19.99,
    },
    {
      image: "https://picsum.photos/200/300?random=3",
      name: "Product 3",
      rating: 3.5,
      price: 24.99,
    },
    {
      image: "https://picsum.photos/200/300?random=4",
      name: "Product 4",
      rating: 5.0,
      price: 39.99,
    },
    {
      image: "https://picsum.photos/200/300?random=5",
      name: "Product 5",
      rating: 4.2,
      price: 34.99,
    },
    {
      image: "https://picsum.photos/200/300?random=6",
      name: "Product 6",
      rating: 3.9,
      price: 21.99,
    },
    {
      image: "https://picsum.photos/200/300?random=7",
      name: "Product 7",
      rating: 4.3,
      price: 28.99,
    },
    {
      image: "https://picsum.photos/200/300?random=8",
      name: "Product 8",
      rating: 3.7,
      price: 23.99,
    },
    {
      image: "https://picsum.photos/200/300?random=9",
      name: "Product 9",
      rating: 4.6,
      price: 32.99,
    },
    {
      image: "https://picsum.photos/200/300?random=10",
      name: "Product 10",
      rating: 4.1,
      price: 27.99,
    },
    {
      image: "https://picsum.photos/200/300?random=11",
      name: "Product 11",
      rating: 3.8,
      price: 22.99,
    },
    {
      image: "https://picsum.photos/200/300?random=12",
      name: "Product 12",
      rating: 4.4,
      price: 30.99,
    },
    {
      image: "https://picsum.photos/200/300?random=13",
      name: "Product 13",
      rating: 3.6,
      price: 26.99,
    },
    {
      image: "https://picsum.photos/200/300?random=14",
      name: "Product 14",
      rating: 4.7,
      price: 35.99,
    },
    {
      image: "https://picsum.photos/200/300?random=15",
      name: "Product 15",
      rating: 4.2,
      price: 31.99,
    },
    {
      image: "https://picsum.photos/200/300?random=16",
      name: "Product 16",
      rating: 4.0,
      price: 25.99,
    },
    {
      image: "https://picsum.photos/200/300?random=17",
      name: "Product 17",
      rating: 3.9,
      price: 20.99,
    },
    {
      image: "https://picsum.photos/200/300?random=18",
      name: "Product 18",
      rating: 4.3,
      price: 29.99,
    },
    {
      image: "https://picsum.photos/200/300?random=19",
      name: "Product 19",
      rating: 4.5,
      price: 33.99,
    },
    {
      image: "https://picsum.photos/200/300?random=20",
      name: "Product 20",
      rating: 4.1,
      price: 28.99,
    },
    {
      image: "https://picsum.photos/200/300?random=21",
      name: "Product 21",
      rating: 3.7,
      price: 24.99,
    },
    {
      image: "https://picsum.photos/200/300?random=22",
      name: "Product 22",
      rating: 4.4,
      price: 32.99,
    },
    {
      image: "https://picsum.photos/200/300?random=23",
      name: "Product 23",
      rating: 4.0,
      price: 27.99,
    },
    {
      image: "https://picsum.photos/200/300?random=24",
      name: "Product 24",
      rating: 3.6,
      price: 21.99,
    },
    {
      image: "https://picsum.photos/200/300?random=25",
      name: "Product 25",
      rating: 4.6,
      price: 36.99,
    },
    {
      image: "https://picsum.photos/200/300?random=26",
      name: "Product 26",
      rating: 4.1,
      price: 30.99,
    },
    {
      image: "https://picsum.photos/200/300?random=27",
      name: "Product 27",
      rating: 3.8,
      price: 25.99,
    },
    {
      image: "https://picsum.photos/200/300?random=28",
      name: "Product 28",
      rating: 4.3,
      price: 31.99,
    },
    {
      image: "https://picsum.photos/200/300?random=29",
      name: "Product 29",
      rating: 4.2,
      price: 29.99,
    },
    {
      image: "https://picsum.photos/200/300?random=30",
      name: "Product 30",
      rating: 4.0,
      price: 26.99,
    },
    {
      image: "https://picsum.photos/200/300?random=31",
      name: "Product 31",
      rating: 3.9,
      price: 23.99,
    },
    {
      image: "https://picsum.photos/200/300?random=32",
      name: "Product 32",
      rating: 4.4,
      price: 34.99,
    },
    {
      image: "https://picsum.photos/200/300?random=33",
      name: "Product 33",
      rating: 4.1,
      price: 28.99,
    },
    {
      image: "https://picsum.photos/200/300?random=34",
      name: "Product 34",
      rating: 3.7,
      price: 22.99,
    },
    {
      image: "https://picsum.photos/200/300?random=35",
      name: "Product 35",
      rating: 4.5,
      price: 33.99,
    },
    {
      image: "https://picsum.photos/200/300?random=36",
      name: "Product 36",
      rating: 4.0,
      price: 27.99,
    },
    {
      image: "https://picsum.photos/200/300?random=37",
      name: "Product 37",
      rating: 3.6,
      price: 21.99,
    },
    {
      image: "https://picsum.photos/200/300?random=38",
      name: "Product 38",
      rating: 4.6,
      price: 35.99,
    },
    {
      image: "https://picsum.photos/200/300?random=39",
      name: "Product 39",
      rating: 4.2,
      price: 31.99,
    },
    {
      image: "https://picsum.photos/200/300?random=40",
      name: "Product 40",
      rating: 4.3,
      price: 30.99,
    },
    {
      image: "https://picsum.photos/200/300?random=41",
      name: "Product 41",
      rating: 4.1,
      price: 26.99,
    },
  ];

interface Product{
  image:string;
  name:string;
  rating:number;
  price:number;
}
  const renderItem = ({ item } : {item : Product}) => {
    return (
      <View>
        <Image source={{ uri: item.image }} />
        <Text>Name: {item.name}</Text>
        <Text>Rating: {item.rating}</Text>
        <Text>Price: {item.price}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList data = {products}
        keyExtractor={(item,index) => index.toString()}
        renderItem={renderItem}
        />
    </View>
  );
};

export default Flatlistone;
