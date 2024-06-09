import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const IPhone1314 = () => {
  return (
    <View style={styles.iphone13141}>
      <Image
        style={[styles.image23Icon, styles.image23IconPosition]}
        contentFit="cover"
        source={require("../assets/image-23.png")}
      />
      <Image
        style={styles.iphone13141Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.recircleCroppedWoBg1, styles.image23IconPosition]}
        contentFit="cover"
        source={require("../assets/recircle-cropped-wo-bg-1.png")}
      />
      <Image
        style={styles.imageRemovebgPreview12}
        contentFit="cover"
        source={require("../assets/imageremovebgpreview-1-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image23IconPosition: {
    width: 201,
    left: 95,
    position: "absolute",
  },
  image23Icon: {
    top: 321,
    height: 220,
  },
  iphone13141Child: {
    top: 372,
    left: 136,
    width: 119,
    height: 119,
    position: "absolute",
  },
  recircleCroppedWoBg1: {
    top: 560,
    height: 95,
  },
  imageRemovebgPreview12: {
    top: 655,
    width: 184,
    height: 30,
    left: 95,
    position: "absolute",
  },
  iphone13141: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default IPhone1314;
