import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Top360Videos = () => {
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
      imageUrl: require("../../assets/video/video1.png"),
      title: "Lorem ipsum dolor amet consectetur. Donec feugiat mattis",
      playImageUrl: require("../../assets/video/360view.png"),
      category: "Category",
      time: "2:30",
      publisher: "Publisher   4h",
    },
    {
      id: "2",
      imageUrl: require("../../assets/video/video2.png"),
      title: "Lorem ipsum dolor amet consectetur. Donec feugiat mattis",
      playImageUrl: require("../../assets/video/360view.png"),
      category: "Category",
      time: "2:30",
    },
    {
      id: "3",
      imageUrl: require("../../assets/video/video3.png"),
      title: "Lorem ipsum dolor amet consectetur. Donec feugiat mattis",
      playImageUrl: require("../../assets/video/360view.png"),
      category: "Category",
      time: "2:30",
    },
  ];
  return (
    <>
      {/* top text */}
      <View style={styles.flex}>
        <Text style={styles.trendingvideoText}>Top 360 Videos</Text>
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

            {/* text */}
            <Text style={styles.title}>{item.title}</Text>

            {/* play btn */}
            <TouchableOpacity style={styles.playbtnImage}>
              <Image
                source={item.playImageUrl}
                resizeMode="cover"
                style={styles.iconText}
              />
            </TouchableOpacity>

            {/* bottom items */}
            <View style={styles.flex2}>
              <View style={styles.categoryBox}>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
              <Text style={styles.time}>{item.time}</Text>
            </View>

            {/* publisher and icons */}
            <View style={styles.flex3}>
              <View>
                <Text style={styles.publisherText}>Publisher</Text>
                <Text style={styles.hourText}>4h</Text>
              </View>
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
  title: {
    position: "absolute",
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.3,
    marginTop: 10,
    marginLeft: 15,
  },
  playbtnImage: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.50)",
    borderRadius: 50,
    left: 130,
    top: 75,
  },
  iconText: {
    left: 5,
    top: 5,
  },
  flex2: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
  },
  categoryBox: {
    position: "absolute",
    width: 80,
    height: 25,
    backgroundColor: "rgba(0, 0, 0, 0.70)",
    borderRadius: 5,
    top: 160,
    left: 15,
  },
  categoryText: {
    position: "absolute",
    color: "white",
    fontSize: 13,
    fontWeight: "400",
    left: 15,
    top: 3,
  },
  time: {
    top: 165,
    color: "white",
    fontSize: 12,
    fontWeight: "400",
    left: 260,
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
  hourText: {
    position: "absolute",
    fontSize: 13,
    fontWeight: "400",
    left: 70,
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

export default Top360Videos;
