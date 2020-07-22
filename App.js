import React, { useState } from "react";
import Navigator from "./navigation/Navigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
}
