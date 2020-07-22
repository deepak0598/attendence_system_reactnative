import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");
const days = ["Mod", "Tue", "Wed", "Thu", "Fri"];
const lectures = [
  "Lecture 1",
  "Lecture 2",
  "Lecture 3",
  "Lecture 4",
  "Lecture 5",
  "Lecture 6",
  "Lecture 7",
  "Lecture 8",
];
const tableData = [
  [10, 20, 30, 40, 50],
  [11, 21, 31, 41, 51],
  [12, 22, 32, 42, 52],
  [13, 23, 33, 43, 53],
  [14, 24, 34, 44, 54],
  [15, 25, 35, 45, 55],
  [16, 26, 36, 46, 56],
  [17, 27, 37, 47, 57],
  [18, 28, 38, 48, 58],
];
const TimeTable = () => {
  return (
    <View style={styles.Container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ ...styles.Table, borderWidth: 2, borderColor: "black" }}>
          <View style={styles.TitleRow}>
            <View style={[styles.SerialNumber, styles.Border]}></View>
            <View style={[styles.DaysTitle, styles.FlexDir]}>
              {days.map((day, index) => (
                <Text style={[styles.Days, styles.Border]} key={index}>
                  {day}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.DataRow}>
            <View style={styles.LectureNumber}>
              {lectures.map((lecture, index) => (
                <Text style={[styles.Border, styles.Lecture]} key={index}>
                  {lecture}
                </Text>
              ))}
            </View>
            <View style={styles.DataCell}>
              {tableData.map((cell, index) => {
                return (
                  <View key={index + cell} style={styles.Columns}>
                    {cell.map((data, index) => {
                      return (
                        <Text
                          key={index + cell}
                          style={[styles.Cell, styles.Border]}
                        >
                          {data}
                        </Text>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  Fonts: {
    fontFamily: "open-sans",
  },
  FlexDir: {
    flexDirection: "row",
  },
  Border: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 2,
    borderColor: "black",
  },
  Table: {
    height: 540,
    width: 900,
  },
  TitleRow: {
    flexDirection: "row",
    width: "100%",
    height: 60,
  },
  SerialNumber: {
    flexDirection: "row",
    width: 150,
  },
  DaysTitle: {
    width: 750,
  },
  DataRow: {
    flexDirection: "row",
    height: 480,
    width: "100%",
  },
  LectureNumber: {
    width: 150,
  },
  DataCell: {
    width: 750,
  },
  Days: {
    width: 150,
    textAlign: "center",
  },
  Lecture: {
    height: 60,
  },
  Columns: {
    flexDirection: "row",
    height: 60,
  },
  Cell: {
    width: 150,
  },
});
export default TimeTable;
// transform: [
//               { rotate: "45deg" },
//               { translateX: -49 },
//               { translateY: -21 },
//             ],
