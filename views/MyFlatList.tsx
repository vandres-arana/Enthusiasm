import { ColorValue, FlatList, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

type ItemProps = {
    id: number;
    title: String;
}

const DATA: ItemProps[] = [
    {
        id: 16,
        title: 'First Title'
    },
    {
        id: 32,
        title: 'Second Title'
    },
    {
        id: 48,
        title: 'Third Title'
    },
    {
        id: 64,
        title: 'Fourth Title'
    },
    {
        id: 80,
        title: 'Fifth Title'
    },
];

type ItemViewProps = {
    item: ItemProps;
    onPressItem: () => void;
    backgroundColor: ColorValue;
    textColor: ColorValue;
}

const Item: React.FC<ItemViewProps> = ({
    item,
    onPressItem,
    backgroundColor,
    textColor,
}) => {
    return (
        <TouchableOpacity
            onPress={onPressItem}
            style={[styles.item, { backgroundColor }]}
        >
            <Text style={{ color: textColor}}>
                Andres {item.title}
            </Text>
        </TouchableOpacity> 
    )
}

const MyFlatList = () => {
    const [selectedId, setSelectedId] = useState(0);

    const renderItem = (props: any) => {
        let item = props.item
        const backgroundColor = item.id == selectedId ? '#FF8070' : '#00A8F0';
        const color = item.id == selectedId ? 'white' : 'black';

        const selectItem = () =>
            setSelectedId(item.id)

        return (
            <Item
                item={item}
                onPressItem={selectItem}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        )
    }

    const extractKey = (item: any) => item.id

    return (
        <View>
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={extractKey}
                extraData={selectedId}
            />
        </View>
    )
}

export default MyFlatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 12,
        color: 'white',
    },
})