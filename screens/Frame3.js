import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const Frame3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image
        style={styles.basemapImageIcon}
        contentFit="cover"
        source={require("../assets/basemap-image.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Pressable
          style={[styles.image18, styles.imageLayout]}
          onPress={() => navigation.navigate("IPhone13147")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-18.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.image19, styles.imageLayout]}
          onPress={() => navigation.navigate("IPhone13145")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-19.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.image20, styles.imageLayout]}
          onPress={() => navigation.navigate("IPhone131416")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-20.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.image21, styles.imageLayout]}
          onPress={() => navigation.navigate("IPhone13148")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-21.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={styles.imageRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/imageremovebgpreview-11.png")}
      />
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={styles.imageRemovebgPreview4Icon}
        contentFit="cover"
        source={require("../assets/imageremovebgpreview-4.png")}
      />
      <Image
        style={styles.defaultMarkerComponent}
        contentFit="cover"
        source={require("../assets/default-marker-component2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 50,
    width: 390,
    left: 0,
    position: "absolute",
  },
  imageLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  basemapImageIcon: {
    left: -5,
    width: 395,
    top: 0,
    position: "absolute",
    height: 844,
  },
  groupChild: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_200,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image18: {
    left: 41,
    top: 9,
    height: 30,
    width: 30,
  },
  image19: {
    left: 225,
    top: 9,
    height: 30,
    width: 30,
  },
  image20: {
    left: 318,
    top: 9,
    height: 30,
    width: 30,
  },
  image21: {
    left: 133,
    top: 10,
  },
  rectangleParent: {
    top: 798,
  },
  child: {
    top: 171,
    left: 93,
    width: 271,
    height: 463,
    position: "absolute",
  },
  imageRemovebgPreview1Icon: {
    top: 204,
    left: 101,
    width: 10,
    height: 12,
    position: "absolute",
  },
  image6Icon: {
    top: 584,
    left: 337,
    width: 41,
    height: 41,
    position: "absolute",
  },
  imageRemovebgPreview4Icon: {
    top: 596,
    left: 353,
    width: 7,
    height: 9,
    position: "absolute",
  },
  defaultMarkerComponent: {
    top: 615,
    left: 360,
    width: 16,
    height: 20,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
  },
});

export default Frame3;
