import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../constant/Colors";
import { FontAwesome, Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
const Footer = (props) => {
  return (
    <View style={styles.Container}>
      <View style={styles.PersonalDetail}>
        <View style={styles.Personal}>
          <Text style={styles.Personal_Text}>FAQ</Text>
          <Ionicons name="ios-arrow-forward" size={20} color="black" />
        </View>
        <View style={{ ...styles.Personal, marginHorizontal: 8 }}>
          <Text style={styles.Personal_Text}>Contact</Text>
          <Ionicons name="ios-arrow-forward" size={20} color="black" />
        </View>
        <View style={styles.Personal}>
          <Text style={styles.Personal_Text}>Address</Text>
          <FontAwesome name="location-arrow" size={20} color="black" />
        </View>
      </View>
      <View style={styles.Details}>
        <View style={styles.Multimedia}>
          <View style={styles.Media}>
            <AntDesign name="twitter" size={24} color="#1DA1F2" />
          </View>
          <View style={styles.Media}>
            <Entypo name="youtube" size={24} color="red" />
          </View>
          <View style={styles.Media}>
            <AntDesign name="instagram" size={24} color="#C13584" />
          </View>
          <View style={{ ...styles.Media, borderRightWidth: 0 }}>
            <FontAwesome name="facebook-square" size={24} color="#4267B2" />
          </View>
        </View>
        <View style={styles.CopyRightContainer}>
          <View style={styles.CopyRight}>
            <Text style={styles.CopyRightContainerText}>
              Rawal Institute Copyright {"\u00A9"} 2016
            </Text>
          </View>
          <View style={styles.TermsAndCondition}>
            <Text style={styles.CopyRightContainerText}>Terms</Text>
            <Text
              style={{ ...styles.CopyRightContainerText, marginHorizontal: 11 }}
            >
              Privacy
            </Text>
            <Text style={styles.CopyRightContainerText}>
              Language Prefrences
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: 50,
  },
  Details: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  PersonalDetail: {
    position: "absolute",
    width: "100%",
    height: 70,
    backgroundColor: "transparent",
    top: 15,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  Personal: {
    backgroundColor: "white",
    height: 50,
    width: 110,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  Personal_Text: {
    fontFamily: "open-sans",
  },
  Multimedia: {
    height: 50,
    flexDirection: "row",
    marginTop: 50,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  Media: {
    flex: 1,
    borderRightWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  CopyRightContainer: {
    alignItems: "center",
    height: 20,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around",
  },
  TermsAndCondition: {
    flexDirection: "row",
  },
  CopyRightContainerText: {
    fontFamily: "open-sans",
    fontSize: 10,
  },
});
export default Footer;
