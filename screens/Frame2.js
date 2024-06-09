import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const Frame2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={[styles.figmap, styles.figmapPosition]}>
        <Image
          style={[styles.basemapImageIcon, styles.figmapPosition]}
          contentFit="cover"
          source={require("../assets/basemap-image2.png")}
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
      </View>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={styles.item}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={styles.defaultMarkerComponent}
        contentFit="cover"
        source={require("../assets/default-marker-component.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  figmapPosition: {
    width: 395,
    left: 0,
    top: 0,
    position: "absolute",
  },
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
    height: 844,
  },
  groupChild: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_200,
    top: 0,
    width: 390,
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
  figmap: {
    height: 848,
  },
  child: {
    top: 300,
    left: 81,
    width: 281,
    height: 352,
    position: "absolute",
  },
  item: {
    top: 631,
    left: 72,
    width: 21,
    height: 21,
    position: "absolute",
  },
  defaultMarkerComponent: {
    top: 286,
    left: 359,
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

export default Frame2;
