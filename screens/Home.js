import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import Slider from "../components/Slider";
import Colors from "../constant/Colors";
import AboutUsInfo from "../components/AboutUsInfo";
import Message from "../constant/Message";
import { LinearGradient } from "expo-linear-gradient";
import Thoughts from "../components/Thoughts";
import Achievement from "../components/Achievement";
import ArrayOfImages from "../constant/ArrayOfImages";
import ArrayOFMessages from "../constant/ArrayOFMessages";
import Footer from "../components/Footer";

const ScreenWidth = Math.round(Dimensions.get("window").width);
const { width } = Dimensions.get("window");
const Home = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.SliderContainer}>
        <View>
          <Slider images={ArrayOfImages.SLIDERIMAGES} />
        </View>
        <View>
          <View style={styles.AboutUsHeading}>
            <Text style={styles.Headings}>About Us</Text>
          </View>
          <View>
            <AboutUsInfo style={{ borderLeftWidth: 0, width: 250 }}>
              <Text style={styles.Author}>Chairman's Message</Text>
              <Text style={styles.Message}>{Message.ONE}</Text>
            </AboutUsInfo>
            <View style={styles.ExclusiveView}>
              <AboutUsInfo
                style={{
                  width: 250,
                  borderRightWidth: 0,
                }}
              >
                <LinearGradient
                  style={[
                    styles.Gradient,
                    {
                      transform: [
                        { rotateZ: "-45deg" },
                        { translateX: -47 },
                        { translateY: -35 },
                      ],
                    },
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={[
                    "#BF953F",
                    "#FCF6BA",
                    "#B38728",
                    "#FBF5B7",
                    "#AA771C",
                  ]}
                >
                  <Text style={styles.Exclusive}>Exclusive</Text>
                </LinearGradient>
                <Text style={styles.Author}>Director's Message</Text>
                <Text style={styles.Message}>{Message.TWO}</Text>
              </AboutUsInfo>
            </View>
          </View>
          <Text
            style={{
              ...styles.Headings,
              marginTop: 7,
            }}
          >
            Students thoughts
          </Text>
          <View style={styles.ThoughtContainer}>
            <ScrollView
              horizontal={true}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            >
              {ArrayOFMessages.STUDENTSTHOUGHTS.map((message, index) => {
                return (
                  <View key={index} style={styles.Thought}>
                    <Thoughts
                      images={ArrayOfImages.STUDENTSIMAGES[index]}
                      message={message}
                    ></Thoughts>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <Text style={styles.Headings}>Achievements</Text>
          {ArrayOfImages.ACHIEVEMENTIMAGES.map((image, index) => (
            <View key={index} style={styles.Achievements}>
              <Achievement
                image={image}
                message={ArrayOFMessages.ACHIEVEMENTSMESSAGE[index]}
              />
            </View>
          ))}
          <View style={styles.Footer}>
            <Footer></Footer>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Gradient: {
    height: 30,
    width: 170,
    position: "absolute",
    justifyContent: "center",
  },
  Exclusive: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "open-sans-bold",
    color: "black",
    backgroundColor: "transparent",
  },
  ExclusiveView: {
    marginTop: 20,
    width: 250,
    marginLeft: ScreenWidth - 250,
    overflow: "hidden",
  },
  SliderContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  AboutUsHeading: {
    marginVertical: 7,
  },
  Headings: {
    paddingTop: 15,
    height: 60,
    textAlign: "center",
    width: "100%",
    backgroundColor: Colors.BACKGROUND,
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
  },
  AboutUsInfo: {
    borderLeftWidth: 0,
  },
  Message: {
    textAlign: "justify",
    fontFamily: "open-sans",
    fontSize: 16,
    padding: 15,
  },
  Author: {
    textAlign: "center",
    marginTop: 15,
    fontFamily: "open-sans-bold",
    color: Colors.PRIMARYCOLOR,
    fontSize: 17,
  },
  SignUpForm: {
    backgroundColor: "white",
    marginTop: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 10,
  },
  ThoughtContainer: {
    marginVertical: 3,
  },
  Thought: {
    width: width,
    backgroundColor: "white",
    height: 550,
    justifyContent: "center",
    alignItems: "center",
  },
  Achievements: {
    marginVertical: 10,
    height: 400,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 9,
  },
  Footer: {
    backgroundColor: "white",
    width: "100%",
    height: 200,
  },
});
export default Home;
