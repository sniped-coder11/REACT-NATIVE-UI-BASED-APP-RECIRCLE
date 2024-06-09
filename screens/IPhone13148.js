import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13148 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131463}>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Text style={styles.chooseFromGallery}>Choose from gallery</Text>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <Image
          style={[styles.image21Icon, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/image-212.png")}
        />
      </View>
      <View style={styles.iphone131463Child} />
      <Pressable
        style={[styles.iphone131463Item, styles.iphone131463Layout]}
        onPress={() => navigation.navigate("IPhone13149")}
      />
      <Text style={styles.permission}>Permission</Text>
      <Text style={styles.grantAccessTo}>
        Grant access to your photos for seamless scanning
      </Text>
      <Text style={[styles.allowAccessTo, styles.accessTypo]}>
        Allow access to all photos
      </Text>
      <View style={[styles.iphone131463Inner, styles.allowAccessTo1Position]} />
      <Text style={[styles.allowAccessTo1, styles.allowAccessTo1Position]}>
        Allow access to selected photos
      </Text>
      <View style={[styles.rectangleView, styles.iphone131463Layout]} />
      <Text style={[styles.denyAccessTo, styles.accessTypo]}>
        Deny access to photos
      </Text>
      <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
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
        <Image
          style={[styles.image21Icon1, styles.imageLayout]}
          contentFit="cover"
          source={require("../assets/image-21.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemPosition: {
    height: 50,
    top: 234,
    position: "absolute",
  },
  iphone131463Layout: {
    height: 14,
    width: 232,
    backgroundColor: Color.colorGainsboro,
    left: 61,
    borderRadius: Border.br_9xs,
  },
  accessTypo: {
    height: 9,
    width: 215,
    fontSize: FontSize.size_5xs,
    left: 66,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.adaminaRegular,
  },
  allowAccessTo1Position: {
    top: 304,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 390,
    height: 50,
    left: 0,
    position: "absolute",
  },
  imageLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
    height: 300,
    width: 300,
    position: "absolute",
  },
  chooseFromGallery: {
    top: 158,
    left: 10,
    fontSize: FontSize.size_11xl,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    fontFamily: FontFamily.adaminaRegular,
    position: "absolute",
  },
  groupItem: {
    left: 109,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSteelblue,
    width: 71,
  },
  image21Icon: {
    left: 119,
    width: 50,
  },
  ellipseParent: {
    top: 272,
    opacity: 0.7,
    height: 300,
    width: 300,
    left: 51,
    position: "absolute",
  },
  iphone131463Child: {
    top: 222,
    borderRadius: 16,
    backgroundColor: Color.colorWhite,
    width: 298,
    height: 130,
    left: 51,
    position: "absolute",
  },
  iphone131463Item: {
    top: 286,
    position: "absolute",
  },
  permission: {
    top: 227,
    fontSize: 10,
    color: "#808080",
    height: 40,
    width: 261,
    left: 61,
    textAlign: "left",
    fontFamily: FontFamily.adaminaRegular,
    position: "absolute",
  },
  grantAccessTo: {
    top: 246,
    fontSize: 12,
    color: Color.colorBlack,
    height: 40,
    width: 261,
    left: 61,
    textAlign: "left",
    fontFamily: FontFamily.adaminaRegular,
    position: "absolute",
  },
  allowAccessTo: {
    top: 288,
    position: "absolute",
  },
  iphone131463Inner: {
    height: 14,
    width: 232,
    backgroundColor: Color.colorGainsboro,
    left: 61,
    borderRadius: Border.br_9xs,
  },
  allowAccessTo1: {
    height: 9,
    width: 215,
    fontSize: FontSize.size_5xs,
    left: 66,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.adaminaRegular,
  },
  rectangleView: {
    top: 321,
    position: "absolute",
  },
  denyAccessTo: {
    top: 323,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_9xs,
    width: 390,
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
  image21Icon1: {
    top: 10,
    left: 133,
  },
  rectangleParent: {
    top: 798,
  },
  iphone131463: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13148;
