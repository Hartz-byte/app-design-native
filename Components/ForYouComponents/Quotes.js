import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const Quotes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const imageData = [
    { id: "1", imageUrl: require("../../assets/quotes/quote1.png") },
    { id: "2", imageUrl: require("../../assets/quotes/quote2.png") },
    { id: "3", imageUrl: require("../../assets/quotes/quote3.png") },
    { id: "4", imageUrl: require("../../assets/quotes/quote4.png") },
    { id: "5", imageUrl: require("../../assets/quotes/quote5.png") },
  ];

  const handleMomentumScrollEnd = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const imageIndex = Math.round(contentOffset / width);
    setActiveIndex(imageIndex);
  };

  const handleIndicatorPress = (index) => {
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
    });
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

      {/* Indicator Dots */}
      <View style={styles.indicatorContainer}>
        {imageData.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor:
                  index === activeIndex ? "#01968B" : "#01968B80",
              },
            ]}
            onPress={() => handleIndicatorPress(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 285,
    marginRight: 10,
    borderRadius: 30,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#01968B80",
    marginHorizontal: 5,
  },
});

export default Quotes;
