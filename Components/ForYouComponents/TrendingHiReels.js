import React, { useState, useRef } from "react";
import { StyleSheet, View, FlatList, Image, Dimensions } from "react-native";

const TrendingHiReels = () => {
  const flatListRef = useRef(null);

  const imageData = [
    { id: "1", imageUrl: require("../../assets/reels/reel1.png") },
    { id: "2", imageUrl: require("../../assets/reels/reel2.png") },
    { id: "3", imageUrl: require("../../assets/reels/reel3.png") },
  ];

  const handleMomentumScrollEnd = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const imageIndex = Math.round(contentOffset / width);
  };

  const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        data={imageData}
        renderItem={({ item }) => (
          <Image
            source={item.imageUrl}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 500,
    marginRight: 10,
    borderRadius: 30,
  },
});

export default TrendingHiReels;
