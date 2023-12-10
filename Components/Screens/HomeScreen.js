import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Following from "../HomeCategoryScreen/Following";
import ForYou from "../HomeCategoryScreen/ForYou";
import Headlights from "../HomeCategoryScreen/Headlights";
import Video from "../HomeCategoryScreen/Video";

const getCategoryComponent = (category) => {
  switch (category) {
    case "Following":
      return <Following />;
    case "For You":
      return <ForYou />;
    case "Video":
      return <Video />;
    case "Headlights":
      return <Headlights />;
    default:
      return null;
  }
};

const HomeScreen = () => {
  const categories = ["Following", "For You", "Video", "Headlights"];
  const [activeCategory, setActiveCategory] = useState("For You");

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handleCategoryPress(item)}
    >
      <Text
        style={[
          styles.categoryText,
          {
            color: activeCategory === item ? "black" : "#787878",
          },
        ]}
      >
        {item}
      </Text>
      {activeCategory === item && <View style={styles.indicator} />}
    </TouchableOpacity>
  );

  const handleCategoryPress = (category) => {
    setActiveCategory(category);
  };

  return (
    <View style={styles.mainContainer}>
      {/* top header */}
      <View style={styles.flex}>
        <Text style={styles.hiText}>Hi News</Text>
        <View style={styles.flex}>
          <TouchableOpacity>
            <Image source={require("../../assets/Search.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.soundIcon}>
            <Image source={require("../../assets/sound.png")} />
          </TouchableOpacity>
        </View>
      </View>

      {/* category selection */}
      <View style={styles.flex}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          renderItem={renderCategory}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        />
        <TouchableOpacity style={styles.filetrIcon}>
          <Image source={require("../../assets/FilterIcon.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.topBorder}/>

      {/* Render the active category */}
      {getCategoryComponent(activeCategory)}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  hiText: {
    fontWeight: "700",
    fontSize: 27,
    letterSpacing: 0.54,
    color: "#78CEE2"
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  soundIcon: {
    marginLeft: 15,
  },
  categoriesContainer: {
    marginTop: 15,
    width: "85%",
  },
  categoryItem: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: "relative",
  },
  categoryText: {
    fontSize: 15,
    fontWeight: "500",
  },
  indicator: {
    height: 3,
    backgroundColor: "#ED2726",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  filetrIcon: {
    marginTop: 18,
    marginLeft: 18,
  },
  // border: {
  //   width: 400,
  //   height: 2,
  //   backgroundColor: "red",
  //   marginTop: 1,
  // },
  // topHeadlinesText: {
  //   fontSize: 20,
  //   fontWeight: "700",
  //   marginTop: 15,
  //   letterSpacing: 0.6,
  // },
  topBorder: {
    width: 340,
    height: 0.5,
    backgroundColor: "#00000080",
    marginTop: 3,
  },
});

export default HomeScreen;
