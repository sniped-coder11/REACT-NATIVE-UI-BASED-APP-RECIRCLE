import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent1 = ({
  groupViewTop,
  groupViewLeft,
  onGroupPressablePress,
}) => {
  const groupPressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
      ...getStyleValue("left", groupViewLeft),
    };
  }, [groupViewTop, groupViewLeft]);

  return (
    <Pressable
      style={[
        styles.rectangleParent,
        styles.groupChildLayout,
        groupPressableStyle,
      ]}
      onPress={onGroupPressablePress}
    >
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={styles.useCameraToScanParent}>
        <Text style={[styles.useCameraTo, styles.groupChildPosition]}>
          Use Camera to scan
        </Text>
        <Image
          style={[styles.image21Icon, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/image-211.png")}
        />
        <View style={[styles.groupItem, styles.groupItemLayout]} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 135,
    width: 300,
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  groupItemLayout: {
    height: 50,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorPaleturquoise,
    top: 0,
    height: 135,
    width: 300,
  },
  useCameraTo: {
    top: 51,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.adaminaRegular,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
  },
  image21Icon: {
    top: 1,
    left: 114,
    width: 50,
  },
  groupItem: {
    left: 104,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSteelblue,
    width: 71,
    top: 0,
  },
  useCameraToScanParent: {
    top: 17,
    left: 8,
    width: 281,
    height: 92,
    position: "absolute",
  },
  rectangleParent: {
    top: 273,
    left: 48,
    position: "absolute",
  },
});

export default GroupComponent1;
