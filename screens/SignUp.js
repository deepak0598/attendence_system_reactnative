import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CustomPicker } from "react-native-custom-picker";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constant/Colors";
import { ScrollView } from "react-native-gesture-handler";
const options = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Teacher",
    value: "teacher",
  },
  {
    label: "Student",
    value: "student",
  },
];
const SignUp = () => {
  // const SignUp = forwardRef((props, ref) => {
  //const [modalVisible, setModalVisible] = useState(false);
  // const showSignUpForm = () => {
  //   setModalVisible(true);
  // };
  // const hideSignUpForm = () => {
  //   setModalVisible(false);
  // };
  // useImperativeHandle(ref, () => {
  //   return {
  //     showSignUpForm,
  //   };
  // });
  const [visibility, SetVisibility] = useState(false);
  let visibilityName = "";
  let visibilityColor = "";
  if (visibility) {
    visibilityName = "visibility";
    visibilityColor = "dodgerblue";
  } else {
    visibilityName = "visibility-off";
    visibilityColor = "black";
  }
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.FormContainer}>
        <View
          style={{
            width: "100%",
            flexDirection: "row-reverse",
          }}
        >
          <CustomPicker
            style={{ height: 40, width: 200 }}
            placeholder={"Please select your role"}
            options={options}
            getLabel={(item) => item.label}
            modalStyle={{
              paddingTop: 25,
              paddingHorizontal: 30,
              paddingBottom: 40,
            }}
          />
        </View>
        <View style={styles.Form}>
          <Text style={styles.headings}>Email</Text>
          <TextInput style={styles.Fields} keyboardType="email-address" />
          <Text style={styles.headings}>Password</Text>
          <View style={{ width: "100%" }}>
            <TextInput
              autoCorrect={false}
              style={styles.Fields}
              keyboardType="default"
              underlineColorAndroid="transparent"
              secureTextEntry={!visibility}
            />
            <TouchableOpacity
              style={styles.VisiblityIcon}
              onPress={() => SetVisibility((visibility) => !visibility)}
            >
              <MaterialIcons
                name={visibilityName}
                size={24}
                color={visibilityColor}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.LogInButton}>
            <Text style={{ fontFamily: "open-sans", fontSize: 25 }}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  FormContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  Form: {
    marginTop: 190,
    width: "90%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.26,
    // shadowRadius: 6,
    // elevation: 10,
  },
  headings: {
    width: "100%",
    color: "black",
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  Fields: {
    width: "100%",
    fontSize: 17,
    paddingLeft: 2,
    borderBottomWidth: 3,
    borderColor: "black",
    color: "black",
  },
  VisiblityIcon: {
    position: "absolute",
    right: 8,
    top: 2,
  },
  LogInButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.PRIMARYCOLOR,
    height: 40,
    width: 150,
    marginTop: 25,
  },
});
export default SignUp;
{
  /* <View
  style={{
    flex: 1,
    width: "100%",
    backgroundColor: "#17161666",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <LinearGradient
    style={{ width: "90%" }}
    start={{ x: 0, y: 1 }}
    end={{ x: 0, y: 0 }}
    colors={[Colors.PRIMARYCOLOR, Colors.SECONDARYCOLOR]}
  >
    <View style={styles.FormContainer}>
      <TouchableOpacity style={{ position: "absolute", right: 0, top: 0 }}>
        <MaterialCommunityIcons
          name="close-octagon-outline"
          size={40}
          color="white"
        />
      </TouchableOpacity>
      <Text style={styles.headings}>Email</Text>
      <TextInput style={styles.Fields} keyboardType="email-address" />
      <Text style={styles.headings}>Password</Text>
      <View>
        <TextInput
          autoCorrect={false}
          style={styles.Fields}
          keyboardType="default"
          underlineColorAndroid="transparent"
          secureTextEntry={!visibility}
        />
        <TouchableOpacity
          style={styles.VisiblityIcon}
          // onPress={() => SetVisibility((visibility) => !visibility)}
        >
          <MaterialIcons
            name={visibilityName}
            size={24}
            color={visibilityColor}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            height: 40,
            width: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "open-sans-bold",
              fontSize: 20,
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>
        <Picker
          style={{
            height: 40,
            width: 150,
            color: "white",
            backgroundColor: "red",
          }}
          dropdownTextStyle={{
            width: 300,
            backgroundColor: "#fff",
            fontSize: 20,
          }}
          dropdownStyle={{ width: "100%" }}
          mode="dropdown"
        >
          <Picker.Item label="Select Role" value="role" />
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="H.O.D" value="hod" />
          <Picker.Item label="Teacher" value="teacher" />
          <Picker.Item label="Student" value="student" />
        </Picker>
      </View>
    </View>
  </LinearGradient>
</View>; */
}
