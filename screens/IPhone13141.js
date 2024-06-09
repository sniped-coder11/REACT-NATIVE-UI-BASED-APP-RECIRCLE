import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const IPhone13141 = () => {
  return (
    <View style={styles.iphone13142}>
      <Image
        style={styles.image22Icon}
        contentFit="cover"
        source={require("../assets/image-22.png")}
      />
      <Image
        style={styles.iphone13142Child}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.recircleCroppedWoBg2}
        contentFit="cover"
        source={require("../assets/recircle-cropped-wo-bg-2.png")}
      />
      <Image
        style={styles.imageRemovebgPreview11}
        contentFit="cover"
        source={require("../assets/imageremovebgpreview-1-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image22Icon: {
    top: -12,
    left: -9,
    width: 407,
    height: 856,
    position: "absolute",
  },
  iphone13142Child: {
    top: -78,
    left: -305,
    width: 1000,
    height: 1000,
    position: "absolute",
  },
  recircleCroppedWoBg2: {
    top: 369,
    left: 98,
    width: 201,
    height: 95,
    position: "absolute",
  },
  imageRemovebgPreview11: {
    top: 506,
    left: 107,
    width: 184,
    height: 30,
    position: "absolute",
  },
  iphone13142: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13141;
