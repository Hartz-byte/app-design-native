import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const TrendingImages = () => {
  const [isLikedArray, setIsLikedArray] = useState([false, false, false]);

  // like toggle
  const toggleLike = (index) => {
    const newIsLikedArray = [...isLikedArray];
    newIsLikedArray[index] = !newIsLikedArray[index];
    setIsLikedArray(newIsLikedArray);
  };

  //image data
  const imageData = [
    {
      id: "1",
      imageUrl: require("../../assets/TrendingImage/image1.png"),
      category: "Category",
      cardIconUrl: require("../../assets/TrendingImage/ImageCardIcon.png"),
      description:
        "Lorem ipsum dolor sit amet consectetur. Donec feugiat mattis",
      publisher: "Publisher",
      time: "4h",
      likeIconUrl: require("../../assets/Like.png"),
      likes: 5,
      messageIconUrl: require("../../assets/message.png"),
      comments: 2,
    },
    {
      id: "2",
      imageUrl: require("../../assets/TrendingImage/image2.png"),
      category: "Category",
      cardIconUrl: require("../../assets/TrendingImage/ImageCardIcon.png"),
      description:
        "Lorem ipsum dolor sit amet consectetur. Donec feugiat mattis",
      publisher: "Publisher",
      time: "4h",
      likeIconUrl: require("../../assets/Like.png"),
      likes: 5,
      messageIconUrl: require("../../assets/message.png"),
      comments: 2,
    },
    {
      id: "3",
      imageUrl: require("../../assets/TrendingImage/image3.png"),
      category: "Category",
      cardIconUrl: require("../../assets/TrendingImage/ImageCardIcon.png"),
      description:
        "Lorem ipsum dolor sit amet consectetur. Donec feugiat mattis",
      publisher: "Publisher",
      time: "4h",
      likeIconUrl: require("../../assets/Like.png"),
      likes: 5,
      messageIconUrl: require("../../assets/message.png"),
      comments: 2,
    },
  ];

  return (
    <View>
      <FlatList
        horizontal
        data={imageData}
        renderItem={({ item, index }) => (
          <View>
            <Image
              source={item.imageUrl}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.flex}>
              <View style={styles.categoryBox}>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
              <TouchableOpacity>
                <Image source={item.cardIconUrl} style={styles.cardIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.flex2}>
              <View style={styles.flex2}>
                <Text style={styles.publisher}>{item.publisher}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>

              <View style={styles.likeIcon}>
                <TouchableOpacity onPress={() => toggleLike(index)}>
                  <Image
                    source={
                      isLikedArray[index]
                        ? require("../../assets/Like2.png")
                        : require("../../assets/Like.png")
                    }
                  />
                </TouchableOpacity>
                <Text style={styles.number}> {item.likes} </Text>
              </View>
              <View style={styles.messageIcon}>
                <TouchableOpacity>
                  <Image source={require("../../assets/message.png")} />
                </TouchableOpacity>
                <Text style={styles.number}> {item.comments} </Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 310,
    height: 200,
    marginRight: 10,
    borderRadius: 15,
  },
  flex: {
    flexDirection: "row",
    position: "absolute",
  },
  categoryBox: {
    width: 80,
    height: 25,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.70)",
    justifyContent: "center",
    left: 15,
    top: 10,
  },
  categoryText: {
    color: "white",
    fontSize: 13,
    fontWeight: "400",
    left: 12,
  },
  cardIcon: {
    left: 190,
    top: 10,
  },
  description: {
    position: "absolute",
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    left: 12,
    top: 145,
  },
  flex2: {
    flexDirection: "row",
  },
  publisher: {
    fontSize: 13,
    fontWeight: "500",
  },
  time: {
    fontSize: 13,
    fontWeight: "400",
    left: 10,
  },
  likeIcon: {
    flexDirection: "row",
    left: 160,
  },
  messageIcon: {
    flexDirection: "row",
    left: 170,
  },
});

export default TrendingImages;
