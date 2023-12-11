import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const TrendingGifs = () => {
  const [isLikedArray, setIsLikedArray] = useState([false, false, false]);

  // like toggle
  const toggleLike = (index) => {
    const newIsLikedArray = [...isLikedArray];
    newIsLikedArray[index] = !newIsLikedArray[index];
    setIsLikedArray(newIsLikedArray);
  };

  // videos data
  const videoData = [
    {
      id: "1",
      imageUrl: require("../../assets/TrendingGifs/gif1.png"),
      playImageUrl: require("../../assets/TrendingGifs/gifbtn.png"),
      category: "Category",
      publisher: "Publisher   4h",
    },
    {
      id: "2",
      imageUrl: require("../../assets/TrendingGifs/gif2.png"),
      playImageUrl: require("../../assets/TrendingGifs/gifbtn.png"),
      category: "Category",
      publisher: "Publisher   4h",
    },
    {
      id: "3",
      imageUrl: require("../../assets/TrendingGifs/gif3.png"),
      playImageUrl: require("../../assets/TrendingGifs/gifbtn.png"),
      category: "Category",
      publisher: "Publisher   4h",
    },
  ];
  return (
    <>
      {/* top text */}
      <View style={styles.flex}>
        <Text style={styles.trendingvideoText}>Trending Gifs</Text>
        <TouchableOpacity>
          <Text style={styles.viewallText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* videos details render */}
      <FlatList
        horizontal
        data={videoData}
        renderItem={({ item, index }) => (
          <View style={styles.videoContainer}>
            {/* image */}
            <Image
              source={item.imageUrl}
              style={styles.videoImage}
              resizeMode="cover"
            />

            {/* play btn */}
            <TouchableOpacity style={styles.playbtnImage}>
              <Image
                source={item.playImageUrl}
                resizeMode="cover"
                style={styles.gifIcon}
              />
            </TouchableOpacity>

            {/* live text box */}
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>

            {/* publisher and icons */}
            <View style={styles.flex3}>
              <Text style={styles.publisherText}>{item.publisher}</Text>
              <View style={styles.flex}>
                <View style={styles.flex}>
                  <TouchableOpacity
                    style={styles.icon1}
                    onPress={() => toggleLike(index)}
                  >
                    <Image
                      source={
                        isLikedArray[index]
                          ? require("../../assets/Like2.png")
                          : require("../../assets/Like.png")
                      }
                    />
                  </TouchableOpacity>
                  <Text style={styles.number1}>5</Text>
                </View>
                <View style={styles.flex}>
                  <TouchableOpacity style={styles.icon2}>
                    <Image source={require("../../assets/message.png")} />
                  </TouchableOpacity>
                  <Text style={styles.number2}>2</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  trendingvideoText: {
    fontSize: 20,
    fontWeight: "700",
  },
  viewallText: {
    fontSize: 12,
    fontWeight: "400",
    textDecorationLine: "underline",
    color: "#01968B",
    marginTop: 6,
  },
  videoContainer: {
    width: 310,
    height: 220,
    marginRight: 10,
    marginTop: 15,
  },
  videoImage: {
    width: 310,
    height: 200,
    borderRadius: 15,
  },
  playbtnImage: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.70)",
    borderRadius: 50,
    left: 130,
    top: 75,
  },
  gifIcon: {
    left: 12,
    top: 18,
  },
  categoryBox: {
    position: "absolute",
    width: 80,
    height: 25,
    backgroundColor: "rgba(0, 0, 0, 0.70)",
    borderRadius: 5,
    top: 10,
    left: 15,
    justifyContent: "center",
  },
  categoryText: {
    position: "absolute",
    color: "white",
    fontSize: 13,
    fontWeight: "500",
    left: 15,
  },
  flex3: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 200,
    left: 4,
  },
  publisherText: {
    position: "absolute",
    fontSize: 13,
    fontWeight: "500",
  },
  icon1: {
    left: 220,
  },
  number1: {
    left: 230,
    fontSize: 13,
    fontWeight: "400",
  },
  icon2: {
    left: 240,
  },
  number2: {
    left: 250,
    fontSize: 13,
    fontWeight: "400",
  },
});

export default TrendingGifs;
