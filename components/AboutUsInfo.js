import React from "react";
import Colors from "../constant/Colors";
import { View, StyleSheet, Text } from "react-native";

const AboutUsInfo = (props) => {
  return (
    <View style={{ ...props.style, ...styles.AboutUsInfo }}>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  AboutUsInfo: {
    borderWidth: 3,
    backgroundColor: "white",
    borderColor: "black",
    height: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 10,
  },
});
export default AboutUsInfo;
