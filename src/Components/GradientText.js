import React from "react";
import { Text, TouchableHighlight } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";
const GradientText = ({ colors,start, end, locations, onPress, ...rest }) => {
    return (
        <MaskedView maskElement={<Text {...rest} />}>
            <TouchableHighlight onPress={onPress}>
                <LinearGradient colors={colors} start={start || { x: 0, y: 0 }} end={end ||{ x: 0, y: 1 }}
                    locations={locations || [0, 0.4]}>
                    <Text {...rest} style={[rest.style, { opacity: 0 }]} />
                </LinearGradient>
            </TouchableHighlight>
        </MaskedView>
    );
};
export default GradientText;