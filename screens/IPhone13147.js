import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import { Border, Color } from "../GlobalStyles";

const IPhone13147 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131462}>
      <Image
        style={styles.image22Icon}
        contentFit="cover"
        source={require("../assets/image-22.png")}
      />
      <GroupComponent1
        onGroupPressablePress={() => navigation.navigate("IPhone13145")}
      />
      <GroupComponent />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={[styles.image18Icon, styles.imageLayout]}
          contentFit="cover"
          source={require("../assets/image-18.png")}
        />
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
      <Pressable
        style={[styles.image25, styles.imageLayout]}
        onPress={() => navigation.navigate("Screen1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-25.png")}
        />
      </Pressable>
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
  image22Icon: {
    top: -12,
    left: -9,
    width: 407,
    height: 856,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_200,
  },
  image18Icon: {
    left: 41,
    top: 9,
    width: 30,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image19: {
    left: 225,
    top: 9,
    width: 30,
  },
  image20: {
    left: 318,
    top: 9,
    width: 30,
  },
  image21: {
    left: 133,
    top: 10,
  },
  rectangleParent: {
    top: 798,
  },
  image25: {
    left: 351,
    top: 13,
  },
  iphone131462: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13147;
