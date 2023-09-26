import { View, Text } from 'react-native'
import React from 'react'
import LinearBorderComponent from '../Components/LinearBorderComponent'
import CustomButton from '../Components/CustomButton'

const Home = () => {
    return (
        <View style={{ marginTop: 67 }}>
            <LinearBorderComponent />
            <CustomButton title={"hello"}/> 
        </View>
    )
}

export default Home