import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Auto = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <>
      {/* top details text */}
      <View style={styles.flex}>
        <View style={styles.flex}>
          <Text style={styles.autoText}>Auto</Text>
          <Text style={styles.dateText}>23 Jun 2023</Text>
        </View>
        <TouchableOpacity onPress={toggleBookmark}>
          <Image
            source={
              isBookmarked
                ? require("../../assets/bookmark2.png")
                : require("../../assets/bookmark.png")
            }
            style={styles.bookmarkIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.descriptionText}>
        Lorem ipsum dolor sit amet consectetu. Mi nisi gravida et eu.
      </Text>

      {/* car images */}
      <View style={styles.flex}>
        <Image
          source={require("../../assets/cars/car1.png")}
          style={styles.carImage}
        />
        <Image
          source={require("../../assets/cars/car2.png")}
          style={styles.carImage}
        />
        <Image
          source={require("../../assets/cars/car3.png")}
          style={styles.carImage}
        />
      </View>

      {/* publisher text and icons */}
      <View style={styles.flex2}>
        <Text>Publisher</Text>
        <View style={styles.flex}>
          {/* icons */}
          <View style={styles.flex}>
            <TouchableOpacity onPress={toggleLike}>
              <Image
                source={
                  isLiked
                    ? require("../../assets/Like2.png")
                    : require("../../assets/Like.png")
                }
              />
            </TouchableOpacity>
            <Text style={styles.number}>5</Text>
          </View>
          <View style={styles.flex}>
            <TouchableOpacity>
              <Image source={require("../../assets/message.png")} />
            </TouchableOpacity>
            <Text style={styles.number}>2</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={require("../../assets/More.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  autoText: {
    fontSize: 13,
    fontWeight: "500",
    letterSpacing: 0.26,
  },
  dateText: {
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0.26,
    marginLeft: 8,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.32,
    marginTop: 4,
    marginBottom: 6,
  },
  carImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  flex2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  number: {
    marginLeft: 8,
    marginRight: 8,
  },
  bookmarkIcon: {
    width: 20,
    height: 20,
  },
});

export default Auto;
