import React from "react";
import Home from "../screens/Home";
import Teacher from "../screens/Teacher";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import Colors from "../constant/Colors";
import Header from "../components/Header";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import SignUp from "../screens/SignUp";
import DrawerContent from "../components/DrawerContent";
function StackNavigatior({ navigation }) {
  const Stack = createStackNavigator();
  const logo = (
    <Image style={styles.Logo} source={require("../assets/logo.png")} />
  );
  const drawerLogo = (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <FontAwesome name="bars" size={29} color="white" />
    </TouchableOpacity>
  );
  return (
    <Stack.Navigator initialRouteName="Teacher">
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          header: () => <Header image={logo}></Header>,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation }) => {
            return (
              <View>
                {/* <SignUp ref={ref} /> */}
                <Header image={logo}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SignUp")}
                  >
                    <MaterialCommunityIcons
                      name="login"
                      size={30}
                      color={Colors.SECONDARYCOLOR}
                    />
                  </TouchableOpacity>
                </Header>
              </View>
            );
          },
        }}
      />

      <Stack.Screen
        name="Teacher"
        component={Teacher}
        options={{
          header: () => <Header image={drawerLogo}></Header>,
        }}
      />
    </Stack.Navigator>
  );
}
const Navigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="StackNavigatior"
        drawerContent={() => <DrawerContent />}
      >
        <Drawer.Screen name="StackNavigatior" component={StackNavigatior} />
        <Drawer.Screen name="SignUp" component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  Logo: {
    height: 70,
    width: 70,
  },
});
export default Navigator;
