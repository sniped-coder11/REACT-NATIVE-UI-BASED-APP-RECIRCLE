import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const IPhone13149 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131464}>
      <Text style={[styles.recents, styles.recentsPosition]}>Recents</Text>
      <Pressable
        style={styles.image25}
        onPress={() => navigation.navigate("IPhone13148")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-251.png")}
        />
      </Pressable>
      <Image
        style={[styles.iphone131464Child, styles.recentsPosition]}
        contentFit="cover"
        source={require("../assets/frame-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recentsPosition: {
    left: 6,
    position: "absolute",
  },
  recents: {
    top: 51,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.adaminaRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image25: {
    left: 349,
    top: 46,
    width: 30,
    height: 30,
    position: "absolute",
  },
  iphone131464Child: {
    top: 84,
    width: 378,
    height: 760,
  },
  iphone131464: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default IPhone13149;
