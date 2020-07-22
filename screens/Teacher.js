import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import TimeTable from "../components/TimeTable";
import axios from "axios";
import { Headline, Button } from "react-native-paper";
const Teacher = (props) => {
  const [login, setLogin] = useState("");
  // useEffect(() => {
  //   console.log("use Effect");
  //   axios
  //     .get("http://localhost:8080/student/timetable/1", {
  //       method: "GET",
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("error -->>  " + error);
  //     });
  // });
  return (
    <View style={styles.Container}>
      <Headline style={{ fontFamily: "open-sans-bold" }}>Time Table</Headline>
      {/* <TimeTable /> */}

      <Button
        color="red"
        mode="outlined"
        style={styles.MarkAttendence}
        icon="account-check-outline"
      >
        Mark Attendence
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  MarkAttendence: {
    height: 40,
    width: 350,
  },
});
export default Teacher;
