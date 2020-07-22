import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../constant/Colors";
import { Avatar, Button, Divider } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";

const DrawerContent = ({ navigation }) => {
  const [profile, setProfile] = useState("");
  const storeData = async (path) => {
    try {
      await AsyncStorage.setItem("profile", path);
    } catch (e) {
      console.log("storeData :: " + value);
    }
  };
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let IMAGEURL = await ImagePicker.launchImageLibraryAsync();
    setProfile({ image: IMAGEURL.uri });
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ marginBottom: 15 }}
        colors={["white", Colors.BACKGROUND]}
      >
        <View style={styles.header}>
          <Avatar.Image
            style={styles.Image}
            size={150}
            source={{ uri: profile.image }}
          />
          <Text style={styles.Name}>Hello Deepak</Text>
        </View>
      </LinearGradient>
      <View style={styles.OptionsContainer}>
        <Button
          labelStyle={{ fontSize: 15 }}
          contentStyle={styles.Profile}
          color="black"
          mode="outlined"
          style={styles.Profile}
          icon="camera"
          onPress={openImagePickerAsync}
        >
          Change Profile
        </Button>
        <View style={{ width: "100%", paddingTop: 50 }}>
          <TouchableOpacity style={styles.Options}>
            <Avatar.Icon
              size={30}
              icon="key"
              color={"black"}
              style={{ backgroundColor: "white" }}
            />
            <Text style={styles.OptionText}>Change Password</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.Options}>
            <Avatar.Icon
              size={30}
              icon="wallet-travel"
              color={"black"}
              style={{ backgroundColor: "white" }}
            />
            <Text style={styles.OptionText}>Holidays</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.Options}>
            <Avatar.Icon
              size={30}
              icon="lock-open"
              color={"black"}
              style={{ backgroundColor: "white" }}
            />
            <Text style={styles.OptionText}>Sign out</Text>
          </TouchableOpacity>
          <Divider />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignContent: "center",
  },
  Image: {
    marginVertical: 10,
    alignSelf: "center",
  },
  Name: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    color: "white",
  },
  OptionsContainer: {
    alignItems: "center",
  },
  Profile: {
    height: 40,
    width: 250,
  },
  Options: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 60,
  },
  OptionText: {
    fontFamily: "open-sans",
    paddingLeft: 10,
    fontSize: 14,
  },
});
export default DrawerContent;
