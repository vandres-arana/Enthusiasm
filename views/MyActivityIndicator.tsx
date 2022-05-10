import { ActivityIndicator, StyleSheet, Text, TurboModuleRegistry, View } from 'react-native'
import React from 'react'

const MyActivityIndicator = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator animating={true} />
            <ActivityIndicator size={'large'} />
            <ActivityIndicator size={'small'} color={"#FF0826"} />
            <ActivityIndicator size={'large'} color={"#00FF00"} hidesWhenStopped={true} />
        </View>
    )
}

export default MyActivityIndicator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
})