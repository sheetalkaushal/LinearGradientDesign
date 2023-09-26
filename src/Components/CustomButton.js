
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import comonStyles from '../styles/comonStyles';
import LinearGradient from 'react-native-linear-gradient';
import color from '../styles/color';
import GradientText from './GradientText';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { moderateScaleVertical } from '../styles/responsiveSize'

const CustomButton = ({
  title,
  onPress,
  containerStyle,
  customizeBtnStyle,
  btnTitleStyle,
  colors,
  hasGradientText = false
}) => {
  return (
    <LinearGradient
      colors={colors || [
        color.GradientColorDark,
        color.GradientColorLight,

      ]}
      style={[styles.gradientBtnStyle, containerStyle]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.9]}>
      <TouchableOpacity
        style={[styles.btnStyle, customizeBtnStyle]}
        onPress={onPress}
        activeOpacity={0.8}>
        {hasGradientText ?
          <GradientText
            colors={[color.GradientColorDark, color.GradientColorLight]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0, 0.9]}
            style={{ ...comonStyles.medium16 }}>
            {title}
          </GradientText> :
          <Text numberOfLines={1} style={[btnTitleStyle, styles.textStyle]}>{title}</Text>}

      </TouchableOpacity>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  gradientBtnStyle: {
    width: 250,
    height: 50,
    marginTop: verticalScale(40),
    alignSelf: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
  },
  btnStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    textAlign: 'center',
    ...comonStyles.semiBold14,
    color: color.Black
  },

});

export default CustomButton;
