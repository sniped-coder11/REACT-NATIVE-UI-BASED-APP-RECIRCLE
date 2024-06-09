import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const DefaultMarkerComponent = () => {
  return (
    <View style={styles.frameIconLayout}>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/default-marker-component2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconLayout: {
    height: 20,
    width: 16,
  },
  frameIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
});

export default DefaultMarkerComponent;
