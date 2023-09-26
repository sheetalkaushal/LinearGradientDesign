import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
const LinearBorderComponent = ({ borderStyle }) => {
  return (
    <View>
      {Platform.OS === "ios" && (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[1.0, 0.5, 0, 0]}
          colors={["#00101c", "#C89A09", "#DDC814", "#00101c"]}
          style={[styles.borderlinestyle, borderStyle]}
        />
      )}
      {Platform.OS === "android" && (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.0, 0.4, 0.0, 1]}
          colors={["#00101c", "#C89A09", "#DDC814", "#00101c"]}
          style={[styles.borderlinestyle, borderStyle]}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  borderlinestyle: {
    height: 1,
    marginHorizontal: moderateScale(17),
    borderRadius: 10,
  },
});
export default LinearBorderComponent;