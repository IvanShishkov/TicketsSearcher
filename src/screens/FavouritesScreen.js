import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { CardList } from '../components/CardList'

export const FavouritesScreen = () => {
    const favouritesCards = useSelector((state) => state.card.favouritesCards)

    if (!favouritesCards.length) {
        return (
            <View style={styles.wrapper}>
                <Text
                    style={{
                        fontFamily: 'ssp-regular',
                        textAlign: 'center',
                        marginVertical: 10,
                        fontSize: 18,
                    }}
                >
                    No favourites...
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.wrapper}>
            <CardList data={favouritesCards} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
    },
})
