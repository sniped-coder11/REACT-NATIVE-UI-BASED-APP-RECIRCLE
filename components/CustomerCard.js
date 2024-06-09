import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const CustomerCard = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.rectangleParent, styles.groupChildLayout]}
      onPress={() => navigation.navigate("IPhone13147")}
    >
      <View style={[styles.groupChild, styles.customerPosition]} />
      <View style={styles.customerParent}>
        <Text style={[styles.customer, styles.customerPosition]}>Customer</Text>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <Image
          style={[styles.image26Icon, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/image-26.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 135,
    width: 300,
  },
  customerPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItemPosition: {
    height: 50,
    top: 67,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorPaleturquoise,
    height: 135,
    width: 300,
  },
  customer: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.adaminaRegular,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
  },
  groupItem: {
    left: 36,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSteelblue,
    width: 71,
  },
  image26Icon: {
    left: 46,
    width: 50,
  },
  customerParent: {
    top: 9,
    left: 79,
    width: 142,
    height: 117,
    position: "absolute",
  },
  rectangleParent: {
    top: 425,
    left: 45,
    position: "absolute",
  },
});

export default CustomerCard;
