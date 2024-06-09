import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Frame4 = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.figmapIcon}
        contentFit="cover"
        source={require("../assets/figmap1.png")}
      />
      <Image
        style={[styles.child, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/vector-7.png")}
      />
      <Image
        style={styles.item}
        contentFit="cover"
        source={require("../assets/frame-11.png")}
      />
      <Image
        style={[styles.defaultMarkerComponent, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/default-marker-component.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 20,
    position: "absolute",
  },
  figmapIcon: {
    top: 0,
    left: 0,
    width: 395,
    height: 848,
    position: "absolute",
  },
  child: {
    top: 446,
    left: 167,
    width: 66,
  },
  item: {
    top: 477,
    left: 27,
    width: 19,
    height: 19,
    position: "absolute",
  },
  defaultMarkerComponent: {
    top: 458,
    left: 24,
    width: 16,
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Frame4;
