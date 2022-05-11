import { Alert, Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const MyKeyboardAvoidingView = () => {
    const showAlert = () =>
        Alert.alert('Submitted')
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View style={styles.inner}>
                    <Text style={styles.header}>Header</Text>
                    <TextInput placeholder={'Username'}
                        style={styles.textInput} />
                    <View style={styles.btnContainer}>
                        <Button title={'Submit'} onPress={showAlert} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default MyKeyboardAvoidingView

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
})