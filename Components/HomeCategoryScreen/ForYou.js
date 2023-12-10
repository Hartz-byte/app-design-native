import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from "react-native";

const { width } = Dimensions.get("window");

const ImageIndicator = ({ index, activeIndex }) => (
  <View
    style={[
      styles.imageIndicator,
      {
        backgroundColor: index === activeIndex ? "#000000" : "#B1B1B1",
        width: 20,
      },
    ]}
  />
);

const TrendingNewsItem = ({ item }) => (
  <TouchableOpacity style={styles.trendingNews}>
    <Image source={item.image} style={styles.trendingImage} />
    <View style={styles.trendingDetails}>
      <View style={styles.flex}>
        <Text style={styles.headText}>{item.title}</Text>
        <TouchableOpacity>
          <Image
            source={require("../../assets/bookmark.png")}
            style={styles.bookmark}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.trend}>
        <View style={styles.flex}>
          <Text style={styles.headText}>{item.publisher}</Text>
          <View style={styles.likeIcon}>
            <TouchableOpacity>
              <Image source={require("../../assets/Like.png")} />
            </TouchableOpacity>
            <Text style={styles.number}> {item.likes} </Text>
          </View>
          <View style={styles.messageIcon}>
            <TouchableOpacity>
              <Image source={require("../../assets/message.png")} />
            </TouchableOpacity>
            <Text style={styles.number}> {item.comments} </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={require("../../assets/More.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const ForYou = () => {
  const [activeImage, setActiveImage] = useState(0);
  const flatListRef = useRef(null);

  const handleImageChange = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const imageIndex = Math.round(contentOffset / width);
    setActiveImage(imageIndex);
  };

  const scrollToImage = (index) => {
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  const renderImageItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => scrollToImage(index)}>
      <View>
        <Image source={item.image} style={styles.image} />
        <View style={styles.imageText}>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <Text style={styles.publisherText}>
            {item.publisher}
            <View style={styles.dot} />
            {item.time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderTrendingNewsItem = ({ item, index }) => (
    <TrendingNewsItem item={{ ...item, index }} scrollToImage={scrollToImage} />
  );

  const data = [
    {
      id: "1",
      image: require("../../assets/HeadlineImages/headline1.png"),
      category: "Category",
      description:
        "Lorem ipsum dolor sit amet conse ctetur. Molestie turpis et.",
      publisher: "Publisher",
      time: "2h",
    },
    {
      id: "2",
      image: require("../../assets/HeadlineImages/headline2.png"),
      category: "Category",
      description:
        "Lorem ipsum dolor sit amet conse ctetur. Molestie turpis et.",
      publisher: "Publisher",
      time: "2h",
    },
    {
      id: "3",
      image: require("../../assets/HeadlineImages/headline3.png"),
      category: "Category",
      description:
        "Lorem ipsum dolor sit amet conse ctetur. Molestie turpis et.",
      publisher: "Publisher",
      time: "2h",
    },
  ];

  const trendingNewsData = [
    {
      id: "1",
      image: require("../../assets/TrendingNewsImages/sports.png"),
      title: "Sports 2h",
      description: "Lorem ipsum dolor sitamet consectetur. Donecfeugi...",
      publisher: "Publisher",
      likes: 5,
      comments: 2,
    },
    {
      id: "2",
      image: require("../../assets/TrendingNewsImages/entertainment.png"),
      title: "Entertainment 2h",
      description: "Lorem ipsum dolor sitamet consectetur. Donecfeugi...",
      publisher: "Publisher",
      likes: 5,
      comments: 2,
    },
    {
      id: "3",
      image: require("../../assets/TrendingNewsImages/technology.png"),
      title: "Technology 2h",
      description: "Lorem ipsum dolor sitamet consectetur. Donecfeugi...",
      publisher: "Publisher",
      likes: 5,
      comments: 2,
    },
  ];

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.flex}>
        <Text style={styles.headlinsText}>Top Headlines</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={data}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={flatListRef}
        onScroll={handleImageChange}
      />

      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => scrollToImage(index)}>
            <ImageIndicator index={index} activeIndex={activeImage} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.flex2}>
        <Text style={styles.headlinsText}>Trending News</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={trendingNewsData}
        renderItem={renderTrendingNewsItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 15,
  },
  flex: {
    flex: 1,
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
  flex2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  trendingNews: {
    marginTop: 15,
    flexDirection: "row",
  },
  trendingImage: {
    width: 90,
    height: 100,
  },
  trendingDetails: {
    flex: 1,
    marginLeft: 10,
  },
  bookmark: {
    right: 10,
  },
  trend: {
    paddingTop: 8,
  },
  messageIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    left: 30,
  },
  likeIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    left: 55,
  },
  number: {
    marginBottom: 2,
  },
  headText: {
    fontSize: 13,
    fontWeight: "500",
  },
  description: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ForYou;
