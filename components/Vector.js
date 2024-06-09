import * as React from "react";
import { StyleSheet, View } from "react-native";

const Vector = () => {
  return <View style={styles.vectorView} />;
};

const styles = StyleSheet.create({
  vectorView: {
    borderStyle: "solid",
    borderColor: "#9759b4",
    borderWidth: 1,
    width: 271,
    height: 366,
  },
});

export default Vector;
