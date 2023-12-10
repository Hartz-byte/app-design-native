import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import styles from "../HomeCategoryScreen/styles";

const TrendingNewsItem = ({ item }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showBookmarkMessage, setShowBookmarkMessage] = useState(false);

  //bookmark toggle
  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
    if (!isBookmarked) {
      setShowBookmarkMessage(true);

      // Hide the message after a specified duration
      setTimeout(() => {
        setShowBookmarkMessage(false);
      }, 2000);
    }
  };

  return (
    <TouchableOpacity style={styles.trendingNews}>
      <Image source={item.image} style={styles.trendingImage} />
      <View style={styles.trendingDetails}>
        <View style={styles.flex}>
          <Text style={styles.headText}>{item.title}</Text>

          {/* on press toggle */}
          <TouchableOpacity onPress={toggleBookmark}>
            <Image
              source={
                isBookmarked
                  ? require("../../assets/bookmark2.png")
                  : require("../../assets/bookmark.png")
              }
              style={styles.bookmark}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.trend}>
          <View style={styles.flex}>
            <Text style={styles.headText}>{item.publisher}</Text>

            {/* icons */}
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

      {showBookmarkMessage && (
        <View style={styles.messageBox}>
          <Text style={styles.messageText}>Bookmarked Successfully</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TrendingNewsItem;
