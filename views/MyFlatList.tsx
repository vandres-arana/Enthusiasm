import { FlatList, Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const MyFlatList = () => {
    const onPress = () => {

    }
    return (
        <FlatList
            data={[{ title: 'Title Text', key: 'item1' }]}
            renderItem={({ item, index, separators }) => (
            <TouchableHighlight
                key={item.key}
                onPress={onPress}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <View style={{ backgroundColor: 'white' }}>
                <Text>{item.title}</Text>
                </View>
            </TouchableHighlight>
        )}
    />
    )
}

export default MyFlatList

const styles = StyleSheet.create({})