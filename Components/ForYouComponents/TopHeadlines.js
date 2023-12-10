import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "../HomeCategoryScreen/styles";

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

const TopHeadlines = ({
  data,
  activeImage,
  handleImageChange,
  scrollToImage,
}) => (
  <>
    <View style={styles.flex}>
      <Text style={styles.headlinsText}>Top Headlines</Text>
      <TouchableOpacity>
        <Text style={styles.viewAllText}>View All</Text>
      </TouchableOpacity>
    </View>

    <FlatList
      horizontal
      data={data}
      renderItem={({ item, index }) => (
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
      )}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onScroll={handleImageChange}
    />

    <View style={styles.indicatorContainer}>
      {data.map((_, index) => (
        <TouchableOpacity key={index} onPress={() => scrollToImage(index)}>
          <ImageIndicator index={index} activeIndex={activeImage} />
        </TouchableOpacity>
      ))}
    </View>
  </>
);

export default TopHeadlines;
