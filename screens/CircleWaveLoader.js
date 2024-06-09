import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const CircleWaveLoader = () => {
  return (
    <View style={styles.circleWaveLoader1}>
      <View style={styles.circleWaveLoader1Child} />
    </View>
  );
};

const styles = StyleSheet.create({
  circleWaveLoader1Child: {
    position: "absolute",
    top: 390,
    left: 163,
    borderRadius: 55,
    backgroundColor: "#3ec3ff",
    width: 65,
    height: 65,
    overflow: "hidden",
  },
  circleWaveLoader1: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default CircleWaveLoader;
