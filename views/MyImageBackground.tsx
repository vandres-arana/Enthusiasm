import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

const image = { uri: 'https://reactjs.org/logo-og.png' }

const MyImageBackground = () => {
  return (
    <View style={styles.container}>
        <ImageBackground 
            source={image} 
            resizeMode={'cover'}
            style={styles.image}>
                <Text style={styles.text}>Inside</Text>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    source={image}
                />
            </ImageBackground>
    </View>
  )
}

export default MyImageBackground

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});