import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { AppButton } from '../components/ui/AppButton'
import {
    loadBrowseScreen,
    loadFavouritesScreen,
    lineOn,
    lineOff,
} from '../store/actions/card'

export const MainScreen = () => {
    const [flag, setFlag] = useState(browse)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadFavouritesScreen())
    }, [dispatch])
    const favourites = useSelector((state) => state.card.favouritesScreen)

    useEffect(() => {
        dispatch(loadBrowseScreen())
    }, [dispatch])
    const browse = useSelector((state) => state.card.browseScreen)

    useEffect(() => {
        dispatch(lineOn())
    }, [dispatch])
    const enableLine = useSelector((state) => state.card.lineON)

    useEffect(() => {
        dispatch(lineOff())
    }, [dispatch])
    const disableLine = useSelector((state) => state.card.lineOFF)

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <AppButton onPress={() => setFlag(favourites)}>
                    <Text style={{ ...styles.text, marginLeft: 30 }}>
                        Favourites
                    </Text>
                    {flag === favourites ? enableLine : disableLine}
                </AppButton>
                <AppButton onPress={() => setFlag(browse)}>
                    <Text style={{ ...styles.text, marginLeft: 40 }}>
                        Browse
                    </Text>
                    {flag === browse ? enableLine : disableLine}
                </AppButton>
            </View>
            {!flag ? browse : flag}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

    button: {
        paddingHorizontal: 20,
    },
    text: {
        fontFamily: 'ssp-bold',
        fontSize: 17,
    },
})
