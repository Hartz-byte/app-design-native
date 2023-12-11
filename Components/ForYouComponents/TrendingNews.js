import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
} from "react-native";
import styles from "../HomeCategoryScreen/styles";

const TrendingNewsItem = ({ item }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showBookmarkMessage, setShowBookmarkMessage] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isMoreOptionsVisible, setIsMoreOptionsVisible] = useState(false);
  const [isRemarkableOptionsVisible, setIsRemarkableOptionsVisible] =
    useState(false);
  const [isShareOptionsVisible, setIsShareOptionsVisible] = useState(false);

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

  //like toggle
  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  // Function to handle More.png click
  const handleMoreOptions = () => {
    setIsMoreOptionsVisible(true);
  };

  // Function to handle option selection in the More Options popup
  const handleOptionSelect = (option) => {
    if (option === "Report") {
      setIsMoreOptionsVisible(false);
      setIsRemarkableOptionsVisible(true);
    } else if (option === "Share") {
      setIsMoreOptionsVisible(false);
      setIsShareOptionsVisible(true);
    }
  };

  // Function to handle option selection in the Remarkable Options popup
  const handleRemarkableOptionSelect = (option) => {
    setIsRemarkableOptionsVisible(true);
  };

  // checkbox
  const CheckBox = ({ isChecked }) => (
    <Text style={isChecked ? popupStyles.checkedBox : popupStyles.uncheckedBox}>
      {isChecked ? "☑" : "☐"}
    </Text>
  );

  return (
    <TouchableOpacity style={styles.trendingNews}>
      <Image source={item.image} style={styles.trendingImage} />
      <View style={styles.trendingDetails}>
        <View style={styles.flex}>
          <Text style={styles.headText}>{item.title}</Text>

          {/* on press bookmark toggle */}
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
              <TouchableOpacity onPress={toggleLike}>
                <Image
                  source={
                    isLiked
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
            <View>
              <TouchableOpacity onPress={handleMoreOptions}>
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

      {/* More Options Popup */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isMoreOptionsVisible}
        onRequestClose={() => setIsMoreOptionsVisible(false)}
      >
        <View style={popupStyles.modalContainer}>
          <View style={popupStyles.optionContainer}>
            <TouchableOpacity
              onPress={() => handleOptionSelect("Not interested")}
            >
              <View style={popupStyles.flex2}>
                <Image
                  source={require("../../assets/MoreOptionsIcons/heartslash.png")}
                  style={popupStyles.sideIcon}
                />
                <Text style={popupStyles.optionText}>Not interested</Text>
              </View>
            </TouchableOpacity>

            {/* border */}
            <View style={popupStyles.border} />

            <TouchableOpacity
              onPress={() =>
                handleOptionSelect(`Block source: ${item.publisher}`)
              }
            >
              <View style={popupStyles.flex2}>
                <Image
                  source={require("../../assets/MoreOptionsIcons/forbidden.png")}
                  style={popupStyles.sideIcon}
                />
                <Text style={popupStyles.optionText}>
                  Block source: {item.publisher}
                </Text>
              </View>
            </TouchableOpacity>

            {/* border */}
            <View style={popupStyles.border} />

            <TouchableOpacity onPress={() => handleOptionSelect("Report")}>
              <View style={popupStyles.flex2}>
                <Image
                  source={require("../../assets/MoreOptionsIcons/ReportIcon.png")}
                  style={popupStyles.sideIcon}
                />
                <View style={popupStyles.flex}>
                  <Text style={popupStyles.optionText}>Report</Text>
                  <Image
                    source={require("../../assets/MoreOptionsIcons/RightArrow.png")}
                    style={popupStyles.arrowIcon}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/* border */}
            <View style={popupStyles.border} />

            <TouchableOpacity onPress={() => handleOptionSelect("Share")}>
              <View style={popupStyles.flex2}>
                <Image
                  source={require("../../assets/MoreOptionsIcons/Share.png")}
                  style={popupStyles.sideIcon}
                />
                <Text style={popupStyles.optionText}>Share</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={popupStyles.closeButton}
            onPress={() => setIsMoreOptionsVisible(false)}
          >
            <Text style={popupStyles.closeButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Remarkable Options Popup */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isRemarkableOptionsVisible}
        onRequestClose={() => setIsRemarkableOptionsVisible(false)}
      >
        <View style={popupStyles.modalContainer}>
          <View style={popupStyles.optionContainer}>
            <Text style={popupStyles.reportText}>Report</Text>
            <TouchableOpacity
              onPress={() => handleRemarkableOptionSelect("Old Content")}
            >
              <View style={popupStyles.optionRow}>
                <CheckBox isChecked={false} />
                <Text style={popupStyles.optionText}>Old Content</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRemarkableOptionSelect("Clickbaitt")}
            >
              <View style={popupStyles.optionRow}>
                <CheckBox isChecked={false} />
                <Text style={popupStyles.optionText}>Clickbaitt</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRemarkableOptionSelect("Fake content")}
            >
              <View style={popupStyles.optionRow}>
                <CheckBox isChecked={false} />
                <Text style={popupStyles.optionText}>Fake content</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleRemarkableOptionSelect("Violent, threatening content")
              }
            >
              <View style={popupStyles.optionRow}>
                <CheckBox isChecked={false} />
                <Text style={popupStyles.optionText}>
                  Violent, threatening content
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRemarkableOptionSelect("Sexual content")}
            >
              <View style={popupStyles.optionRow}>
                <CheckBox isChecked={false} />
                <Text style={popupStyles.optionText}>Sexual content</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRemarkableOptionSelect("Ad or spam")}
            >
              <View style={popupStyles.optionRow}>
                <CheckBox isChecked={false} />
                <Text style={popupStyles.optionText}>Ad or spam</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRemarkableOptionSelect("Media won’t load")}
            >
              <View style={popupStyles.optionRow}>
                <CheckBox isChecked={false} />
                <Text style={popupStyles.optionText}>Media won’t load</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRemarkableOptionSelect("Other")}
            >
              <View style={popupStyles.optionRow}>
                <CheckBox isChecked={false} />
                <Text style={popupStyles.optionText}>Other</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={popupStyles.closeButton}
            onPress={() => setIsRemarkableOptionsVisible(false)}
          >
            <Text style={popupStyles.closeButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Share Options Popup */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isShareOptionsVisible}
        onRequestClose={() => setIsShareOptionsVisible(false)}
      >
        <View style={popupStyles.modalContainer}>
          <View style={popupStyles.optionContainer}>
            <Text style={popupStyles.reportText}>Share</Text>

            {/* Border */}
            <View style={popupStyles.border} />

            <View style={popupStyles.flex}>
              {/* Icons for Share */}
              <TouchableOpacity>
                <Image
                  source={require("../../assets/MoreOptionsIcons/whatsapp.png")}
                  style={popupStyles.sideIcon2}
                />
                <Text style={popupStyles.optionText}>WhatsApp</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={require("../../assets/MoreOptionsIcons/twitter.png")}
                  style={popupStyles.sideIcon2}
                />
                <Text style={popupStyles.optionText}>Twitter</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={require("../../assets/MoreOptionsIcons/facebook.png")}
                  style={popupStyles.sideIcon2}
                />
                <Text style={popupStyles.optionText}>Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={require("../../assets/MoreOptionsIcons/instagram.png")}
                  style={popupStyles.sideIcon2}
                />
                <Text style={popupStyles.optionText}>Instagram</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={popupStyles.closeButton}
            onPress={() => setIsShareOptionsVisible(false)}
          >
            <Text style={popupStyles.closeButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const popupStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  optionContainer: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  optionText: {
    fontSize: 13,
    fontWeight: "400",
    paddingVertical: 10,
  },
  closeButton: {
    backgroundColor: "#75D4E0",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  arrowIcon: {
    top: 8,
    left: 240,
  },
  border: {
    width: 340,
    height: 0.5,
    backgroundColor: "rgba(0, 0, 0, 0.20)",
  },
  flex2: {
    flexDirection: "row",
  },
  sideIcon: {
    top: 8,
    marginRight: 8,
  },
  sideIcon2: {
    top: 8,
    left: 5,
    marginTop: 25,
    width: 40,
    height: 40,
  },
  reportText: {
    fontSize: 15,
    fontWeight: "500",
    left: "40%",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkedBox: {
    fontSize: 20,
    marginRight: 10,
    color: "green",
  },
  uncheckedBox: {
    fontSize: 20,
    marginRight: 10,
    color: "black",
  },
});

export default TrendingNewsItem;
