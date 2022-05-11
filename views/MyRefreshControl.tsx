import { RefreshControl, SafeAreaView, SafeAreaViewBase, ScrollView, StyleSheet, Text, TouchableWithoutFeedbackComponent, View } from 'react-native'
import React from 'react'

const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}

const MyRefreshControl = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(
      () => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      },
      [],
    )

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor={'rgb(220, 15, 30)'}
                    />
                }
            >
                <Text>Pull down to see RefreshControl indicator.</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MyRefreshControl

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});