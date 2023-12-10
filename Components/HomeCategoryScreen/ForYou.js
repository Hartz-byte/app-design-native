import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

//horizontal line indiactor
const ImageIndicator = ({ index, activeIndex }) => (
  <View
    style={[
      styles.imageIndicator,
      {
        backgroundColor: index === activeIndex ? "#000000" : "#B1B1B1",
        width: index === activeIndex ? 20 : 20, // Change the width for the active indicator
      },
    ]}
  />
);

const ForYou = () => {
  const [activeImage, setActiveImage] = useState(0);
  const scrollViewRef = useRef(null);

  // indicator changes
  const handleImageChange = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const imageIndex = Math.round(contentOffset / width);
    setActiveImage(imageIndex);
  };

  // images scroll property
  const scrollToImage = (index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * width,
        animated: true,
      });
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      {/* top headlines and view all text */}
      <View style={styles.flex}>
        <Text style={styles.headlinsText}>Top Headlines</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal scroll with images */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imageContainer}
        onScroll={handleImageChange}
        pagingEnabled
        ref={scrollViewRef}
      >
        <View>
          <Image
            source={require("../../assets/HeadlineImages/headline1.png")}
            style={styles.image}
          />
          <View style={styles.imageText}>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}>Category</Text>
            </View>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet conse ctetur. Molestie turpis et.
            </Text>
            <Text style={styles.publisherText}>
              Publisher
              <View style={styles.dot} /> {/* White dot */}
              2h
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require("../../assets/HeadlineImages/headline2.png")}
            style={styles.image}
          />
          <View style={styles.imageText}>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}>Category</Text>
            </View>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet conse ctetur. Molestie turpis et.
            </Text>
            <Text style={styles.publisherText}>
              Publisher
              <View style={styles.dot} /> {/* White dot */}
              2h
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require("../../assets/HeadlineImages/headline3.png")}
            style={styles.image}
          />
          <View style={styles.imageText}>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}>Category</Text>
            </View>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet conse ctetur. Molestie turpis et.
            </Text>
            <Text style={styles.publisherText}>
              Publisher
              <View style={styles.dot} /> {/* White dot */}
              2h
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Image Indicators */}
      <View style={styles.indicatorContainer}>
        {[0, 1, 2].map((index) => (
          <TouchableOpacity key={index} onPress={() => scrollToImage(index)}>
            <ImageIndicator index={index} activeIndex={activeImage} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 15,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headlinsText: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  viewAllText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#01968B",
    textDecorationLine: "underline",
    marginTop: 7,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  imageContainer: {
    marginTop: 20,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  imageIndicator: {
    height: 5,
    borderRadius: 3,
    marginHorizontal: 5,
  },
  imageText: {
    position: "absolute",
    marginLeft: 20,
    marginTop: 10,
  },
  categoryBox: {
    width: 80,
    height: 25,
    backgroundColor: "rgba(0, 0, 0, 0.70);",
    borderRadius: 5,
    justifyContent: "center",
  },
  categoryText: {
    color: "white",
    paddingLeft: 14,
    fontSize: 13,
    fontWeight: "400",
  },
  descriptionText: {
    color: "white",
    marginTop: 80,
    fontSize: 17,
    fontWeight: "500",
  },
  publisherText: {
    color: "white",
    marginTop: 5,
    fontSize: 13,
    fontWeight: "400",
  },
  dot: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "white",
  },
});

export default ForYou;
