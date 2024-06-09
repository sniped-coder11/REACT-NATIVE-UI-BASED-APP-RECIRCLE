import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const INDORETOSURAT = () => {
  return (
    <View style={styles.indoreToSurat}>
      <Image
        style={styles.figmapIcon}
        contentFit="cover"
        source={require("../assets/figmap.png")}
      />
      <Image
        style={styles.indoreToSuratChild}
        contentFit="cover"
        source={require("../assets/vector-7.png")}
      />
      <Image
        style={[styles.indoreToSuratItem, styles.indoreToSuratItemLayout]}
        contentFit="cover"
        source={require("../assets/frame-1.png")}
      />
      <Image
        style={[styles.defaultMarkerComponent, styles.indoreToSuratItemLayout]}
        contentFit="cover"
        source={require("../assets/default-marker-component.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  indoreToSuratItemLayout: {
    width: 16,
    position: "absolute",
  },
  figmapIcon: {
    top: 0,
    left: 0,
    width: 395,
    position: "absolute",
    height: 844,
  },
  indoreToSuratChild: {
    top: 446,
    left: 167,
    width: 66,
    height: 20,
    position: "absolute",
  },
  indoreToSuratItem: {
    top: 329,
    left: 329,
    height: 16,
  },
  defaultMarkerComponent: {
    top: 458,
    left: 24,
    height: 20,
  },
  indoreToSurat: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default INDORETOSURAT;
