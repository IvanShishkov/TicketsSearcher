import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { CardList } from '../components/CardList'
import { loadCards } from '../store/actions/card'

export const BrowseScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCards())
    }, [dispatch])

    const allCards = useSelector((state) => state.card.browseCards)

    return (
        <View style={styles.wrapper}>
            <CardList data={allCards} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
    },
})
