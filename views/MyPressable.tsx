import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const MyPressable = () => {
    const [timePressed, setTimePressed] = useState(0);

    let textLog = '';
    if (timePressed > 1) {
        textLog = timePressed + 'x onPress';
    } else if (timePressed > 0) {
        textLog = 'onPress';
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    setTimePressed((current) => current + 1);
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(210, 15, 36)'
                            : 'white'
                    },
                    styles.wrepperCustom
                ]}>
                    {({ pressed }) => (
                        <Text style={styles.text}>
                            {pressed ? 'Pressed' : 'Press me'}
                        </Text>
                    )}
            </Pressable>

            <View style={styles.logBox}>
                <Text testID='pressable_press_console'>{textLog}</Text>
            </View>
        </View>
    )
}

export default MyPressable

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
    wrepperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
})