import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Achievement = (props) => {
  return (
    <View style={StyleSheet.Achievement}>
      <ImageBackground
        style={styles.BackgroundImage}
        source={props.image}
        resizeMode="cover"
      >
        <View style={styles.AchievementContentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.AchievementContent}>{props.message}</Text>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  Achievement: {
    flex: 1,
  },
  BackgroundImage: {
    height: "100%",
    width: "100%",
  },
  AchievementContentContainer: {
    flex: 1,
    backgroundColor: "#00000060",
    padding: 40,
  },
  AchievementContent: {
    color: "white",
    fontFamily: "open-sans",
    textAlign: "justify",
    fontSize: 20,
  },
});
export default Achievement;
