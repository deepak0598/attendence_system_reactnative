import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constant/Colors";
const Header = (props) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        style={styles.Gradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        colors={[Colors.PRIMARYCOLOR, Colors.SECONDARYCOLOR]}
      >
        <View style={styles.Header}>
          <View>{props.image}</View>
          <Text style={styles.Title}>Attendence System</Text>
          {props.children}
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    height: 140,
    backgroundColor: Colors.BACKGROUND,
    paddingTop: 30,
  },
  Gradient: {
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
  },
  Header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Title: {
    color: "white",
    fontSize: 23,
    fontFamily: "open-sans-bold",
  },
});
export default Header;
