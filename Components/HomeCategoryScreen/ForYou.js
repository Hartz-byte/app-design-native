import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import TopHeadlines from "../ForYouComponents/TopHeadlines";
import TrendingNews from "../ForYouComponents/TrendingNews";
import Auto from "../ForYouComponents/Auto";
import TrendingVideos from "../ForYouComponents/TrendingVideos";
import TrendingImages from "../ForYouComponents/TrendingImages";
import Quotes from "../ForYouComponents/Quotes";
import styles from "./styles";

const { width } = Dimensions.get("window");

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

  const trendingNewsData2 = [
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
    {
      id: "4",
      image: require("../../assets/TrendingNewsImages/health.png"),
      title: "Health 2h",
      description: "Lorem ipsum dolor sitamet consectetur. Donecfeugi...",
      publisher: "Publisher",
      likes: 5,
      comments: 2,
    },
  ];

  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* top headlines component */}
      <TopHeadlines
        data={data}
        activeImage={activeImage}
        handleImageChange={handleImageChange}
        scrollToImage={scrollToImage}
      />

      <View style={styles.flex2}>
        <Text style={styles.headlinsText}>Trending News</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* trending news component  */}
      <FlatList
        data={trendingNewsData}
        renderItem={({ item, index }) => (
          <TrendingNews key={index} item={{ ...item, index }} />
        )}
        keyExtractor={(item) => item.id}
      />

      {/* border */}
      <View style={styles.border} />

      {/* auto component */}
      <Auto />

      {/* border */}
      <View style={styles.border} />

      {/* trending videos component */}
      <TrendingVideos />

      {/* border */}
      <View style={styles.border} />

      {/* trending news component 2  */}
      <FlatList
        data={trendingNewsData2}
        renderItem={({ item, index }) => (
          <TrendingNews key={index} item={{ ...item, index }} />
        )}
        keyExtractor={(item) => item.id}
      />

      {/* border */}
      <View style={styles.border} />

      {/* trending images */}
      <View style={styles.flex}>
        <Text style={styles.headlinsText}>Trending Images</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      {/* component */}
      <TrendingImages />

      {/* border */}
      <View style={styles.border} />

      {/* trending news component 2  */}
      <FlatList
        data={trendingNewsData2}
        renderItem={({ item, index }) => (
          <TrendingNews key={index} item={{ ...item, index }} />
        )}
        keyExtractor={(item) => item.id}
      />

      {/* border */}
      <View style={styles.border} />

      {/* quotes section */}
      <View style={styles.flex}>
        <Text style={styles.headlinsText}>Quotes Of The Day</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      {/* component */}
      <Quotes />

      {/* border */}
      <View style={styles.border} />

      {/* auto component */}
      <Auto />

      {/* border */}
      <View style={styles.border} />
    </ScrollView>
  );
};

export default ForYou;
