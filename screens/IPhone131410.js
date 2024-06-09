import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone131410 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131467}>
      <View style={[styles.scanQrCodeParent, styles.codeLayout]}>
        <Text style={styles.scanQrCode}>Scan QR Code</Text>
        <Image
          style={[styles.jamqrCodeIcon, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/jamqrcode.png")}
        />
      </View>
      <Image
        style={[styles.teenyiconsleftOutline, styles.teenyiconsleftLayout]}
        contentFit="cover"
        source={require("../assets/teenyiconsleftoutline.png")}
      />
      <Image
        style={[styles.teenyiconsleftOutline1, styles.teenyiconsleftLayout]}
        contentFit="cover"
        source={require("../assets/teenyiconsleftoutline1.png")}
      />
      <Image
        style={[styles.teenyiconsleftOutline2, styles.teenyiconsleftPosition]}
        contentFit="cover"
        source={require("../assets/teenyiconsleftoutline6.png")}
      />
      <Image
        style={[styles.teenyiconsleftOutline3, styles.teenyiconsleftPosition]}
        contentFit="cover"
        source={require("../assets/teenyiconsleftoutline3.png")}
      />
      <Text style={[styles.scanYourQr, styles.scanPosition]}>
        Scan Your QR Code
      </Text>
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
      <Text style={styles.scanPosition}>Scan Your QR Code</Text>
      <Image
        style={[styles.teenyiconsleftOutline, styles.teenyiconsleftLayout]}
        contentFit="cover"
        source={require("../assets/teenyiconsleftoutline.png")}
      />
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("IPhone131414")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={styles.scanQrCodeGroup}>
          <Text style={styles.scanQrCode}>Scan QR Code</Text>
          <Image
            style={[styles.jamqrCodeIcon, styles.groupItemPosition]}
            contentFit="cover"
            source={require("../assets/jamqrcode.png")}
          />
        </View>
      </Pressable>
      <Image
        style={[styles.teenyiconsleftOutline1, styles.teenyiconsleftLayout]}
        contentFit="cover"
        source={require("../assets/teenyiconsleftoutline1.png")}
      />
      <Image
        style={styles.whatsappImage20240605At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240605-at-1144-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  codeLayout: {
    height: 33,
    position: "absolute",
  },
  groupItemPosition: {
    left: 0,
    top: 0,
  },
  teenyiconsleftLayout: {
    height: 67,
    width: 67,
    position: "absolute",
    overflow: "hidden",
  },
  teenyiconsleftPosition: {
    top: 468,
    height: 67,
    width: 67,
    position: "absolute",
    overflow: "hidden",
  },
  scanPosition: {
    height: 47,
    width: 348,
    fontSize: FontSize.size_23xl,
    marginLeft: -159,
    marginTop: -287,
    textAlign: "left",
    fontFamily: FontFamily.adaminaRegular,
    left: "50%",
    top: "50%",
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
  groupLayout: {
    height: 63,
    width: 319,
    position: "absolute",
  },
  scanQrCode: {
    marginLeft: -69.5,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    width: 180,
    height: 28,
    textAlign: "left",
    fontFamily: FontFamily.adaminaRegular,
    marginTop: -16.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  jamqrCodeIcon: {
    width: 33,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  scanQrCodeParent: {
    marginTop: 173,
    marginLeft: -110,
    width: 221,
    left: "50%",
    top: "50%",
    height: 33,
  },
  teenyiconsleftOutline: {
    top: 213,
    left: 37,
  },
  teenyiconsleftOutline1: {
    top: 215,
    left: 290,
  },
  teenyiconsleftOutline2: {
    left: 292,
  },
  teenyiconsleftOutline3: {
    left: 38,
  },
  scanYourQr: {
    color: Color.colorWhite,
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
  groupItem: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  scanQrCodeGroup: {
    marginLeft: -110.5,
    marginTop: -16.5,
    height: 33,
    width: 221,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 580,
    left: 36,
  },
  whatsappImage20240605At1: {
    top: 260,
    left: 118,
    width: 165,
    height: 221,
    position: "absolute",
  },
  iphone131467: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone131410;
