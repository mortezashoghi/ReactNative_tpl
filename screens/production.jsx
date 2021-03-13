import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import Slick from "react-native-slick";
const Production = (props) => {
  return (
    <Slick style={styles.wrapper} showsButtons={false} horizontal={true}>
      <TouchableHighlight
        onPress={() => {
          alert("قرعه کشی");
        }}
        style={styles.slide1}
      >
        <Text style={styles.text}>قرعه کشی</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          alert("پیشنهاد ویژه");
        }}
        style={styles.slide2}
      >
        <Text style={styles.text}>پیشنهاد ویژه</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          alert("سینما");
        }}
        style={styles.slide3}
      >
        <Text style={styles.text}>سینما</Text>
      </TouchableHighlight>
      <View style={styles.slide4}>
        <Text style={styles.text}>ورزشی</Text>
      </View>
    </Slick>
  );
};
var styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5dede",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcae8a",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ed4040",
  },
  slide4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#53efef",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Production;
