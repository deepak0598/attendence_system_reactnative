import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { View, StyleSheet } from "react-native";
const Slider = (props) => {
  return (
    <SliderBox
      ImageComponentStyle={{ width: "97%", marginTop: 7 }}
      autoplay
      circleLoop
      images={props.images}
    />
  );
};
const styles = StyleSheet.create({
  Slider: {
    width: "80%",
  },
});

export default Slider;
