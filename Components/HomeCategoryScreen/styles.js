import { StyleSheet } from "react-native";

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
  messageBox: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  messageText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
