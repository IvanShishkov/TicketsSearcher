import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'

import { Card } from './Card'

export const CardList = ({ data }) => {
    return (
        <View style={styles.list}>
            <FlatList
                data={data}
                keyExtractor={(card) => card.id.toString()}
                renderItem={({ item }) => <Card card={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        alignSelf: 'stretch',
    },
})
