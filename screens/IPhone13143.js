import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const IPhone13143 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13145}>
      <Image
        style={styles.basemapImageIcon}
        contentFit="cover"
        source={require("../assets/basemap-image3.png")}
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
        style={styles.iphone13145Child}
        contentFit="cover"
        source={require("../assets/vector-12.png")}
      />
      <Image
        style={styles.iphone13145Item}
        contentFit="cover"
        source={require("../assets/vector-11.png")}
      />
      <Image
        style={[styles.iphone13145Inner, styles.iphone13145InnerLayout]}
        contentFit="cover"
        source={require("../assets/group-21.png")}
      />
      <Image
        style={[styles.defaultMarkerComponent, styles.iphone13145InnerLayout]}
        contentFit="cover"
        source={require("../assets/default-marker-component3.png")}
      />
      <Image
        style={[styles.defaultMarkerComponent, styles.iphone13145InnerLayout]}
        contentFit="cover"
        source={require("../assets/default-marker-component4.png")}
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
  iphone13145InnerLayout: {
    width: 16,
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
  iphone13145Child: {
    top: 205,
    left: 94,
    width: 270,
    height: 365,
    position: "absolute",
  },
  iphone13145Item: {
    top: 314,
    left: 161,
    maxWidth: "100%",
    height: 4,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13145Inner: {
    top: 543,
    left: 344,
    height: 16,
  },
  defaultMarkerComponent: {
    top: 182,
    left: 86,
    height: 20,
  },
  iphone13145: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
  },
});

export default IPhone13143;
