import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import CustomerCard from "../components/CustomerCard";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen1}>
      <Image
        style={styles.image22Icon}
        contentFit="cover"
        source={require("../assets/image-22.png")}
      />
      <CustomerCard />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("IPhone131411")}
      >
        <View style={[styles.groupChild, styles.partnerPosition]} />
        <View style={styles.partnerWrapper}>
          <Text style={[styles.partner, styles.partnerPosition]}>Partner</Text>
        </View>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
      </Pressable>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupInner, styles.groupPosition]} />
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
        <Image
          style={[styles.rectangleIcon, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 135,
    width: 300,
  },
  partnerPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItemLayout: {
    borderRadius: Border.br_5xs,
    height: 50,
    position: "absolute",
  },
  groupPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  imageLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  image22Icon: {
    top: -12,
    left: -9,
    width: 407,
    height: 856,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorPaleturquoise,
    height: 135,
    width: 300,
  },
  partner: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.adaminaRegular,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
  },
  partnerWrapper: {
    top: 77,
    left: 97,
    width: 107,
    height: 41,
    position: "absolute",
  },
  groupItem: {
    top: 17,
    left: 115,
    backgroundColor: Color.colorSteelblue,
    width: 71,
    height: 50,
  },
  rectangleParent: {
    top: 262,
    left: 45,
    position: "absolute",
  },
  groupInner: {
    top: 519,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_200,
    height: 50,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image18: {
    left: 41,
    top: 528,
    height: 30,
    width: 30,
  },
  image19: {
    left: 225,
    top: 528,
    height: 30,
    width: 30,
  },
  image20: {
    left: 318,
    top: 528,
    height: 30,
    width: 30,
  },
  image21: {
    left: 133,
    top: 529,
  },
  rectangleIcon: {
    left: 170,
    width: 50,
    height: 50,
    top: 0,
    borderRadius: Border.br_5xs,
  },
  rectangleGroup: {
    top: 279,
    height: 569,
  },
  screen1: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen1;
