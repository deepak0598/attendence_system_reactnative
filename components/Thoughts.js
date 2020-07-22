import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
const Thoughts = (props) => {
  return (
    <View style={styles.Container}>
      <View style={styles.ImageContainer}>
        <View style={styles.ImageSubContainer}>
          <Image
            style={{ ...styles.Image, ...props.styles }}
            source={props.images}
          />
        </View>
      </View>
      <View style={styles.MessageContainer}>
        <Text style={styles.Message}>{props.message}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    width: "98%",
    height: "98%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 3,
  },
  ImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  ImageSubContainer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: 150,
    width: 150,
    borderColor: "black",
    borderRadius: 100,
    borderWidth: 2,
  },
  Image: {
    flex: 1,
    resizeMode: "contain",
  },
  MessageContainer: {},
  Message: {
    height: 320,
    backgroundColor: "white",
    textAlign: "justify",
    fontSize: 16,
    fontFamily: "open-sans",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 10,
  },
});
export default Thoughts;
