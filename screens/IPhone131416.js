import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const IPhone131416 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131465}>
      <Text style={[styles.recentlyScanned, styles.recentlyScannedPosition]}>
        Recently Scanned
      </Text>
      <Pressable
        style={styles.image25}
        onPress={() => navigation.navigate("IPhone13147")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-251.png")}
        />
      </Pressable>
      <Image
        style={[styles.iphone131465Child, styles.recentlyScannedPosition]}
        contentFit="cover"
        source={require("../assets/frame-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recentlyScannedPosition: {
    left: 6,
    position: "absolute",
  },
  recentlyScanned: {
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
  iphone131465Child: {
    top: 84,
    width: 378,
    height: 760,
  },
  iphone131465: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default IPhone131416;
