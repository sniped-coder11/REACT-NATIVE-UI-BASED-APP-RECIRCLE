import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone131412 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131471}>
      <View style={styles.iphone131471Child} />
      <Pressable
        style={[styles.image22, styles.imageLayout]}
        onPress={() => navigation.navigate("IPhone13147")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-18.png")}
        />
      </Pressable>
      <Image
        style={[styles.image23Icon, styles.imageLayout]}
        contentFit="cover"
        source={require("../assets/image-19.png")}
      />
      <Pressable
        style={[styles.image24, styles.imageLayout]}
        onPress={() => navigation.navigate("IPhone131416")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-20.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image25, styles.imageLayout]}
        onPress={() => navigation.navigate("IPhone13148")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-21.png")}
        />
      </Pressable>
      <Text style={styles.information}>Information</Text>
      <Text style={styles.transactionId0000}>{`Transaction ID: 0000
Truck Number Plate: MH00AB1234
Type of Plastic: Oriented PET`}</Text>
      <Text style={styles.hangTightWere}>
        Hang tight, we're moving you to the next page
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("CircleWaveLoader")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.dataInsights}>Data insights</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  groupChildLayout: {
    height: 54,
    width: 238,
    position: "absolute",
  },
  iphone131471Child: {
    top: 794,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_200,
    width: 390,
    height: 50,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image22: {
    left: 41,
    top: 803,
    width: 30,
  },
  image23Icon: {
    left: 225,
    top: 803,
    width: 30,
  },
  image24: {
    left: 318,
    top: 803,
    width: 30,
  },
  image25: {
    left: 133,
    top: 804,
  },
  information: {
    marginTop: -343,
    marginLeft: -94,
    fontSize: 36,
    fontFamily: FontFamily.adaminaRegular,
    width: 188,
    height: 47,
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  transactionId0000: {
    marginTop: -266,
    marginLeft: -152,
    width: 305,
    height: 101,
    fontFamily: FontFamily.assistantRegular,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  hangTightWere: {
    marginTop: -16,
    marginLeft: -119,
    height: 65,
    width: 238,
    fontFamily: FontFamily.assistantRegular,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorPaleturquoise,
    left: 0,
  },
  dataInsights: {
    top: 14,
    left: 59,
    fontWeight: "700",
    fontFamily: FontFamily.abhayaLibreBold,
    color: Color.colorDarkslateblue_100,
    width: 121,
    height: 27,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 328,
    left: 76,
  },
  iphone131471: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone131412;
