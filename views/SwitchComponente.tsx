import React, { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'

const SwitchComponente = () => {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () =>
        setIsEnabled(previousValue => !previousValue)
    return (
        <View style={styles.container}>
            <Text>HOLAS</Text>
            <Switch
                value={isEnabled}
                onChange={toggleSwitch}
                trackColor={{ false: "#FF0066", true: "#6600FF"}}
                thumbColor={isEnabled ? "#0066FF" : "#00FF66"}
                ios_backgroundColor={"#FF6600"}
            />
        </View>
  )
}

export default SwitchComponente

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
})