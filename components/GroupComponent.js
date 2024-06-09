import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <View style={styles.groupChildPosition}>
        <Pressable
          style={[styles.groupChild, styles.groupChildPosition]}
          onPress={() => navigation.navigate("IPhone13148")}
        />
        <Text style={styles.chooseFromGallery}>Choose from gallery</Text>
      </View>
      <View style={[styles.groupItem, styles.groupItemPosition]} />
      <Image
        style={[styles.image21Icon, styles.groupItemPosition]}
        contentFit="cover"
        source={require("../assets/image-212.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 135,
    width: 300,
    position: "absolute",
  },
  groupItemPosition: {
    height: 50,
    top: 74,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorPaleturquoise,
  },
  chooseFromGallery: {
    top: 12,
    left: 5,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.adaminaRegular,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
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
  groupParent: {
    top: 432,
    left: 51,
    height: 135,
    width: 300,
    position: "absolute",
  },
});

export default GroupComponent;
