import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const LiveVideos = () => {
  // videos data
  const videoData = [
    {
      id: "1",
      imageUrl: require("../../assets/video/video1.png"),
      playImageUrl: require("../../assets/video/playbutton.png"),
      category: "Live",
      publisher: "Publisher",
    },
    {
      id: "2",
      imageUrl: require("../../assets/video/video2.png"),
      playImageUrl: require("../../assets/video/playbutton.png"),
      category: "Live",
      publisher: "Publisher",
    },
    {
      id: "3",
      imageUrl: require("../../assets/video/video3.png"),
      playImageUrl: require("../../assets/video/playbutton.png"),
      category: "Live",
      publisher: "Publisher",
    },
  ];
  return (
    <>
      {/* top text */}
      <View style={styles.flex}>
        <Text style={styles.trendingvideoText}>Live Videos</Text>
        <TouchableOpacity>
          <Text style={styles.viewallText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* videos details render */}
      <FlatList
        horizontal
        data={videoData}
        renderItem={({ item }) => (
          <View style={styles.videoContainer}>
            {/* image */}
            <Image
              source={item.imageUrl}
              style={styles.videoImage}
              resizeMode="cover"
            />

            {/* play btn */}
            <TouchableOpacity style={styles.playbtnImage}>
              <Image source={item.playImageUrl} resizeMode="cover" />
            </TouchableOpacity>

            {/* live text box */}
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>

            {/* publisher and icons */}
            <View style={styles.flex3}>
              <Text style={styles.publisherText}>Publisher</Text>
              <View style={styles.flex}>
                <View style={styles.flex}>
                  <TouchableOpacity style={styles.icon1}>
                    <Image source={require("../../assets/Like.png")} />
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
    left: 130,
    top: 75,
  },
  categoryBox: {
    position: "absolute",
    width: 57,
    height: 21,
    backgroundColor: "#ED2726",
    borderRadius: 5,
    top: 160,
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

export default LiveVideos;
